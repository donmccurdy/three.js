class TaskManager {

	constructor () {

		this.tasks = {};
		this.tasksInitialized = null;

		// TODO(donmccurdy): Default should probably be zero.
		this.workerLimit = typeof navigator === 'undefined' ? 4 : navigator.hardwareConcurrency;
		this.workerPool = [];
		this.workerNextTaskID = 1;
		this.workerScripts = [];
		this.workerSource = '';
		this.workerSourceURL = '';

	}

	setWorkerLimit ( workerLimit ) {

		this.workerLimit = workerLimit;

		return this;

	}

	addScript ( scriptContent ) {

		this.workerScripts.push( scriptContent );

		return this;

	}

	register ( type, impl, dependencies ) {

		dependencies = dependencies || Promise.resolve( {} );

		this.tasks[ type ] = { type, scope: {}, init: impl.init, run: impl.run, dependencies };

		return this;

	}

	// TODO(donmccurdy): This is wasted work if workers are disabled.
	_init () {

		if ( this.tasksInitialized ) return this.tasksInitialized;

		var dependencies = [];

		for ( var type in this.tasks ) {

			dependencies.push( this.tasks[ type ].dependencies );

		}

		this.tasksInitialized = new Promise( ( resolve ) => {

			var body = TaskWorker.toString();

			body = body.substring( body.indexOf( '{' ) + 1, body.lastIndexOf( '}' ) );

			var implBody = '';

			for ( var type in this.tasks ) {

				var task = this.tasks[ type ];

				implBody += [
					task.type + ': {',
					'scope: {},',
					'init: ' + task.init.toString() + ',',
					'run: ' + task.run.toString(),
					'},'
				].join( '\n' );

			}

			body = 'self.tasks = {\n' + implBody + '};\n' + body;

			// TODO: Need to resolve relative URLs...
			var scripts = this.workerScripts.map( ( src ) => '"' + src + '"' );
			body = 'self.scripts = [ ' + scripts.join( ', ' ) + ' ];\n' + body;

			this.workerSource = body;
			this.workerSourceURL = URL.createObjectURL( new Blob( [ this.workerSource ] ) );

			Promise.all( dependencies ).then( resolve );

		} );

		return this.tasksInitialized;

	}

	run ( type, config, cost, transfer ) {

		var taskID = this.workerNextTaskID ++;

		var worker;

		var taskPending = this._getWorker( taskID, cost )
			.then( ( _worker ) => {

				worker = _worker;

				return new Promise( ( resolve, reject ) => {

					worker._callbacks[ taskID ] = { resolve, reject };

					worker.postMessage( {

						type: 'run',
						task: type,
						id: taskID,
						config: config

					}, transfer );

					// this.debug();

				} );

			} );

		taskPending
			.finally( () => {

				if ( worker && taskID ) {

					this._releaseTask( worker, taskID );

					// this.debug();

				}

			} );

		return taskPending;

	}

	_getWorker ( taskID, taskCost ) {

		console.log('_getWorker');

		return this._init().then( ( dependencies ) => {

			if ( this.workerPool.length < this.workerLimit ||
					 this.workerPool.length === 0 && this.workerLimit === 0 ) {

				var worker;

				if ( this.workerLimit > 0 ) {

					worker = new Worker( this.workerSourceURL );

				} else {

					var workerSelf = { tasks: this.tasks, scripts: this.workerScripts };

					worker = new TaskWorker( workerSelf );
					worker.terminate = () => {};
					worker.postMessage = ( data ) => { workerSelf.onmessage( { data } ); };
					workerSelf.postMessage = ( data ) => { worker.onmessage( { data } ); };

				}

				worker._callbacks = {};
				worker._taskCosts = {};
				worker._taskLoad = 0;

				var i = 0;

				for ( var type in this.tasks ) {

					worker.postMessage( {

						type: 'init',
						task: type,
						dependencies: dependencies[ i++ ]

					} );

				}

				worker.onmessage = function ( e ) {

					var message = e.data;

					switch ( message.type ) {

						case 'complete':
							worker._callbacks[ message.id ].resolve( message.result );
							break;

						case 'error':
							worker._callbacks[ message.id ].reject( message.error );
							break;

						default:
							console.error( 'THREE.TaskManager: Unexpected message, "' + message.type + '"' );

					}

				};

				this.workerPool.push( worker );

			} else {

				this.workerPool.sort( function ( a, b ) {

					return a._taskLoad > b._taskLoad ? - 1 : 1;

				} );

			}

			var worker = this.workerPool[ this.workerPool.length - 1 ];
			worker._taskCosts[ taskID ] = taskCost;
			worker._taskLoad += taskCost;
			return worker;

		} );

	}

	_releaseTask ( worker, taskID ) {

		worker._taskLoad -= worker._taskCosts[ taskID ];
		delete worker._callbacks[ taskID ];
		delete worker._taskCosts[ taskID ];

	}

	debug () {

		console.log( 'Task load: ', this.workerPool.map( ( worker ) => worker._taskLoad ) );

	}

	dispose () {

		for ( var i = 0; i < this.workerPool.length; ++ i ) {

			this.workerPool[ i ].terminate();

		}

		this.workerPool.length = 0;

		return this;

	}

}

// TODO(donmccurdy): This feels fragile.
function TaskWorker ( self ) {

	console.info('worker::load', self.location);
	var scriptsPending = Promise.resolve( importScripts( self.scripts ) );

	self.onmessage = ( e ) => {

		var message = e.data;
		var task = self.tasks[ message.task ];

		switch ( message.type ) {

			case 'init':
				console.info('worker::init');
				task.initPending = scriptsPending.then( () => task.init( task.scope, message.dependencies ) );
				break;

			case 'run':
				console.info('worker::run');
				task.initPending
					.then( () => task.run( task.scope, message.config ) )
					.then( ( [ result, transfer ] ) => {

						self.postMessage( { type: 'complete', id: message.id, result }, transfer );

					} )
					.catch( ( e ) => {

						self.postMessage( { type: 'error', id: message.id, error: e.message } );

					} );
				break;

			default:
				throw new Error( 'THREE.TaskManager: Unknown message type: ' + message.type );

		}

	};

}

/** Asynchronous version of WorkerGlobalScope.importScripts(), for main thread. */
function importScripts ( ...scripts ) {

	var scriptsPending = [];

	for ( var i = 0; i < scripts.length; i ++ ) {

		var scriptEl = document.createElement( 'script' );
		scriptEl.type = 'text/javascript';
		scriptEl.src = scripts[ i ];

		scriptsPending.push( new Promise( ( resolve, reject ) => {

			scriptEl.onload = resolve;
			scriptEl.onerror = reject;

		} ) );

		document.head.appendChild( scriptEl );

	}

	return Promise.all( scriptsPending );

}

const DefaultTaskManager = new TaskManager();

export { DefaultTaskManager, TaskManager };

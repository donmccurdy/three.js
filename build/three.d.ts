/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */
declare class EventDispatcher {
    addEventListener(type: any, listener: any): void;
    _listeners: {};
    hasEventListener(type: any, listener: any): boolean;
    removeEventListener(type: any, listener: any): void;
    dispatchEvent(event: any): void;
}

declare class Vector4 {
    constructor(x?: number, y?: number, z?: number, w?: number);
    x: number;
    y: number;
    z: number;
    w: number;
    set width(arg: number);
    get width(): number;
    set height(arg: number);
    get height(): number;
    set(x: any, y: any, z: any, w: any): this;
    setScalar(scalar: any): this;
    setX(x: any): this;
    setY(y: any): this;
    setZ(z: any): this;
    setW(w: any): this;
    setComponent(index: any, value: any): this;
    getComponent(index: any): number;
    clone(): any;
    copy(v: any): this;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    applyMatrix4(m: any): this;
    divideScalar(scalar: any): this;
    setAxisAngleFromQuaternion(q: any): this;
    setAxisAngleFromRotationMatrix(m: any): this;
    min(v: any): this;
    max(v: any): this;
    clamp(min: any, max: any): this;
    clampScalar(minVal: any, maxVal: any): this;
    clampLength(min: any, max: any): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    fromBufferAttribute(attribute: any, index: any): this;
    random(): this;
    [Symbol.iterator](): Generator<number, void, unknown>;
}

declare class Source {
    constructor(data?: any);
    isSource: boolean;
    uuid: string;
    data: any;
    version: number;
    set needsUpdate(arg: any);
    toJSON(meta: any): any;
}

declare class Vector2 {
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    set width(arg: number);
    get width(): number;
    set height(arg: number);
    get height(): number;
    set(x: any, y: any): this;
    setScalar(scalar: any): this;
    setX(x: any): this;
    setY(y: any): this;
    setComponent(index: any, value: any): this;
    getComponent(index: any): number;
    clone(): any;
    copy(v: any): this;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    divide(v: any): this;
    divideScalar(scalar: any): this;
    applyMatrix3(m: any): this;
    min(v: any): this;
    max(v: any): this;
    clamp(min: any, max: any): this;
    clampScalar(minVal: any, maxVal: any): this;
    clampLength(min: any, max: any): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: any): number;
    cross(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    angle(): number;
    angleTo(v: any): number;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    manhattanDistanceTo(v: any): number;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    fromBufferAttribute(attribute: any, index: any): this;
    rotateAround(center: any, angle: any): this;
    random(): this;
    [Symbol.iterator](): Generator<number, void, unknown>;
}

declare class Matrix3 {
    constructor(n11: any, n12: any, n13: any, n21: any, n22: any, n23: any, n31: any, n32: any, n33: any);
    elements: number[];
    set(n11: any, n12: any, n13: any, n21: any, n22: any, n23: any, n31: any, n32: any, n33: any): this;
    identity(): this;
    copy(m: any): this;
    extractBasis(xAxis: any, yAxis: any, zAxis: any): this;
    setFromMatrix4(m: any): this;
    multiply(m: any): this;
    premultiply(m: any): this;
    multiplyMatrices(a: any, b: any): this;
    multiplyScalar(s: any): this;
    determinant(): number;
    invert(): this;
    transpose(): this;
    getNormalMatrix(matrix4: any): this;
    transposeIntoArray(r: any): this;
    setUvTransform(tx: any, ty: any, sx: any, sy: any, rotation: any, cx: any, cy: any): this;
    scale(sx: any, sy: any): this;
    rotate(theta: any): this;
    translate(tx: any, ty: any): this;
    makeTranslation(x: any, y: any): this;
    makeRotation(theta: any): this;
    makeScale(x: any, y: any): this;
    equals(matrix: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    clone(): any;
}

declare const REVISION: "154dev";
declare namespace MOUSE {
    let LEFT: number;
    let MIDDLE: number;
    let RIGHT: number;
    let ROTATE: number;
    let DOLLY: number;
    let PAN: number;
}
declare namespace TOUCH {
    let ROTATE_1: number;
    export { ROTATE_1 as ROTATE };
    let PAN_1: number;
    export { PAN_1 as PAN };
    export let DOLLY_PAN: number;
    export let DOLLY_ROTATE: number;
}
declare const CullFaceNone: 0;
declare const CullFaceBack: 1;
declare const CullFaceFront: 2;
declare const CullFaceFrontBack: 3;
declare const BasicShadowMap: 0;
declare const PCFShadowMap: 1;
declare const PCFSoftShadowMap: 2;
declare const VSMShadowMap: 3;
declare const FrontSide: 0;
declare const BackSide: 1;
declare const DoubleSide: 2;
declare const TwoPassDoubleSide: 2;
declare const NoBlending: 0;
declare const NormalBlending: 1;
declare const AdditiveBlending: 2;
declare const SubtractiveBlending: 3;
declare const MultiplyBlending: 4;
declare const CustomBlending: 5;
declare const AddEquation: 100;
declare const SubtractEquation: 101;
declare const ReverseSubtractEquation: 102;
declare const MinEquation: 103;
declare const MaxEquation: 104;
declare const ZeroFactor: 200;
declare const OneFactor: 201;
declare const SrcColorFactor: 202;
declare const OneMinusSrcColorFactor: 203;
declare const SrcAlphaFactor: 204;
declare const OneMinusSrcAlphaFactor: 205;
declare const DstAlphaFactor: 206;
declare const OneMinusDstAlphaFactor: 207;
declare const DstColorFactor: 208;
declare const OneMinusDstColorFactor: 209;
declare const SrcAlphaSaturateFactor: 210;
declare const NeverDepth: 0;
declare const AlwaysDepth: 1;
declare const LessDepth: 2;
declare const LessEqualDepth: 3;
declare const EqualDepth: 4;
declare const GreaterEqualDepth: 5;
declare const GreaterDepth: 6;
declare const NotEqualDepth: 7;
declare const MultiplyOperation: 0;
declare const MixOperation: 1;
declare const AddOperation: 2;
declare const NoToneMapping: 0;
declare const LinearToneMapping: 1;
declare const ReinhardToneMapping: 2;
declare const CineonToneMapping: 3;
declare const ACESFilmicToneMapping: 4;
declare const CustomToneMapping: 5;
declare const UVMapping: 300;
declare const CubeReflectionMapping: 301;
declare const CubeRefractionMapping: 302;
declare const EquirectangularReflectionMapping: 303;
declare const EquirectangularRefractionMapping: 304;
declare const CubeUVReflectionMapping: 306;
declare const RepeatWrapping: 1000;
declare const ClampToEdgeWrapping: 1001;
declare const MirroredRepeatWrapping: 1002;
declare const NearestFilter: 1003;
declare const NearestMipmapNearestFilter: 1004;
declare const NearestMipMapNearestFilter: 1004;
declare const NearestMipmapLinearFilter: 1005;
declare const NearestMipMapLinearFilter: 1005;
declare const LinearFilter: 1006;
declare const LinearMipmapNearestFilter: 1007;
declare const LinearMipMapNearestFilter: 1007;
declare const LinearMipmapLinearFilter: 1008;
declare const LinearMipMapLinearFilter: 1008;
declare const UnsignedByteType: 1009;
declare const ByteType: 1010;
declare const ShortType: 1011;
declare const UnsignedShortType: 1012;
declare const IntType: 1013;
declare const UnsignedIntType: 1014;
declare const FloatType: 1015;
declare const HalfFloatType: 1016;
declare const UnsignedShort4444Type: 1017;
declare const UnsignedShort5551Type: 1018;
declare const UnsignedInt248Type: 1020;
declare const AlphaFormat: 1021;
declare const RGBAFormat: 1023;
declare const LuminanceFormat: 1024;
declare const LuminanceAlphaFormat: 1025;
declare const DepthFormat: 1026;
declare const DepthStencilFormat: 1027;
declare const RedFormat: 1028;
declare const RedIntegerFormat: 1029;
declare const RGFormat: 1030;
declare const RGIntegerFormat: 1031;
declare const RGBAIntegerFormat: 1033;
declare const RGB_S3TC_DXT1_Format: 33776;
declare const RGBA_S3TC_DXT1_Format: 33777;
declare const RGBA_S3TC_DXT3_Format: 33778;
declare const RGBA_S3TC_DXT5_Format: 33779;
declare const RGB_PVRTC_4BPPV1_Format: 35840;
declare const RGB_PVRTC_2BPPV1_Format: 35841;
declare const RGBA_PVRTC_4BPPV1_Format: 35842;
declare const RGBA_PVRTC_2BPPV1_Format: 35843;
declare const RGB_ETC1_Format: 36196;
declare const RGB_ETC2_Format: 37492;
declare const RGBA_ETC2_EAC_Format: 37496;
declare const RGBA_ASTC_4x4_Format: 37808;
declare const RGBA_ASTC_5x4_Format: 37809;
declare const RGBA_ASTC_5x5_Format: 37810;
declare const RGBA_ASTC_6x5_Format: 37811;
declare const RGBA_ASTC_6x6_Format: 37812;
declare const RGBA_ASTC_8x5_Format: 37813;
declare const RGBA_ASTC_8x6_Format: 37814;
declare const RGBA_ASTC_8x8_Format: 37815;
declare const RGBA_ASTC_10x5_Format: 37816;
declare const RGBA_ASTC_10x6_Format: 37817;
declare const RGBA_ASTC_10x8_Format: 37818;
declare const RGBA_ASTC_10x10_Format: 37819;
declare const RGBA_ASTC_12x10_Format: 37820;
declare const RGBA_ASTC_12x12_Format: 37821;
declare const RGBA_BPTC_Format: 36492;
declare const RED_RGTC1_Format: 36283;
declare const SIGNED_RED_RGTC1_Format: 36284;
declare const RED_GREEN_RGTC2_Format: 36285;
declare const SIGNED_RED_GREEN_RGTC2_Format: 36286;
declare const LoopOnce: 2200;
declare const LoopRepeat: 2201;
declare const LoopPingPong: 2202;
declare const InterpolateDiscrete: 2300;
declare const InterpolateLinear: 2301;
declare const InterpolateSmooth: 2302;
declare const ZeroCurvatureEnding: 2400;
declare const ZeroSlopeEnding: 2401;
declare const WrapAroundEnding: 2402;
declare const NormalAnimationBlendMode: 2500;
declare const AdditiveAnimationBlendMode: 2501;
declare const TrianglesDrawMode: 0;
declare const TriangleStripDrawMode: 1;
declare const TriangleFanDrawMode: 2;
/** @deprecated Use LinearSRGBColorSpace or NoColorSpace in three.js r152+. */
declare const LinearEncoding: 3000;
/** @deprecated Use SRGBColorSpace in three.js r152+. */
declare const sRGBEncoding: 3001;
declare const BasicDepthPacking: 3200;
declare const RGBADepthPacking: 3201;
declare const TangentSpaceNormalMap: 0;
declare const ObjectSpaceNormalMap: 1;
declare const NoColorSpace: "";
declare const SRGBColorSpace: "srgb";
declare const LinearSRGBColorSpace: "srgb-linear";
declare const DisplayP3ColorSpace: "display-p3";
declare const ZeroStencilOp: 0;
declare const KeepStencilOp: 7680;
declare const ReplaceStencilOp: 7681;
declare const IncrementStencilOp: 7682;
declare const DecrementStencilOp: 7683;
declare const IncrementWrapStencilOp: 34055;
declare const DecrementWrapStencilOp: 34056;
declare const InvertStencilOp: 5386;
declare const NeverStencilFunc: 512;
declare const LessStencilFunc: 513;
declare const EqualStencilFunc: 514;
declare const LessEqualStencilFunc: 515;
declare const GreaterStencilFunc: 516;
declare const NotEqualStencilFunc: 517;
declare const GreaterEqualStencilFunc: 518;
declare const AlwaysStencilFunc: 519;
declare const NeverCompare: 512;
declare const LessCompare: 513;
declare const EqualCompare: 514;
declare const LessEqualCompare: 515;
declare const GreaterCompare: 516;
declare const NotEqualCompare: 517;
declare const GreaterEqualCompare: 518;
declare const AlwaysCompare: 519;
declare const StaticDrawUsage: 35044;
declare const DynamicDrawUsage: 35048;
declare const StreamDrawUsage: 35040;
declare const StaticReadUsage: 35045;
declare const DynamicReadUsage: 35049;
declare const StreamReadUsage: 35041;
declare const StaticCopyUsage: 35046;
declare const DynamicCopyUsage: 35050;
declare const StreamCopyUsage: 35042;
declare const GLSL1: "100";
declare const GLSL3: "300 es";
declare const _SRGBAFormat: 1035;
declare const WebGLCoordinateSystem: 2000;
declare const WebGPUCoordinateSystem: 2001;

declare class Texture extends EventDispatcher {
    constructor(image?: any, mapping?: number, wrapS?: number, wrapT?: number, magFilter?: number, minFilter?: number, format?: number, type?: number, anisotropy?: number, colorSpace?: string);
    isTexture: boolean;
    uuid: string;
    name: string;
    source: Source;
    mipmaps: any[];
    mapping: number;
    channel: number;
    wrapS: number;
    wrapT: number;
    magFilter: number;
    minFilter: number;
    anisotropy: number;
    format: number;
    internalFormat: any;
    type: number;
    offset: Vector2;
    repeat: Vector2;
    center: Vector2;
    rotation: number;
    matrixAutoUpdate: boolean;
    matrix: Matrix3;
    generateMipmaps: boolean;
    premultiplyAlpha: boolean;
    flipY: boolean;
    unpackAlignment: number;
    colorSpace: string;
    userData: {};
    version: number;
    onUpdate: any;
    isRenderTargetTexture: boolean;
    needsPMREMUpdate: boolean;
    set image(arg: any);
    get image(): any;
    updateMatrix(): void;
    clone(): any;
    copy(source: any): this;
    set needsUpdate(arg: any);
    toJSON(meta: any): any;
    dispose(): void;
    transformUv(uv: any): any;
    set encoding(arg: 3000 | 3001);
    get encoding(): 3000 | 3001;
}
declare namespace Texture {
    export let DEFAULT_IMAGE: any;
    export { UVMapping as DEFAULT_MAPPING };
    export let DEFAULT_ANISOTROPY: number;
}

declare class WebGLRenderTarget extends EventDispatcher {
    constructor(width?: number, height?: number, options?: {});
    isWebGLRenderTarget: boolean;
    width: number;
    height: number;
    depth: number;
    scissor: Vector4;
    scissorTest: boolean;
    viewport: Vector4;
    texture: Texture;
    depthBuffer: any;
    stencilBuffer: any;
    depthTexture: any;
    samples: any;
    setSize(width: any, height: any, depth?: number): void;
    clone(): any;
    copy(source: any): this;
    dispose(): void;
}

declare class DataArrayTexture extends Texture {
    constructor(data?: any, width?: number, height?: number, depth?: number);
    isDataArrayTexture: boolean;
    image: {
        data: any;
        width: number;
        height: number;
        depth: number;
    };
    wrapR: number;
}

declare class WebGLArrayRenderTarget extends WebGLRenderTarget {
    constructor(width?: number, height?: number, depth?: number);
    isWebGLArrayRenderTarget: boolean;
    texture: DataArrayTexture;
}

declare class Data3DTexture extends Texture {
    constructor(data?: any, width?: number, height?: number, depth?: number);
    isData3DTexture: boolean;
    image: {
        data: any;
        width: number;
        height: number;
        depth: number;
    };
    wrapR: number;
}

declare class WebGL3DRenderTarget extends WebGLRenderTarget {
    constructor(width?: number, height?: number, depth?: number);
    isWebGL3DRenderTarget: boolean;
    texture: Data3DTexture;
}

declare class WebGLMultipleRenderTargets extends WebGLRenderTarget {
    constructor(width?: number, height?: number, count?: number, options?: {});
    isWebGLMultipleRenderTargets: boolean;
    texture: any[];
    setSize(width: any, height: any, depth?: number): this;
    copy(source: any): this;
}

declare class CubeTexture extends Texture {
    constructor(images: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any, colorSpace: any);
    isCubeTexture: boolean;
    set images(arg: any);
    get images(): any;
}

declare class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size?: number, options?: {});
    isWebGLCubeRenderTarget: boolean;
    texture: CubeTexture;
    fromEquirectangularTexture(renderer: any, texture: any): this;
    clear(renderer: any, color: any, depth: any, stencil: any): void;
}

declare class WebXRManager extends EventDispatcher {
    constructor(renderer: any, gl: any);
    cameraAutoUpdate: boolean;
    enabled: boolean;
    isPresenting: boolean;
    getCamera: () => void;
    setUserCamera: (value: any) => void;
    getController: (index: any) => any;
    getControllerGrip: (index: any) => any;
    getHand: (index: any) => any;
    setFramebufferScaleFactor: (value: any) => void;
    setReferenceSpaceType: (value: any) => void;
    getReferenceSpace: () => any;
    setReferenceSpace: (space: any) => void;
    getBaseLayer: () => any;
    getBinding: () => any;
    getFrame: () => any;
    getSession: () => any;
    setSession: (value: any) => Promise<void>;
    getEnvironmentBlendMode: () => any;
    updateCameraXR: (camera: any) => any;
    getFoveation: () => number;
    setFoveation: (value: any) => void;
    setAnimationLoop: (callback: any) => void;
    dispose: () => void;
}

declare class WebGLRenderer {
    constructor(parameters?: {});
    isWebGLRenderer: boolean;
    domElement: any;
    debug: {
        /**
         * Enables error checking and reporting when shader programs are being compiled
         * @type {boolean}
         */
        checkShaderErrors: boolean;
        /**
         * Callback for custom error reporting.
         * @type {?Function}
         */
        onShaderError: Function | null;
    };
    autoClear: boolean;
    autoClearColor: boolean;
    autoClearDepth: boolean;
    autoClearStencil: boolean;
    sortObjects: boolean;
    clippingPlanes: any[];
    localClippingEnabled: boolean;
    outputColorSpace: string;
    useLegacyLights: boolean;
    toneMapping: number;
    toneMappingExposure: number;
    xr: WebXRManager;
    getContext: () => any;
    getContextAttributes: () => any;
    forceContextLoss: () => void;
    forceContextRestore: () => void;
    getPixelRatio: () => number;
    setPixelRatio: (value: any) => void;
    getSize: (target: any) => any;
    setSize: (width: any, height: any, updateStyle?: boolean) => void;
    getDrawingBufferSize: (target: any) => any;
    setDrawingBufferSize: (width: any, height: any, pixelRatio: any) => void;
    getCurrentViewport: (target: any) => any;
    getViewport: (target: any) => any;
    setViewport: (x: any, y: any, width: any, height: any) => void;
    getScissor: (target: any) => any;
    setScissor: (x: any, y: any, width: any, height: any) => void;
    getScissorTest: () => boolean;
    setScissorTest: (boolean: any) => void;
    setOpaqueSort: (method: any) => void;
    setTransparentSort: (method: any) => void;
    getClearColor: (target: any) => any;
    setClearColor: (...args: any[]) => void;
    getClearAlpha: () => any;
    setClearAlpha: (...args: any[]) => void;
    clear: (color?: boolean, depth?: boolean, stencil?: boolean) => void;
    clearColor: () => void;
    clearDepth: () => void;
    clearStencil: () => void;
    dispose: () => void;
    renderBufferDirect: (camera: any, scene: any, geometry: any, material: any, object: any, group: any) => void;
    compile: (scene: any, camera: any) => void;
    setAnimationLoop: (callback: any) => void;
    render: (scene: any, camera: any) => void;
    getActiveCubeFace: () => number;
    getActiveMipmapLevel: () => number;
    getRenderTarget: () => any;
    setRenderTargetTextures: (renderTarget: any, colorTexture: any, depthTexture: any) => void;
    setRenderTargetFramebuffer: (renderTarget: any, defaultFramebuffer: any) => void;
    setRenderTarget: (renderTarget: any, activeCubeFace?: number, activeMipmapLevel?: number) => void;
    readRenderTargetPixels: (renderTarget: any, x: any, y: any, width: any, height: any, buffer: any, activeCubeFaceIndex: any) => void;
    copyFramebufferToTexture: (position: any, texture: any, level?: number) => void;
    copyTextureToTexture: (position: any, srcTexture: any, dstTexture: any, level?: number) => void;
    copyTextureToTexture3D: (sourceBox: any, position: any, srcTexture: any, dstTexture: any, level?: number) => void;
    initTexture: (texture: any) => void;
    resetState: () => void;
    get coordinateSystem(): number;
    set physicallyCorrectLights(arg: boolean);
    get physicallyCorrectLights(): boolean;
    set outputEncoding(arg: 3000 | 3001);
    get outputEncoding(): 3000 | 3001;
}

declare class WebGL1Renderer extends WebGLRenderer {
    isWebGL1Renderer: boolean;
}

declare namespace ShaderLib {
    namespace physical {
        let uniforms: {};
        let vertexShader: string;
        let fragmentShader: string;
    }
}

declare class Color {
    constructor(r: any, g: any, b: any);
    isColor: boolean;
    r: number;
    g: number;
    b: number;
    set(r: any, g: any, b: any): this;
    setScalar(scalar: any): this;
    setHex(hex: any, colorSpace?: string): this;
    setRGB(r: any, g: any, b: any, colorSpace?: string): this;
    setHSL(h: any, s: any, l: any, colorSpace?: string): this;
    setStyle(style: any, colorSpace?: string): this;
    setColorName(style: any, colorSpace?: string): this;
    clone(): any;
    copy(color: any): this;
    copySRGBToLinear(color: any): this;
    copyLinearToSRGB(color: any): this;
    convertSRGBToLinear(): this;
    convertLinearToSRGB(): this;
    getHex(colorSpace?: string): number;
    getHexString(colorSpace?: string): string;
    getHSL(target: any, colorSpace?: string): any;
    getRGB(target: any, colorSpace?: string): any;
    getStyle(colorSpace?: string): string;
    offsetHSL(h: any, s: any, l: any): this;
    add(color: any): this;
    addColors(color1: any, color2: any): this;
    addScalar(s: any): this;
    sub(color: any): this;
    multiply(color: any): this;
    multiplyScalar(s: any): this;
    lerp(color: any, alpha: any): this;
    lerpColors(color1: any, color2: any, alpha: any): this;
    lerpHSL(color: any, alpha: any): this;
    setFromVector3(v: any): this;
    applyMatrix3(m: any): this;
    equals(c: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    fromBufferAttribute(attribute: any, index: any): this;
    toJSON(): number;
    [Symbol.iterator](): Generator<number, void, unknown>;
}
declare namespace Color {
    export { _colorKeywords as NAMES };
}
declare namespace _colorKeywords {
    let aliceblue: number;
    let antiquewhite: number;
    let aqua: number;
    let aquamarine: number;
    let azure: number;
    let beige: number;
    let bisque: number;
    let black: number;
    let blanchedalmond: number;
    let blue: number;
    let blueviolet: number;
    let brown: number;
    let burlywood: number;
    let cadetblue: number;
    let chartreuse: number;
    let chocolate: number;
    let coral: number;
    let cornflowerblue: number;
    let cornsilk: number;
    let crimson: number;
    let cyan: number;
    let darkblue: number;
    let darkcyan: number;
    let darkgoldenrod: number;
    let darkgray: number;
    let darkgreen: number;
    let darkgrey: number;
    let darkkhaki: number;
    let darkmagenta: number;
    let darkolivegreen: number;
    let darkorange: number;
    let darkorchid: number;
    let darkred: number;
    let darksalmon: number;
    let darkseagreen: number;
    let darkslateblue: number;
    let darkslategray: number;
    let darkslategrey: number;
    let darkturquoise: number;
    let darkviolet: number;
    let deeppink: number;
    let deepskyblue: number;
    let dimgray: number;
    let dimgrey: number;
    let dodgerblue: number;
    let firebrick: number;
    let floralwhite: number;
    let forestgreen: number;
    let fuchsia: number;
    let gainsboro: number;
    let ghostwhite: number;
    let gold: number;
    let goldenrod: number;
    let gray: number;
    let green: number;
    let greenyellow: number;
    let grey: number;
    let honeydew: number;
    let hotpink: number;
    let indianred: number;
    let indigo: number;
    let ivory: number;
    let khaki: number;
    let lavender: number;
    let lavenderblush: number;
    let lawngreen: number;
    let lemonchiffon: number;
    let lightblue: number;
    let lightcoral: number;
    let lightcyan: number;
    let lightgoldenrodyellow: number;
    let lightgray: number;
    let lightgreen: number;
    let lightgrey: number;
    let lightpink: number;
    let lightsalmon: number;
    let lightseagreen: number;
    let lightskyblue: number;
    let lightslategray: number;
    let lightslategrey: number;
    let lightsteelblue: number;
    let lightyellow: number;
    let lime: number;
    let limegreen: number;
    let linen: number;
    let magenta: number;
    let maroon: number;
    let mediumaquamarine: number;
    let mediumblue: number;
    let mediumorchid: number;
    let mediumpurple: number;
    let mediumseagreen: number;
    let mediumslateblue: number;
    let mediumspringgreen: number;
    let mediumturquoise: number;
    let mediumvioletred: number;
    let midnightblue: number;
    let mintcream: number;
    let mistyrose: number;
    let moccasin: number;
    let navajowhite: number;
    let navy: number;
    let oldlace: number;
    let olive: number;
    let olivedrab: number;
    let orange: number;
    let orangered: number;
    let orchid: number;
    let palegoldenrod: number;
    let palegreen: number;
    let paleturquoise: number;
    let palevioletred: number;
    let papayawhip: number;
    let peachpuff: number;
    let peru: number;
    let pink: number;
    let plum: number;
    let powderblue: number;
    let purple: number;
    let rebeccapurple: number;
    let red: number;
    let rosybrown: number;
    let royalblue: number;
    let saddlebrown: number;
    let salmon: number;
    let sandybrown: number;
    let seagreen: number;
    let seashell: number;
    let sienna: number;
    let silver: number;
    let skyblue: number;
    let slateblue: number;
    let slategray: number;
    let slategrey: number;
    let snow: number;
    let springgreen: number;
    let steelblue: number;
    let tan: number;
    let teal: number;
    let thistle: number;
    let tomato: number;
    let turquoise: number;
    let violet: number;
    let wheat: number;
    let white: number;
    let whitesmoke: number;
    let yellow: number;
    let yellowgreen: number;
}

declare namespace UniformsLib {
    namespace common {
        namespace diffuse {
            let value: Color;
        }
        namespace opacity {
            let value_1: number;
            export { value_1 as value };
        }
        namespace map {
            let value_2: any;
            export { value_2 as value };
        }
        namespace mapTransform {
            let value_3: Matrix3;
            export { value_3 as value };
        }
        namespace alphaMap {
            let value_4: any;
            export { value_4 as value };
        }
        namespace alphaMapTransform {
            let value_5: Matrix3;
            export { value_5 as value };
        }
        namespace alphaTest {
            let value_6: number;
            export { value_6 as value };
        }
    }
    namespace specularmap {
        namespace specularMap {
            let value_7: any;
            export { value_7 as value };
        }
        namespace specularMapTransform {
            let value_8: Matrix3;
            export { value_8 as value };
        }
    }
    namespace envmap {
        namespace envMap {
            let value_9: any;
            export { value_9 as value };
        }
        namespace flipEnvMap {
            let value_10: number;
            export { value_10 as value };
        }
        namespace reflectivity {
            let value_11: number;
            export { value_11 as value };
        }
        namespace ior {
            let value_12: number;
            export { value_12 as value };
        }
        namespace refractionRatio {
            let value_13: number;
            export { value_13 as value };
        }
    }
    namespace aomap {
        namespace aoMap {
            let value_14: any;
            export { value_14 as value };
        }
        namespace aoMapIntensity {
            let value_15: number;
            export { value_15 as value };
        }
        namespace aoMapTransform {
            let value_16: Matrix3;
            export { value_16 as value };
        }
    }
    namespace lightmap {
        namespace lightMap {
            let value_17: any;
            export { value_17 as value };
        }
        namespace lightMapIntensity {
            let value_18: number;
            export { value_18 as value };
        }
        namespace lightMapTransform {
            let value_19: Matrix3;
            export { value_19 as value };
        }
    }
    namespace bumpmap {
        namespace bumpMap {
            let value_20: any;
            export { value_20 as value };
        }
        namespace bumpMapTransform {
            let value_21: Matrix3;
            export { value_21 as value };
        }
        namespace bumpScale {
            let value_22: number;
            export { value_22 as value };
        }
    }
    namespace normalmap {
        namespace normalMap {
            let value_23: any;
            export { value_23 as value };
        }
        namespace normalMapTransform {
            let value_24: Matrix3;
            export { value_24 as value };
        }
        namespace normalScale {
            let value_25: Vector2;
            export { value_25 as value };
        }
    }
    namespace displacementmap {
        namespace displacementMap {
            let value_26: any;
            export { value_26 as value };
        }
        namespace displacementMapTransform {
            let value_27: Matrix3;
            export { value_27 as value };
        }
        namespace displacementScale {
            let value_28: number;
            export { value_28 as value };
        }
        namespace displacementBias {
            let value_29: number;
            export { value_29 as value };
        }
    }
    namespace emissivemap {
        namespace emissiveMap {
            let value_30: any;
            export { value_30 as value };
        }
        namespace emissiveMapTransform {
            let value_31: Matrix3;
            export { value_31 as value };
        }
    }
    namespace metalnessmap {
        namespace metalnessMap {
            let value_32: any;
            export { value_32 as value };
        }
        namespace metalnessMapTransform {
            let value_33: Matrix3;
            export { value_33 as value };
        }
    }
    namespace roughnessmap {
        namespace roughnessMap {
            let value_34: any;
            export { value_34 as value };
        }
        namespace roughnessMapTransform {
            let value_35: Matrix3;
            export { value_35 as value };
        }
    }
    namespace gradientmap {
        namespace gradientMap {
            let value_36: any;
            export { value_36 as value };
        }
    }
    namespace fog {
        namespace fogDensity {
            let value_37: number;
            export { value_37 as value };
        }
        namespace fogNear {
            let value_38: number;
            export { value_38 as value };
        }
        namespace fogFar {
            let value_39: number;
            export { value_39 as value };
        }
        namespace fogColor {
            let value_40: Color;
            export { value_40 as value };
        }
    }
    namespace lights {
        namespace ambientLightColor {
            let value_41: any[];
            export { value_41 as value };
        }
        namespace lightProbe {
            let value_42: any[];
            export { value_42 as value };
        }
        namespace directionalLights {
            let value_43: any[];
            export { value_43 as value };
            export namespace properties {
                let direction: {};
                let color: {};
            }
        }
        namespace directionalLightShadows {
            let value_44: any[];
            export { value_44 as value };
            export namespace properties_1 {
                let shadowBias: {};
                let shadowNormalBias: {};
                let shadowRadius: {};
                let shadowMapSize: {};
            }
            export { properties_1 as properties };
        }
        namespace directionalShadowMap {
            let value_45: any[];
            export { value_45 as value };
        }
        namespace directionalShadowMatrix {
            let value_46: any[];
            export { value_46 as value };
        }
        namespace spotLights {
            let value_47: any[];
            export { value_47 as value };
            export namespace properties_2 {
                let color_1: {};
                export { color_1 as color };
                export let position: {};
                let direction_1: {};
                export { direction_1 as direction };
                export let distance: {};
                export let coneCos: {};
                export let penumbraCos: {};
                export let decay: {};
            }
            export { properties_2 as properties };
        }
        namespace spotLightShadows {
            let value_48: any[];
            export { value_48 as value };
            export namespace properties_3 {
                let shadowBias_1: {};
                export { shadowBias_1 as shadowBias };
                let shadowNormalBias_1: {};
                export { shadowNormalBias_1 as shadowNormalBias };
                let shadowRadius_1: {};
                export { shadowRadius_1 as shadowRadius };
                let shadowMapSize_1: {};
                export { shadowMapSize_1 as shadowMapSize };
            }
            export { properties_3 as properties };
        }
        namespace spotLightMap {
            let value_49: any[];
            export { value_49 as value };
        }
        namespace spotShadowMap {
            let value_50: any[];
            export { value_50 as value };
        }
        namespace spotLightMatrix {
            let value_51: any[];
            export { value_51 as value };
        }
        namespace pointLights {
            let value_52: any[];
            export { value_52 as value };
            export namespace properties_4 {
                let color_2: {};
                export { color_2 as color };
                let position_1: {};
                export { position_1 as position };
                let decay_1: {};
                export { decay_1 as decay };
                let distance_1: {};
                export { distance_1 as distance };
            }
            export { properties_4 as properties };
        }
        namespace pointLightShadows {
            let value_53: any[];
            export { value_53 as value };
            export namespace properties_5 {
                let shadowBias_2: {};
                export { shadowBias_2 as shadowBias };
                let shadowNormalBias_2: {};
                export { shadowNormalBias_2 as shadowNormalBias };
                let shadowRadius_2: {};
                export { shadowRadius_2 as shadowRadius };
                let shadowMapSize_2: {};
                export { shadowMapSize_2 as shadowMapSize };
                export let shadowCameraNear: {};
                export let shadowCameraFar: {};
            }
            export { properties_5 as properties };
        }
        namespace pointShadowMap {
            let value_54: any[];
            export { value_54 as value };
        }
        namespace pointShadowMatrix {
            let value_55: any[];
            export { value_55 as value };
        }
        namespace hemisphereLights {
            let value_56: any[];
            export { value_56 as value };
            export namespace properties_6 {
                let direction_2: {};
                export { direction_2 as direction };
                export let skyColor: {};
                export let groundColor: {};
            }
            export { properties_6 as properties };
        }
        namespace rectAreaLights {
            let value_57: any[];
            export { value_57 as value };
            export namespace properties_7 {
                let color_3: {};
                export { color_3 as color };
                let position_2: {};
                export { position_2 as position };
                export let width: {};
                export let height: {};
            }
            export { properties_7 as properties };
        }
        namespace ltc_1 {
            let value_58: any;
            export { value_58 as value };
        }
        namespace ltc_2 {
            let value_59: any;
            export { value_59 as value };
        }
    }
    namespace points {
        export namespace diffuse_1 {
            let value_60: Color;
            export { value_60 as value };
        }
        export { diffuse_1 as diffuse };
        export namespace opacity_1 {
            let value_61: number;
            export { value_61 as value };
        }
        export { opacity_1 as opacity };
        export namespace size {
            let value_62: number;
            export { value_62 as value };
        }
        export namespace scale {
            let value_63: number;
            export { value_63 as value };
        }
        export namespace map_1 {
            let value_64: any;
            export { value_64 as value };
        }
        export { map_1 as map };
        export namespace alphaMap_1 {
            let value_65: any;
            export { value_65 as value };
        }
        export { alphaMap_1 as alphaMap };
        export namespace alphaMapTransform_1 {
            let value_66: Matrix3;
            export { value_66 as value };
        }
        export { alphaMapTransform_1 as alphaMapTransform };
        export namespace alphaTest_1 {
            let value_67: number;
            export { value_67 as value };
        }
        export { alphaTest_1 as alphaTest };
        export namespace uvTransform {
            let value_68: Matrix3;
            export { value_68 as value };
        }
    }
    namespace sprite {
        export namespace diffuse_2 {
            let value_69: Color;
            export { value_69 as value };
        }
        export { diffuse_2 as diffuse };
        export namespace opacity_2 {
            let value_70: number;
            export { value_70 as value };
        }
        export { opacity_2 as opacity };
        export namespace center {
            let value_71: Vector2;
            export { value_71 as value };
        }
        export namespace rotation {
            let value_72: number;
            export { value_72 as value };
        }
        export namespace map_2 {
            let value_73: any;
            export { value_73 as value };
        }
        export { map_2 as map };
        export namespace mapTransform_1 {
            let value_74: Matrix3;
            export { value_74 as value };
        }
        export { mapTransform_1 as mapTransform };
        export namespace alphaMap_2 {
            let value_75: any;
            export { value_75 as value };
        }
        export { alphaMap_2 as alphaMap };
        export namespace alphaMapTransform_2 {
            let value_76: Matrix3;
            export { value_76 as value };
        }
        export { alphaMapTransform_2 as alphaMapTransform };
        export namespace alphaTest_2 {
            let value_77: number;
            export { value_77 as value };
        }
        export { alphaTest_2 as alphaTest };
    }
}

/**
 * Uniform Utilities
 */
declare function cloneUniforms(src: any): {};
declare function mergeUniforms(uniforms: any): {};
declare namespace UniformsUtils {
    export { cloneUniforms as clone };
    export { mergeUniforms as merge };
}

declare const _default$1E: "\n#ifdef USE_ALPHAHASH\n\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n\n#endif\n";

declare const _default$1D: "\n#ifdef USE_ALPHAHASH\n\n\t/**\n\t * See: https://casual-effects.com/research/Wyman2017Hashed/index.html\n\t */\n\n\tconst float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.\n\n\tfloat hash2D( vec2 value ) {\n\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\n\t}\n\n\tfloat hash3D( vec3 value ) {\n\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\n\t}\n\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\n\t\t// Find the discretized derivatives of our coordinates\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\n\t\t// Find two nearest log-discretized noise scales\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\n\t\t// Compute alpha thresholds at our two noise scales\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\n\t\t// Factor to interpolate lerp with\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\n\t\t// Interpolate alpha threshold from noise at two scales\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\n\t\t// Pass into CDF to compute uniformly distrib threshold\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\n\t\t// Find our final, uniformly distributed alpha threshold (ατ)\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\n\t\t// Avoids ατ == 0. Could also do ατ =1-ατ\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\n\t}\n\n#endif\n";

declare const _default$1C: "\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n\n#endif\n";

declare const _default$1B: "\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";

declare const _default$1A: "\n#ifdef USE_ALPHATEST\n\n\tif ( diffuseColor.a < alphaTest ) discard;\n\n#endif\n";

declare const _default$1z: "\n#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif\n";

declare const _default$1y: "\n#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\n\t#endif\n\n#endif\n";

declare const _default$1x: "\n#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif\n";

declare const _default$1w: "\nvec3 transformed = vec3( position );\n\n#ifdef USE_ALPHAHASH\n\n\tvPosition = vec3( position );\n\n#endif\n";

declare const _default$1v: "\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n\tvec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n";

declare const _default$1u: "\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n";

declare const _default$1t: "\n\n#ifdef USE_IRIDESCENCE\n\n\t// XYZ to linear-sRGB color space\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\n\t// Assume air interface for top\n\t// Note: We don't handle the case fresnel0 == 1\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\n\t}\n\n\t// Conversion FO/IOR\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\n\t}\n\n\t// ior is a value between 1.0 and 3.0. 1.0 is air interface\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\n\t}\n\n\t// Fresnel equations for dielectric/dielectric interfaces.\n\t// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html\n\t// Evaluation XYZ sensitivity curves in Fourier space\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\n\t}\n\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\n\t\tvec3 I;\n\n\t\t// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\t// Evaluate the cosTheta on the base layer (Snell law)\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\n\t\t// Handle TIR:\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\n\t\t\t return vec3( 1.0 );\n\n\t\t}\n\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\n\t\t// First interface\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\n\t\t// Second interface\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0\n\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\n\t\t// Phase shift\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\n\t\t// Compound terms\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\n\t\t// Reflectance term for m = 0 (DC term amplitude)\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\n\t\t// Reflectance term for m > 0 (pairs of diracs)\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\n\t\t}\n\n\t\t// Since out of gamut colors might be produced, negative color values are clamped to 0.\n\t\treturn max( I, vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n";

declare const _default$1s: "\n#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n\t// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm; // normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";

declare const _default$1r: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvec4 plane;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t\tif ( clipped ) discard;\n\n\t#endif\n\n#endif\n";

declare const _default$1q: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n";

declare const _default$1p: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n#endif\n";

declare const _default$1o: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvClipPosition = - mvPosition.xyz;\n\n#endif\n";

declare const _default$1n: "\n#if defined( USE_COLOR_ALPHA )\n\n\tdiffuseColor *= vColor;\n\n#elif defined( USE_COLOR )\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif\n";

declare const _default$1m: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n";

declare const _default$1l: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n";

declare const _default$1k: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvColor = vec4( 1.0 );\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvColor = vec3( 1.0 );\n\n#endif\n\n#ifdef USE_COLOR\n\n\tvColor *= color;\n\n#endif\n\n#ifdef USE_INSTANCING_COLOR\n\n\tvColor.xyz *= instanceColor.xyz;\n\n#endif\n";

declare const _default$1j: "\n#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\n\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\n\treturn fract( sin( sn ) * c );\n\n}\n\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n\n#ifdef USE_ALPHAHASH\n\n\tvarying vec3 vPosition;\n\n#endif\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t// dir can be either a direction vector or a normal vector\n\t// upper-left 3x3 of matrix is assumed to be orthogonal\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n\tmat3 tmp;\n\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n\treturn tmp;\n\n}\n\nfloat luminance( const in vec3 rgb ) {\n\n\t// assumes rgb is in linear color space with sRGB primaries and D65 white point\n\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\n\treturn dot( weights, rgb );\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n\treturn m[ 2 ][ 3 ] == - 1.0;\n\n}\n\nvec2 equirectUv( in vec3 dir ) {\n\n\t// dir is assumed to be unit length\n\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\treturn vec2( u, v );\n\n}\n\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n";

declare const _default$1i: "\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\n\t// These shader functions convert between the UV coordinates of a single face of\n\t// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n\t// sampling a textureCube (not generally normalized ).\n\n\tfloat getFace( vec3 direction ) {\n\n\t\tvec3 absDirection = abs( direction );\n\n\t\tfloat face = - 1.0;\n\n\t\tif ( absDirection.x > absDirection.z ) {\n\n\t\t\tif ( absDirection.x > absDirection.y )\n\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t} else {\n\n\t\t\tif ( absDirection.z > absDirection.y )\n\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t}\n\n\t\treturn face;\n\n\t}\n\n\t// RH coordinate system; PMREM face-indexing convention\n\tvec2 getUV( vec3 direction, float face ) {\n\n\t\tvec2 uv;\n\n\t\tif ( face == 0.0 ) {\n\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x\n\n\t\t} else if ( face == 1.0 ) {\n\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y\n\n\t\t} else if ( face == 2.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z\n\n\t\t} else if ( face == 3.0 ) {\n\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x\n\n\t\t} else if ( face == 4.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y\n\n\t\t} else {\n\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z\n\n\t\t}\n\n\t\treturn 0.5 * ( uv + 1.0 );\n\n\t}\n\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\n\t\tfloat face = getFace( direction );\n\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\n\t\tfloat faceSize = exp2( mipInt );\n\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071\n\n\t\tif ( face > 2.0 ) {\n\n\t\t\tuv.y += faceSize;\n\n\t\t\tface -= 3.0;\n\n\t\t}\n\n\t\tuv.x += face * faceSize;\n\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\n\t\t#ifdef texture2DGradEXT\n\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering\n\n\t\t#else\n\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\n\t\t#endif\n\n\t}\n\n\t// These defines must match with PMREMGenerator\n\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\n\tfloat roughnessToMip( float roughness ) {\n\n\t\tfloat mip = 0.0;\n\n\t\tif ( roughness >= cubeUV_r1 ) {\n\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\n\t\t} else {\n\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25\n\t\t}\n\n\t\treturn mip;\n\n\t}\n\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\n\t\tfloat mipF = fract( mip );\n\n\t\tfloat mipInt = floor( mip );\n\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\n\t\tif ( mipF == 0.0 ) {\n\n\t\t\treturn vec4( color0, 1.0 );\n\n\t\t} else {\n\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\n\t\t}\n\n\t}\n\n#endif\n";

declare const _default$1h: "\nvec3 transformedNormal = objectNormal;\n\n#ifdef USE_INSTANCING\n\n\t// this is in lieu of a per-instance normal-matrix\n\t// shear transforms in the instance matrix are not supported\n\n\tmat3 m = mat3( instanceMatrix );\n\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\n\ttransformedNormal = m * transformedNormal;\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#ifdef FLIP_SIDED\n\n\t\ttransformedTangent = - transformedTangent;\n\n\t#endif\n\n#endif\n";

declare const _default$1g: "\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n";

declare const _default$1f: "\n#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n\n#endif\n";

declare const _default$1e: "\n#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n";

declare const _default$1d: "\n#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n";

declare const _default$1c: "\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n";

declare const _default$1b: "\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\n";

declare const _default$1a: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvec3 cameraToFrag;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n\t\t}\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";

declare const _default$19: "\n#ifdef USE_ENVMAP\n\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif\n";

declare const _default$18: "\n#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n";

declare const _default$17: "\n#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n";

declare const _default$16: "\n#ifdef USE_ENVMAP\n\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\n\t\t\t// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n\t#ifdef USE_ANISOTROPY\n\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t\t\t  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\n\t\t\t#else\n\n\t\t\t\treturn vec3( 0.0 );\n\n\t\t\t#endif\n\n\t\t}\n\n\t#endif\n\n#endif\n";

declare const _default$15: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\t}\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n";

declare const _default$14: "\n#ifdef USE_FOG\n\n\tvFogDepth = - mvPosition.z;\n\n#endif\n";

declare const _default$13: "\n#ifdef USE_FOG\n\n\tvarying float vFogDepth;\n\n#endif\n";

declare const _default$12: "\n#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n";

declare const _default$11: "\n#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n";

declare const _default$10: "\n\n#ifdef USE_GRADIENTMAP\n\n\tuniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t// dotNL will be from -1.0 to 1.0\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t#ifdef USE_GRADIENTMAP\n\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\n\t#else\n\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\n\t#endif\n\n}\n";

declare const _default$$: "\n#ifdef USE_LIGHTMAP\n\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n\n#endif\n";

declare const _default$_: "\n#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif\n";

declare const _default$Z: "\nLambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;\n";

declare const _default$Y: "\nvarying vec3 vViewPosition;\n\nstruct LambertMaterial {\n\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert\n";

declare const _default$X: "\nuniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\n\n// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\n\t// normal is assumed to have unit length\n\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\n\treturn result;\n\n}\n\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\n\treturn irradiance;\n\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\treturn irradiance;\n\n}\n\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n\t#if defined ( LEGACY_LIGHTS )\n\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t\t}\n\n\t\treturn 1.0;\n\n\t#else\n\n\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t\t// page 32, equation 26: E[window1]\n\t\t// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\n\t\tif ( cutoffDistance > 0.0 ) {\n\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\n\t\t}\n\n\t\treturn distanceFalloff;\n\n\t#endif\n\n}\n\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\tif ( spotAttenuation > 0.0 ) {\n\n\t\t\tfloat lightDistance = length( lVector );\n\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t\t} else {\n\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\n\t\t}\n\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltc_1; // RGBA Float\n\tuniform sampler2D ltc_2; // RGBA Float\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n";

declare const _default$W: "\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n";

declare const _default$V: "\nvarying vec3 vViewPosition;\n\nstruct ToonMaterial {\n\n\tvec3 diffuseColor;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n";

declare const _default$U: "\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n";

declare const _default$T: "\nvarying vec3 vViewPosition;\n\nstruct BlinnPhongMaterial {\n\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n";

declare const _default$S: "\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n\n#ifdef IOR\n\n\tmaterial.ior = ior;\n\n\t#ifdef USE_SPECULAR\n\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\n\t\t#endif\n\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\n\t\t#endif\n\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\n\t#else\n\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\n\t#endif\n\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n\n#else\n\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n\n#endif\n\n#ifdef USE_CLEARCOAT\n\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\n\t#ifdef USE_CLEARCOATMAP\n\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\n\t#endif\n\n\tmaterial.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model\n\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\n\t#ifdef USE_IRIDESCENCEMAP\n\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\n\t#else\n\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\n\t#endif\n\n#endif\n\n#ifdef USE_SHEEN\n\n\tmaterial.sheenColor = sheenColor;\n\n\t#ifdef USE_SHEEN_COLORMAP\n\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\n\t#endif\n\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\n\t#endif\n\n#endif\n\n#ifdef USE_ANISOTROPY\n\n\t#ifdef USE_ANISOTROPYMAP\n\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\n\t#else\n\n\t\tvec2 anisotropyV = anisotropyVector;\n\n\t#endif\n\n\tmaterial.anisotropy = length( anisotropyV );\n\tanisotropyV /= material.anisotropy;\n\tmaterial.anisotropy = saturate( material.anisotropy );\n\n\t// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;\n\n#endif\n";

declare const _default$R: "\n\nstruct PhysicalMaterial {\n\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n\n};\n\n// temporary\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\n\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\n\n// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is \"roughness squared\" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf\n#ifdef USE_ANISOTROPY\n\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\n\t\treturn saturate(v);\n\n\t}\n\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\n\t}\n\n#endif\n\n#ifdef USE_CLEARCOAT\n\n\t// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\n\t\tfloat alpha = pow2( roughness ); // UE4's roughness\n\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\t\tfloat D = D_GGX( alpha, dotNH );\n\n\t\treturn F * ( V * D );\n\n\t}\n\n#endif\n\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\n\tfloat alpha = pow2( roughness ); // UE4's roughness\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\n\t#endif\n\n\t#ifdef USE_ANISOTROPY\n\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\n\t#else\n\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\t\tfloat D = D_GGX( alpha, dotNH );\n\n\t#endif\n\n\treturn F * ( V * D );\n\n}\n\n// Rect Area Light\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// code: https://github.com/selfshadow/ltc_code/\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\tfloat dotNV = saturate( dot( N, V ) );\n\n\t// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\t// Real-Time Area Lighting: a Journey from Research to Production (p.102)\n\t// An approximation of the form factor of a horizon-clipped rectangle.\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\n\t// rational polynomial approximation to theta / sin( theta ) / 2PI\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\n/*\n\t// alternate method of adjusting for horizon clipping (see referece)\n\t// refactoring required\n\tfloat len = length( vectorFormFactor );\n\tfloat z = vectorFormFactor.z / len;\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\t// tabulated horizon-clipped sphere, apparently...\n\tvec2 uv = vec2( z * 0.5 + 0.5, len );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\tfloat scale = texture2D( ltc_2, uv ).w;\n\n\tfloat result = len * scale;\n*/\n\n\treturn vec3( result );\n\n}\n\n// End Rect Area Light\n\n#if defined( USE_SHEEN )\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat D_Charlie( float roughness, float dotNH ) {\n\n\tfloat alpha = pow2( roughness );\n\n\t// Estevez and Kulla 2017, \"Production Friendly Microfacet Sheen BRDF\"\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16\n\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n\n}\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\n\t// Neubelt and Pettineo 2013, \"Crafting a Next-gen Material Pipeline for The Order: 1886\"\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n\n}\n\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\n\treturn sheenColor * ( D * V );\n\n}\n\n#endif\n\n// This is a curve-fit approxmation to the \"Charlie sheen\" BRDF integrated over the hemisphere from \n// Estevez and Kulla 2017, \"Production Friendly Microfacet Sheen BRDF\". The analysis can be found\n// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tfloat r2 = roughness * roughness;\n\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\n\treturn saturate( DG * RECIPROCAL_PI );\n\n}\n\n// Analytical approximation of the DFG LUT, one half of the\n// split-sum approximation used in indirect specular lighting.\n// via 'environmentBRDF' from \"Physically Based Shading on Mobile\"\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\n\treturn fab;\n\n}\n\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\treturn specularColor * fab.x + specularF90 * fab.y;\n\n}\n\n// Fdez-Agüera's \"Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting\"\n// Approximates multiscattering in order to preserve energy.\n// http://www.jcgt.org/published/0008/01/03/\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\n\t#else\n\n\t\tvec3 Fr = specularColor;\n\n\t#endif\n\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21\n\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction\n\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\n\t\t// LTC Fresnel Approximation by Stephen Hill\n\t\t// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\n\t#endif\n\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\n\t#endif\n\n\t// Both indirect specular and indirect diffuse light accumulate here\n\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\n\t#else\n\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\n\t#endif\n\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n";

declare const _default$Q: "\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef USE_CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\n\tif ( material.iridescenceThickness == 0.0 ) {\n\n\t\tmaterial.iridescence = 0.0;\n\n\t} else {\n\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\n\t}\n\n\tif ( material.iridescence > 0.0 ) {\n\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\n\t\t// Iridescence F0 approximation\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\n\t}\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n";

declare const _default$P: "\n#if defined( RE_IndirectDiffuse )\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\n\t#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\t#ifdef USE_ANISOTROPY\n\n\t\tradiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );\n\n\t#else\n\n\t\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\n\t#endif\n\n#endif\n";

declare const _default$O: "\n#if defined( RE_IndirectDiffuse )\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n\n#endif\n";

declare const _default$N: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\t// Doing a strict comparison with == 1.0 can cause noise artifacts\n\t// on some platforms. See issue #17623.\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n";

declare const _default$M: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n\n#endif\n";

declare const _default$L: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\n\t#else\n\n\t\tuniform float logDepthBufFC;\n\n\t#endif\n\n#endif\n";

declare const _default$K: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n\t#else\n\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\n\t\t\tgl_Position.z *= gl_Position.w;\n\n\t\t}\n\n\t#endif\n\n#endif\n";

declare const _default$J: "\n#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vMapUv );\n\n#endif\n";

declare const _default$I: "\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n";

declare const _default$H: "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\t#if defined( USE_POINTS_UV )\n\n\t\tvec2 uv = vUv;\n\n\t#else\n\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n\t#endif\n\n#endif\n\n#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, uv );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n";

declare const _default$G: "\n#if defined( USE_POINTS_UV )\n\n\tvarying vec2 vUv;\n\n#else\n\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\t\tuniform mat3 uvTransform;\n\n\t#endif\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";

declare const _default$F: "\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n";

declare const _default$E: "\n#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif\n";

declare const _default$D: "\n#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tvColor *= morphTargetBaseInfluence;\n\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t#if defined( USE_COLOR_ALPHA )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\n\t\t#elif defined( USE_COLOR )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\n\t\t#endif\n\n\t}\n\n#endif\n";

declare const _default$C: "\n#ifdef USE_MORPHNORMALS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tobjectNormal *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\n\t#endif\n\n#endif\n";

declare const _default$B: "\n#ifdef USE_MORPHTARGETS\n\n\tuniform float morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\n\t\t}\n\n\t#else\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\n\t\t#else\n\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n";

declare const _default$A: "\n#ifdef USE_MORPHTARGETS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\ttransformed *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n";

declare const _default$z: "\nfloat faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n#ifdef FLAT_SHADED\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal *= faceDirection;\n\n\t#endif\n\n#endif\n\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\n\t#ifdef USE_TANGENT\n\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\n\t#else\n\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\n\t#endif\n\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\n\t#endif\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\t#ifdef USE_TANGENT\n\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\n\t#else\n\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\n\t#endif\n\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\n\t#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 geometryNormal = normal;\n\n";

declare const _default$y: "\n\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n\t#ifdef FLIP_SIDED\n\n\t\tnormal = - normal;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\tnormal = normalize( normalMatrix * normal );\n\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\n\tnormal = normalize( tbn * mapN );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n\n#endif\n";

declare const _default$x: "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n";

declare const _default$w: "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n";

declare const _default$v: "\n#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n";

declare const _default$u: "\n#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n#endif\n\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\n\tuniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\n\t// Normal Mapping Without Precomputed Tangents\n\t// http://www.thetenthplanet.de/archives/1180\n\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\n\t\tvec3 N = surf_norm; // normalized\n\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\n\t\treturn mat3( T * scale, B * scale, N );\n\n\t}\n\n#endif\n";

declare const _default$t: "\n#ifdef USE_CLEARCOAT\n\n\tvec3 clearcoatNormal = geometryNormal;\n\n#endif\n";

declare const _default$s: "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n\n#endif\n";

declare const _default$r: "\n\n#ifdef USE_CLEARCOATMAP\n\n\tuniform sampler2D clearcoatMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n\n#endif\n\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tuniform sampler2D clearcoatRoughnessMap;\n\n#endif\n";

declare const _default$q: "\n\n#ifdef USE_IRIDESCENCEMAP\n\n\tuniform sampler2D iridescenceMap;\n\n#endif\n\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\tuniform sampler2D iridescenceThicknessMap;\n\n#endif\n";

declare const _default$p: "\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );\n";

declare const _default$o: "\nvec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\n\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\n\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\n\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\n\n// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\t// -near maps to 0; -far maps to 1\n\treturn ( viewZ + near ) / ( near - far );\n}\n\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\t// maps orthographic depth in [ 0, 1 ] to viewZ\n\treturn depth * ( near - far ) - near;\n}\n\n// NOTE: https://twitter.com/gonnavis/status/1377183786949959682\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\t// -near maps to 0; -far maps to 1\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\n\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\t// maps perspective depth in [ 0, 1 ] to viewZ\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}\n";

declare const _default$n: "\n#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n";

declare const _default$m: "\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_INSTANCING\n\n\tmvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n";

declare const _default$l: "\n#ifdef DITHERING\n\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n";

declare const _default$k: "\n#ifdef DITHERING\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift according to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n";

declare const _default$j: "\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n";

declare const _default$i: "\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif\n";

declare const _default$h: "\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n\n#endif\n\n#if NUM_SPOT_LIGHT_MAPS > 0\n\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n\n#endif\n\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n\t}\n\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n\t\tfloat occlusion = 1.0;\n\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\n\t\tfloat hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n\t\tif (hard_shadow != 1.0 ) {\n\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n\t\t}\n\t\treturn occlusion;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the vector from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// dp = normalized distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?\n\t\tdp += shadowBias;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n";

declare const _default$g: "\n\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n\n#endif\n\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n";

declare const _default$f: "\n\n#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\n\t// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n\n#endif\n\n#if defined( USE_SHADOWMAP )\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n\n// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)\n\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n\n";

declare const _default$e: "\nfloat getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\tDirectionalLightShadow directionalLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\tSpotLightShadow spotLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\tPointLightShadow pointLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n";

declare const _default$d: "\n#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n";

declare const _default$c: "\n#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\n\tmat4 getBoneMatrix( const in float i ) {\n\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\ty = dy * ( y + 0.5 );\n\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\treturn bone;\n\n\t}\n\n#endif\n";

declare const _default$b: "\n#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n";

declare const _default$a: "\n#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n\t#ifdef USE_TANGENT\n\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#endif\n\n#endif\n";

declare const _default$9: "\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif\n";

declare const _default$8: "\n#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif\n";

declare const _default$7: "\n#if defined( TONE_MAPPING )\n\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n";

declare const _default$6: "\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn saturate( toneMappingExposure * color );\n\n}\n\n// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs\nvec3 RRTAndODTFit( vec3 v ) {\n\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n\t// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\n\t// ODT_SAT => XYZ => D60_2_D65 => sRGB\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\n\tcolor *= toneMappingExposure / 0.6;\n\n\tcolor = ACESInputMat * color;\n\n\t// Apply RRT and ODT\n\tcolor = RRTAndODTFit( color );\n\n\tcolor = ACESOutputMat * color;\n\n\t// Clamp to [0, 1]\n\treturn saturate( color );\n\n}\n\nvec3 CustomToneMapping( vec3 color ) { return color; }\n";

declare const _default$5: "\n#ifdef USE_TRANSMISSION\n\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\n\t#endif\n\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n\n#endif\n";

declare const _default$4: "\n#ifdef USE_TRANSMISSION\n\n\t// Transmission code is based on glTF-Sampler-Viewer\n\t// https://github.com/KhronosGroup/glTF-Sample-Viewer\n\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tuniform sampler2D transmissionMap;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tuniform sampler2D thicknessMap;\n\n\t#endif\n\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\n\tvarying vec3 vWorldPosition;\n\n\t// Mipped Bicubic Texture Filtering by N8\n\t// https://www.shadertoy.com/view/Dl2SDW\n\n\tfloat w0( float a ) {\n\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\n\t}\n\n\tfloat w1( float a ) {\n\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\n\t}\n\n\tfloat w2( float a ){\n\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\n\t}\n\n\tfloat w3( float a ) {\n\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\n\t}\n\n\t// g0 and g1 are the two amplitude functions\n\tfloat g0( float a ) {\n\n\t\treturn w0( a ) + w1( a );\n\n\t}\n\n\tfloat g1( float a ) {\n\n\t\treturn w2( a ) + w3( a );\n\n\t}\n\n\t// h0 and h1 are the two offset functions\n\tfloat h0( float a ) {\n\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\n\t}\n\n\tfloat h1( float a ) {\n\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\n\t}\n\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\n\t\tuv = uv * texelSize.zw + 0.5;\n\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\n\t}\n\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\n\t}\n\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\n\t\t// Direction of refracted light.\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\n\t\t// Compute rotation-independant scaling of the model matrix.\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\n\t\t// The thickness is specified in local space.\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\n\t}\n\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\n\t\t// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and\n\t\t// an IOR of 1.5 results in the default amount of microfacet refraction.\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\n\t}\n\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\n\t}\n\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tif ( isinf( attenuationDistance ) ) {\n\n\t\t\t// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.\n\t\t\treturn vec3( 1.0 );\n\n\t\t} else {\n\n\t\t\t// Compute light attenuation using Beer's law.\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law\n\t\t\treturn transmittance;\n\n\t\t}\n\n\t}\n\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\n\t\t// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\n\t\t// Sample framebuffer to get pixel the refracted ray hits.\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\n\t\t// Get the specular component.\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\n\t\t// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job \n\t\t// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\n\t}\n#endif\n";

declare const _default$3: "\n#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\n\tvarying vec2 vUv;\n\n#endif\n#ifdef USE_MAP\n\n\tvarying vec2 vMapUv;\n\n#endif\n#ifdef USE_ALPHAMAP\n\n\tvarying vec2 vAlphaMapUv;\n\n#endif\n#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vLightMapUv;\n\n#endif\n#ifdef USE_AOMAP\n\n\tvarying vec2 vAoMapUv;\n\n#endif\n#ifdef USE_BUMPMAP\n\n\tvarying vec2 vBumpMapUv;\n\n#endif\n#ifdef USE_NORMALMAP\n\n\tvarying vec2 vNormalMapUv;\n\n#endif\n#ifdef USE_EMISSIVEMAP\n\n\tvarying vec2 vEmissiveMapUv;\n\n#endif\n#ifdef USE_METALNESSMAP\n\n\tvarying vec2 vMetalnessMapUv;\n\n#endif\n#ifdef USE_ROUGHNESSMAP\n\n\tvarying vec2 vRoughnessMapUv;\n\n#endif\n#ifdef USE_ANISOTROPYMAP\n\n\tvarying vec2 vAnisotropyMapUv;\n\n#endif\n#ifdef USE_CLEARCOATMAP\n\n\tvarying vec2 vClearcoatMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvarying vec2 vClearcoatNormalMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tvarying vec2 vClearcoatRoughnessMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\n\tvarying vec2 vIridescenceMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\tvarying vec2 vIridescenceThicknessMapUv;\n\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\n\tvarying vec2 vSheenColorMapUv;\n\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\n\tvarying vec2 vSheenRoughnessMapUv;\n\n#endif\n#ifdef USE_SPECULARMAP\n\n\tvarying vec2 vSpecularMapUv;\n\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\n\tvarying vec2 vSpecularColorMapUv;\n\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\n\tvarying vec2 vSpecularIntensityMapUv;\n\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n\n#endif\n#ifdef USE_THICKNESSMAP\n\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n\n#endif\n";

declare const _default$2: "\n#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\n\tvarying vec2 vUv;\n\n#endif\n#ifdef USE_MAP\n\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n\n#endif\n#ifdef USE_ALPHAMAP\n\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n\n#endif\n#ifdef USE_LIGHTMAP\n\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n\n#endif\n#ifdef USE_AOMAP\n\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n\n#endif\n#ifdef USE_BUMPMAP\n\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n\n#endif\n#ifdef USE_NORMALMAP\n\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n\n#endif\n#ifdef USE_EMISSIVEMAP\n\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n\n#endif\n#ifdef USE_METALNESSMAP\n\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n\n#endif\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n\n#endif\n#ifdef USE_ANISOTROPYMAP\n\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n\n#endif\n#ifdef USE_CLEARCOATMAP\n\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n\n#endif\n#ifdef USE_SPECULARMAP\n\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n\n#endif\n#ifdef USE_THICKNESSMAP\n\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n\n#endif\n";

declare const _default$1: "\n#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\n\tvUv = vec3( uv, 1 ).xy;\n\n#endif\n#ifdef USE_MAP\n\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_ALPHAMAP\n\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_LIGHTMAP\n\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_AOMAP\n\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_BUMPMAP\n\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_NORMALMAP\n\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_EMISSIVEMAP\n\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_METALNESSMAP\n\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_ROUGHNESSMAP\n\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_ANISOTROPYMAP\n\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_CLEARCOATMAP\n\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SPECULARMAP\n\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_THICKNESSMAP\n\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n\n#endif\n";

declare const _default: "\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\n#endif\n";

declare namespace ShaderChunk {
    export { _default$1E as alphahash_fragment };
    export { _default$1D as alphahash_pars_fragment };
    export { _default$1C as alphamap_fragment };
    export { _default$1B as alphamap_pars_fragment };
    export { _default$1A as alphatest_fragment };
    export { _default$1z as alphatest_pars_fragment };
    export { _default$1y as aomap_fragment };
    export { _default$1x as aomap_pars_fragment };
    export { _default$1w as begin_vertex };
    export { _default$1v as beginnormal_vertex };
    export { _default$1u as bsdfs };
    export { _default$1t as iridescence_fragment };
    export { _default$1s as bumpmap_pars_fragment };
    export { _default$1r as clipping_planes_fragment };
    export { _default$1q as clipping_planes_pars_fragment };
    export { _default$1p as clipping_planes_pars_vertex };
    export { _default$1o as clipping_planes_vertex };
    export { _default$1n as color_fragment };
    export { _default$1m as color_pars_fragment };
    export { _default$1l as color_pars_vertex };
    export { _default$1k as color_vertex };
    export { _default$1j as common };
    export { _default$1i as cube_uv_reflection_fragment };
    export { _default$1h as defaultnormal_vertex };
    export { _default$1g as displacementmap_pars_vertex };
    export { _default$1f as displacementmap_vertex };
    export { _default$1e as emissivemap_fragment };
    export { _default$1d as emissivemap_pars_fragment };
    export { _default$1c as colorspace_fragment };
    export { _default$1b as colorspace_pars_fragment };
    export { _default$1a as envmap_fragment };
    export { _default$19 as envmap_common_pars_fragment };
    export { _default$18 as envmap_pars_fragment };
    export { _default$17 as envmap_pars_vertex };
    export { _default$16 as envmap_physical_pars_fragment };
    export { _default$15 as envmap_vertex };
    export { _default$14 as fog_vertex };
    export { _default$13 as fog_pars_vertex };
    export { _default$12 as fog_fragment };
    export { _default$11 as fog_pars_fragment };
    export { _default$10 as gradientmap_pars_fragment };
    export { _default$$ as lightmap_fragment };
    export { _default$_ as lightmap_pars_fragment };
    export { _default$Z as lights_lambert_fragment };
    export { _default$Y as lights_lambert_pars_fragment };
    export { _default$X as lights_pars_begin };
    export { _default$W as lights_toon_fragment };
    export { _default$V as lights_toon_pars_fragment };
    export { _default$U as lights_phong_fragment };
    export { _default$T as lights_phong_pars_fragment };
    export { _default$S as lights_physical_fragment };
    export { _default$R as lights_physical_pars_fragment };
    export { _default$Q as lights_fragment_begin };
    export { _default$P as lights_fragment_maps };
    export { _default$O as lights_fragment_end };
    export { _default$N as logdepthbuf_fragment };
    export { _default$M as logdepthbuf_pars_fragment };
    export { _default$L as logdepthbuf_pars_vertex };
    export { _default$K as logdepthbuf_vertex };
    export { _default$J as map_fragment };
    export { _default$I as map_pars_fragment };
    export { _default$H as map_particle_fragment };
    export { _default$G as map_particle_pars_fragment };
    export { _default$F as metalnessmap_fragment };
    export { _default$E as metalnessmap_pars_fragment };
    export { _default$D as morphcolor_vertex };
    export { _default$C as morphnormal_vertex };
    export { _default$B as morphtarget_pars_vertex };
    export { _default$A as morphtarget_vertex };
    export { _default$z as normal_fragment_begin };
    export { _default$y as normal_fragment_maps };
    export { _default$x as normal_pars_fragment };
    export { _default$w as normal_pars_vertex };
    export { _default$v as normal_vertex };
    export { _default$u as normalmap_pars_fragment };
    export { _default$t as clearcoat_normal_fragment_begin };
    export { _default$s as clearcoat_normal_fragment_maps };
    export { _default$r as clearcoat_pars_fragment };
    export { _default$q as iridescence_pars_fragment };
    export { _default$p as opaque_fragment };
    export { _default$o as packing };
    export { _default$n as premultiplied_alpha_fragment };
    export { _default$m as project_vertex };
    export { _default$l as dithering_fragment };
    export { _default$k as dithering_pars_fragment };
    export { _default$j as roughnessmap_fragment };
    export { _default$i as roughnessmap_pars_fragment };
    export { _default$h as shadowmap_pars_fragment };
    export { _default$g as shadowmap_pars_vertex };
    export { _default$f as shadowmap_vertex };
    export { _default$e as shadowmask_pars_fragment };
    export { _default$d as skinbase_vertex };
    export { _default$c as skinning_pars_vertex };
    export { _default$b as skinning_vertex };
    export { _default$a as skinnormal_vertex };
    export { _default$9 as specularmap_fragment };
    export { _default$8 as specularmap_pars_fragment };
    export { _default$7 as tonemapping_fragment };
    export { _default$6 as tonemapping_pars_fragment };
    export { _default$5 as transmission_fragment };
    export { _default$4 as transmission_pars_fragment };
    export { _default$3 as uv_pars_fragment };
    export { _default$2 as uv_pars_vertex };
    export { _default$1 as uv_vertex };
    export { _default as worldpos_vertex };
    export let background_vert: string;
    export let background_frag: string;
    export let backgroundCube_vert: string;
    export let backgroundCube_frag: string;
    export let cube_vert: string;
    export let cube_frag: string;
    export let depth_vert: string;
    export let depth_frag: string;
    export let distanceRGBA_vert: string;
    export let distanceRGBA_frag: string;
    export let equirect_vert: string;
    export let equirect_frag: string;
    export let linedashed_vert: string;
    export let linedashed_frag: string;
    export let meshbasic_vert: string;
    export let meshbasic_frag: string;
    export let meshlambert_vert: string;
    export let meshlambert_frag: string;
    export let meshmatcap_vert: string;
    export let meshmatcap_frag: string;
    export let meshnormal_vert: string;
    export let meshnormal_frag: string;
    export let meshphong_vert: string;
    export let meshphong_frag: string;
    export let meshphysical_vert: string;
    export let meshphysical_frag: string;
    export let meshtoon_vert: string;
    export let meshtoon_frag: string;
    export let points_vert: string;
    export let points_frag: string;
    export let shadow_vert: string;
    export let shadow_frag: string;
    export let sprite_vert: string;
    export let sprite_frag: string;
}

declare class FogExp2 {
    constructor(color: any, density?: number);
    isFogExp2: boolean;
    name: string;
    color: Color;
    density: number;
    clone(): FogExp2;
    toJSON(): {
        type: string;
        color: number;
        density: number;
    };
}

declare class Fog {
    constructor(color: any, near?: number, far?: number);
    isFog: boolean;
    name: string;
    color: Color;
    near: number;
    far: number;
    clone(): Fog;
    toJSON(): {
        type: string;
        color: number;
        near: number;
        far: number;
    };
}

declare class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    set(x: any, y: any, z: any): this;
    setScalar(scalar: any): this;
    setX(x: any): this;
    setY(y: any): this;
    setZ(z: any): this;
    setComponent(index: any, value: any): this;
    getComponent(index: any): number;
    clone(): any;
    copy(v: any): this;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    multiplyVectors(a: any, b: any): this;
    applyEuler(euler: any): this;
    applyAxisAngle(axis: any, angle: any): this;
    applyMatrix3(m: any): this;
    applyNormalMatrix(m: any): this;
    applyMatrix4(m: any): this;
    applyQuaternion(q: any): this;
    project(camera: any): this;
    unproject(camera: any): this;
    transformDirection(m: any): this;
    divide(v: any): this;
    divideScalar(scalar: any): this;
    min(v: any): this;
    max(v: any): this;
    clamp(min: any, max: any): this;
    clampScalar(minVal: any, maxVal: any): this;
    clampLength(min: any, max: any): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    cross(v: any): this;
    crossVectors(a: any, b: any): this;
    projectOnVector(v: any): this;
    projectOnPlane(planeNormal: any): this;
    reflect(normal: any): this;
    angleTo(v: any): number;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    manhattanDistanceTo(v: any): number;
    setFromSpherical(s: any): this;
    setFromSphericalCoords(radius: any, phi: any, theta: any): this;
    setFromCylindrical(c: any): this;
    setFromCylindricalCoords(radius: any, theta: any, y: any): this;
    setFromMatrixPosition(m: any): this;
    setFromMatrixScale(m: any): this;
    setFromMatrixColumn(m: any, index: any): this;
    setFromMatrix3Column(m: any, index: any): this;
    setFromEuler(e: any): this;
    setFromColor(c: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    fromBufferAttribute(attribute: any, index: any): this;
    random(): this;
    randomDirection(): this;
    [Symbol.iterator](): Generator<number, void, unknown>;
}

declare class Euler {
    constructor(x?: number, y?: number, z?: number, order?: string);
    isEuler: boolean;
    _x: number;
    _y: number;
    _z: number;
    _order: string;
    set x(arg: number);
    get x(): number;
    set y(arg: number);
    get y(): number;
    set z(arg: number);
    get z(): number;
    set order(arg: string);
    get order(): string;
    set(x: any, y: any, z: any, order?: string): this;
    clone(): any;
    copy(euler: any): this;
    setFromRotationMatrix(m: any, order?: string, update?: boolean): this;
    setFromQuaternion(q: any, order: any, update: any): this;
    setFromVector3(v: any, order?: string): this;
    reorder(newOrder: any): this;
    equals(euler: any): boolean;
    fromArray(array: any): this;
    toArray(array?: any[], offset?: number): any[];
    _onChange(callback: any): this;
    _onChangeCallback(): void;
    [Symbol.iterator](): Generator<string | number, void, unknown>;
}
declare namespace Euler {
    let DEFAULT_ORDER: string;
}

declare class Quaternion {
    static slerpFlat(dst: any, dstOffset: any, src0: any, srcOffset0: any, src1: any, srcOffset1: any, t: any): void;
    static multiplyQuaternionsFlat(dst: any, dstOffset: any, src0: any, srcOffset0: any, src1: any, srcOffset1: any): any;
    constructor(x?: number, y?: number, z?: number, w?: number);
    isQuaternion: boolean;
    _x: number;
    _y: number;
    _z: number;
    _w: number;
    set x(arg: number);
    get x(): number;
    set y(arg: number);
    get y(): number;
    set z(arg: number);
    get z(): number;
    set w(arg: number);
    get w(): number;
    set(x: any, y: any, z: any, w: any): this;
    clone(): any;
    copy(quaternion: any): this;
    setFromEuler(euler: any, update: any): this;
    setFromAxisAngle(axis: any, angle: any): this;
    setFromRotationMatrix(m: any): this;
    setFromUnitVectors(vFrom: any, vTo: any): this;
    angleTo(q: any): number;
    rotateTowards(q: any, step: any): this;
    identity(): this;
    invert(): this;
    conjugate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    normalize(): this;
    multiply(q: any): this;
    premultiply(q: any): this;
    multiplyQuaternions(a: any, b: any): this;
    slerp(qb: any, t: any): this;
    slerpQuaternions(qa: any, qb: any, t: any): this;
    random(): this;
    equals(quaternion: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    fromBufferAttribute(attribute: any, index: any): this;
    toJSON(): any[];
    _onChange(callback: any): this;
    _onChangeCallback(): void;
    [Symbol.iterator](): Generator<number, void, unknown>;
}

declare class Matrix4 {
    constructor(n11: any, n12: any, n13: any, n14: any, n21: any, n22: any, n23: any, n24: any, n31: any, n32: any, n33: any, n34: any, n41: any, n42: any, n43: any, n44: any);
    elements: number[];
    set(n11: any, n12: any, n13: any, n14: any, n21: any, n22: any, n23: any, n24: any, n31: any, n32: any, n33: any, n34: any, n41: any, n42: any, n43: any, n44: any): this;
    identity(): this;
    clone(): Matrix4;
    copy(m: any): this;
    copyPosition(m: any): this;
    setFromMatrix3(m: any): this;
    extractBasis(xAxis: any, yAxis: any, zAxis: any): this;
    makeBasis(xAxis: any, yAxis: any, zAxis: any): this;
    extractRotation(m: any): this;
    makeRotationFromEuler(euler: any): this;
    makeRotationFromQuaternion(q: any): this;
    lookAt(eye: any, target: any, up: any): this;
    multiply(m: any): this;
    premultiply(m: any): this;
    multiplyMatrices(a: any, b: any): this;
    multiplyScalar(s: any): this;
    determinant(): number;
    transpose(): this;
    setPosition(x: any, y: any, z: any): this;
    invert(): this;
    scale(v: any): this;
    getMaxScaleOnAxis(): number;
    makeTranslation(x: any, y: any, z: any): this;
    makeRotationX(theta: any): this;
    makeRotationY(theta: any): this;
    makeRotationZ(theta: any): this;
    makeRotationAxis(axis: any, angle: any): this;
    makeScale(x: any, y: any, z: any): this;
    makeShear(xy: any, xz: any, yx: any, yz: any, zx: any, zy: any): this;
    compose(position: any, quaternion: any, scale: any): this;
    decompose(position: any, quaternion: any, scale: any): this;
    makePerspective(left: any, right: any, top: any, bottom: any, near: any, far: any, coordinateSystem?: number): this;
    makeOrthographic(left: any, right: any, top: any, bottom: any, near: any, far: any, coordinateSystem?: number): this;
    equals(matrix: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
}

declare class Layers {
    mask: number;
    set(channel: any): void;
    enable(channel: any): void;
    enableAll(): void;
    toggle(channel: any): void;
    disable(channel: any): void;
    disableAll(): void;
    test(layers: any): boolean;
    isEnabled(channel: any): boolean;
}

/**
 * Represents a transformed node in the scene graph.
 */
declare class Object3D extends EventDispatcher {
    isObject3D: boolean;
    /** @type {number} id */ id: number;
    uuid: string;
    name: string;
    type: string;
    parent: any;
    children: any[];
    up: any;
    /** @type {Vector3} position */ position: Vector3;
    /** @type {Euler} rotation */ rotation: Euler;
    /** @type {Quaternion} quaternion */ quaternion: Quaternion;
    /** @type {Vector3} scale */ scale: Vector3;
    /** @type {Matrix4} scale */ modelViewMatrix: Matrix4;
    /** @type {Matrix4} scale */ normalMatrix: Matrix4;
    matrix: Matrix4;
    matrixWorld: Matrix4;
    matrixAutoUpdate: boolean;
    matrixWorldNeedsUpdate: boolean;
    matrixWorldAutoUpdate: boolean;
    layers: Layers;
    visible: boolean;
    castShadow: boolean;
    receiveShadow: boolean;
    frustumCulled: boolean;
    renderOrder: number;
    animations: any[];
    userData: {};
    onBeforeRender(): void;
    onAfterRender(): void;
    applyMatrix4(matrix: any): void;
    applyQuaternion(q: any): this;
    setRotationFromAxisAngle(axis: any, angle: any): void;
    setRotationFromEuler(euler: any): void;
    setRotationFromMatrix(m: any): void;
    setRotationFromQuaternion(q: any): void;
    rotateOnAxis(axis: any, angle: any): this;
    rotateOnWorldAxis(axis: any, angle: any): this;
    rotateX(angle: any): this;
    rotateY(angle: any): this;
    rotateZ(angle: any): this;
    translateOnAxis(axis: any, distance: any): this;
    translateX(distance: any): this;
    translateY(distance: any): this;
    translateZ(distance: any): this;
    localToWorld(vector: any): any;
    worldToLocal(vector: any): any;
    lookAt(x: any, y: any, z: any): void;
    add(object: any, ...args: any[]): this;
    remove(object: any, ...args: any[]): this;
    removeFromParent(): this;
    clear(): this;
    attach(object: any): this;
    getObjectById(id: any): any;
    getObjectByName(name: any): any;
    getObjectByProperty(name: any, value: any): any;
    getObjectsByProperty(name: any, value: any): this[];
    getWorldPosition(target: any): any;
    getWorldQuaternion(target: any): any;
    getWorldScale(target: any): any;
    getWorldDirection(target: any): any;
    raycast(): void;
    traverse(callback: any): void;
    traverseVisible(callback: any): void;
    traverseAncestors(callback: any): void;
    updateMatrix(): void;
    updateMatrixWorld(force: any): void;
    updateWorldMatrix(updateParents: any, updateChildren: any): void;
    toJSON(meta: any): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
        geometries: any[];
        materials: any[];
        textures: any[];
        images: any[];
        shapes: any[];
        skeletons: any[];
        animations: any[];
        nodes: any[];
        object: {
            uuid: string;
            type: string;
            name: string;
            castShadow: boolean;
            receiveShadow: boolean;
            visible: boolean;
            frustumCulled: boolean;
            renderOrder: number;
            userData: {};
            layers: number;
            matrix: any[];
            up: any;
            matrixAutoUpdate: boolean;
            count: any;
            instanceMatrix: any;
            instanceColor: any;
            background: any;
            environment: any;
            geometry: any;
            bindMode: any;
            bindMatrix: any;
            skeleton: any;
            material: any;
            children: any[];
            animations: any[];
        };
    };
    clone(recursive: any): any;
    copy(source: any, recursive?: boolean): this;
}
declare namespace Object3D {
    let DEFAULT_UP: Vector3;
    let DEFAULT_MATRIX_AUTO_UPDATE: boolean;
    let DEFAULT_MATRIX_WORLD_AUTO_UPDATE: boolean;
}

declare class Scene extends Object3D {
    isScene: boolean;
    background: any;
    environment: any;
    fog: any;
    backgroundBlurriness: number;
    backgroundIntensity: number;
    overrideMaterial: any;
    copy(source: any, recursive: any): this;
}

declare class Sprite extends Object3D {
    constructor(material: any);
    isSprite: boolean;
    geometry: any;
    material: any;
    center: Vector2;
    raycast(raycaster: any, intersects: any): void;
    copy(source: any, recursive: any): this;
}

declare class LOD extends Object3D {
    _currentLevel: number;
    autoUpdate: boolean;
    copy(source: any): this;
    addLevel(object: any, distance?: number, hysteresis?: number): this;
    getCurrentLevel(): number;
    getObjectForDistance(distance: any): any;
    raycast(raycaster: any, intersects: any): void;
    update(camera: any): void;
}

declare class BufferGeometry extends EventDispatcher {
    isBufferGeometry: boolean;
    uuid: string;
    name: string;
    type: string;
    index: any;
    attributes: {};
    morphAttributes: {};
    morphTargetsRelative: boolean;
    groups: any[];
    boundingBox: any;
    boundingSphere: any;
    drawRange: {
        start: number;
        count: number;
    };
    userData: {};
    getIndex(): any;
    setIndex(index: any): this;
    getAttribute(name: any): any;
    setAttribute(name: any, attribute: any): this;
    deleteAttribute(name: any): this;
    hasAttribute(name: any): boolean;
    addGroup(start: any, count: any, materialIndex?: number): void;
    clearGroups(): void;
    setDrawRange(start: any, count: any): void;
    applyMatrix4(matrix: any): this;
    applyQuaternion(q: any): this;
    rotateX(angle: any): this;
    rotateY(angle: any): this;
    rotateZ(angle: any): this;
    translate(x: any, y: any, z: any): this;
    scale(x: any, y: any, z: any): this;
    lookAt(vector: any): this;
    center(): this;
    setFromPoints(points: any): this;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    computeTangents(): void;
    computeVertexNormals(): void;
    normalizeNormals(): void;
    toNonIndexed(): BufferGeometry;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    clone(): any;
    copy(source: any): this;
    dispose(): void;
}

declare class Material extends EventDispatcher {
    isMaterial: boolean;
    uuid: string;
    name: string;
    type: string;
    blending: number;
    side: number;
    vertexColors: boolean;
    opacity: number;
    transparent: boolean;
    alphaHash: boolean;
    blendSrc: number;
    blendDst: number;
    blendEquation: number;
    blendSrcAlpha: any;
    blendDstAlpha: any;
    blendEquationAlpha: any;
    depthFunc: number;
    depthTest: boolean;
    depthWrite: boolean;
    stencilWriteMask: number;
    stencilFunc: number;
    stencilRef: number;
    stencilFuncMask: number;
    stencilFail: number;
    stencilZFail: number;
    stencilZPass: number;
    stencilWrite: boolean;
    clippingPlanes: any[];
    clipIntersection: boolean;
    clipShadows: boolean;
    shadowSide: any;
    colorWrite: boolean;
    precision: any;
    polygonOffset: boolean;
    polygonOffsetFactor: number;
    polygonOffsetUnits: number;
    dithering: boolean;
    alphaToCoverage: boolean;
    premultipliedAlpha: boolean;
    forceSinglePass: boolean;
    visible: boolean;
    toneMapped: boolean;
    userData: {};
    version: number;
    _alphaTest: number;
    set alphaTest(arg: number);
    get alphaTest(): number;
    onBuild(): void;
    onBeforeRender(): void;
    onBeforeCompile(): void;
    customProgramCacheKey(): string;
    setValues(values: any): void;
    toJSON(meta: any): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    clone(): any;
    copy(source: any): this;
    dispose(): void;
    set needsUpdate(arg: any);
}

declare class MeshBasicMaterial extends Material {
    constructor(parameters: any);
    isMeshBasicMaterial: boolean;
    color: Color;
    map: any;
    lightMap: any;
    lightMapIntensity: number;
    aoMap: any;
    aoMapIntensity: number;
    specularMap: any;
    alphaMap: any;
    envMap: any;
    combine: number;
    reflectivity: number;
    refractionRatio: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    fog: boolean;
    copy(source: any): this;
}

declare class Mesh extends Object3D {
    constructor(geometry?: BufferGeometry, material?: MeshBasicMaterial);
    isMesh: boolean;
    geometry: BufferGeometry;
    material: MeshBasicMaterial;
    copy(source: any, recursive: any): this;
    morphTargetInfluences: any;
    morphTargetDictionary: any;
    updateMorphTargets(): void;
    getVertexPosition(index: any, target: any): any;
    raycast(raycaster: any, intersects: any): void;
    _computeIntersections(raycaster: any, intersects: any, rayLocalSpace: any): void;
}

declare class SkinnedMesh extends Mesh {
    constructor(geometry: any, material: any);
    isSkinnedMesh: boolean;
    bindMode: string;
    bindMatrix: Matrix4;
    bindMatrixInverse: Matrix4;
    boundingBox: any;
    boundingSphere: any;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    copy(source: any, recursive: any): this;
    skeleton: any;
    bind(skeleton: any, bindMatrix: any): void;
    pose(): void;
    normalizeSkinWeights(): void;
    applyBoneTransform(index: any, vector: any): any;
    boneTransform(index: any, vector: any): any;
}

declare class DataTexture extends Texture {
    constructor(data: any, width: number, height: number, format: any, type: any, mapping: any, wrapS: any, wrapT: any, magFilter: number, minFilter: number, anisotropy: any, colorSpace: any);
    isDataTexture: boolean;
    image: {
        data: any;
        width: number;
        height: number;
    };
}

declare class Skeleton {
    constructor(bones?: any[], boneInverses?: any[]);
    uuid: string;
    bones: any[];
    boneInverses: any[];
    boneMatrices: Float32Array;
    boneTexture: DataTexture;
    boneTextureSize: number;
    init(): void;
    calculateInverses(): void;
    pose(): void;
    update(): void;
    clone(): Skeleton;
    computeBoneTexture(): this;
    getBoneByName(name: any): any;
    dispose(): void;
    fromJSON(json: any, bones: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
        bones: any[];
        boneInverses: any[];
    };
}

declare class Bone extends Object3D {
    isBone: boolean;
}

declare class Float64BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Float32BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Float16BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
    isFloat16BufferAttribute: boolean;
    getX(index: any): number;
    setX(index: any, x: any): this;
    getY(index: any): number;
    setY(index: any, y: any): this;
    getZ(index: any): number;
    setZ(index: any, z: any): this;
    getW(index: any): number;
    setW(index: any, w: any): this;
    setXY(index: any, x: any, y: any): this;
    setXYZ(index: any, x: any, y: any, z: any): this;
    setXYZW(index: any, x: any, y: any, z: any, w: any): this;
}
declare class Uint32BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Int32BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Uint16BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Int16BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Uint8ClampedBufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Uint8BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Int8BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class BufferAttribute {
    constructor(array: any, itemSize: any, normalized?: boolean);
    isBufferAttribute: boolean;
    name: string;
    array: any;
    itemSize: any;
    count: number;
    normalized: boolean;
    usage: number;
    updateRange: {
        offset: number;
        count: number;
    };
    gpuType: number;
    version: number;
    onUploadCallback(): void;
    set needsUpdate(arg: any);
    setUsage(value: any): this;
    copy(source: any): this;
    copyAt(index1: any, attribute: any, index2: any): this;
    copyArray(array: any): this;
    applyMatrix3(m: any): this;
    applyMatrix4(m: any): this;
    applyNormalMatrix(m: any): this;
    transformDirection(m: any): this;
    set(value: any, offset?: number): this;
    getX(index: any): any;
    setX(index: any, x: any): this;
    getY(index: any): any;
    setY(index: any, y: any): this;
    getZ(index: any): any;
    setZ(index: any, z: any): this;
    getW(index: any): any;
    setW(index: any, w: any): this;
    setXY(index: any, x: any, y: any): this;
    setXYZ(index: any, x: any, y: any, z: any): this;
    setXYZW(index: any, x: any, y: any, z: any, w: any): this;
    onUpload(callback: any): this;
    clone(): any;
    toJSON(): {
        itemSize: any;
        type: any;
        array: any[];
        normalized: boolean;
    };
}

declare class InstancedBufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any, meshPerAttribute?: number);
    isInstancedBufferAttribute: boolean;
    meshPerAttribute: number;
    copy(source: any): this;
}

declare class InstancedMesh extends Mesh {
    constructor(geometry: any, material: any, count: any);
    isInstancedMesh: boolean;
    instanceMatrix: InstancedBufferAttribute;
    instanceColor: any;
    count: any;
    boundingBox: any;
    boundingSphere: any;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    copy(source: any, recursive: any): this;
    getColorAt(index: any, color: any): void;
    getMatrixAt(index: any, matrix: any): void;
    setColorAt(index: any, color: any): void;
    setMatrixAt(index: any, matrix: any): void;
    dispose(): void;
}

declare class LineBasicMaterial extends Material {
    constructor(parameters: any);
    isLineBasicMaterial: boolean;
    color: Color;
    map: any;
    linewidth: number;
    linecap: string;
    linejoin: string;
    fog: boolean;
    copy(source: any): this;
}

declare class Line extends Object3D {
    constructor(geometry?: BufferGeometry, material?: LineBasicMaterial);
    isLine: boolean;
    geometry: BufferGeometry;
    material: LineBasicMaterial;
    copy(source: any, recursive: any): this;
    computeLineDistances(): this;
    raycast(raycaster: any, intersects: any): void;
    updateMorphTargets(): void;
    morphTargetInfluences: any[];
    morphTargetDictionary: {};
}

declare class LineSegments extends Line {
    constructor(geometry: any, material: any);
    isLineSegments: boolean;
    computeLineDistances(): this;
}

declare class LineLoop extends Line {
    constructor(geometry: any, material: any);
    isLineLoop: boolean;
}

declare class PointsMaterial extends Material {
    constructor(parameters: any);
    isPointsMaterial: boolean;
    color: Color;
    map: any;
    alphaMap: any;
    size: number;
    sizeAttenuation: boolean;
    fog: boolean;
    copy(source: any): this;
}

declare class Points extends Object3D {
    constructor(geometry?: BufferGeometry, material?: PointsMaterial);
    isPoints: boolean;
    geometry: BufferGeometry;
    material: PointsMaterial;
    copy(source: any, recursive: any): this;
    raycast(raycaster: any, intersects: any): void;
    updateMorphTargets(): void;
    morphTargetInfluences: any[];
    morphTargetDictionary: {};
}

declare class Group extends Object3D {
    isGroup: boolean;
}

declare class VideoTexture extends Texture {
    constructor(video: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any);
    isVideoTexture: boolean;
    minFilter: any;
    magFilter: any;
    update(): void;
}

declare class FramebufferTexture extends Texture {
    constructor(width: any, height: any);
    isFramebufferTexture: boolean;
    needsUpdate: boolean;
}

declare class CompressedTexture extends Texture {
    constructor(mipmaps: any, width: any, height: any, format: any, type: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, anisotropy: any, colorSpace: any);
    isCompressedTexture: boolean;
    image: {
        width: any;
        height: any;
    };
    mipmaps: any;
}

declare class CompressedArrayTexture extends CompressedTexture {
    constructor(mipmaps: any, width: any, height: any, depth: any, format: any, type: any);
    isCompressedArrayTexture: boolean;
    wrapR: number;
}

declare class CanvasTexture extends Texture {
    constructor(canvas: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any);
    isCanvasTexture: boolean;
    needsUpdate: boolean;
}

declare class DepthTexture extends Texture {
    constructor(width: any, height: any, type: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, anisotropy: any, format: any);
    isDepthTexture: boolean;
    image: {
        width: any;
        height: any;
    };
    magFilter: any;
    minFilter: any;
    compareFunction: any;
    copy(source: any): this;
}

declare class BoxGeometry extends BufferGeometry {
    static fromJSON(data: any): BoxGeometry;
    constructor(width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number);
    parameters: {
        width: number;
        height: number;
        depth: number;
        widthSegments: number;
        heightSegments: number;
        depthSegments: number;
    };
    copy(source: any): this;
}

declare class LatheGeometry extends BufferGeometry {
    static fromJSON(data: any): LatheGeometry;
    constructor(points?: Vector2[], segments?: number, phiStart?: number, phiLength?: number);
    parameters: {
        points: Vector2[];
        segments: number;
        phiStart: number;
        phiLength: number;
    };
    copy(source: any): this;
}

declare class CapsuleGeometry extends LatheGeometry {
    static fromJSON(data: any): CapsuleGeometry;
    constructor(radius?: number, length?: number, capSegments?: number, radialSegments?: number);
    parameters: {
        radius: number;
        height: number;
        capSegments: number;
        radialSegments: number;
    };
}

declare class CircleGeometry extends BufferGeometry {
    static fromJSON(data: any): CircleGeometry;
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);
    parameters: {
        radius: number;
        segments: number;
        thetaStart: number;
        thetaLength: number;
    };
    copy(source: any): this;
}

declare class CylinderGeometry extends BufferGeometry {
    static fromJSON(data: any): CylinderGeometry;
    constructor(radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);
    parameters: {
        radiusTop: number;
        radiusBottom: number;
        height: number;
        radialSegments: number;
        heightSegments: number;
        openEnded: boolean;
        thetaStart: number;
        thetaLength: number;
    };
    copy(source: any): this;
}

declare class ConeGeometry extends CylinderGeometry {
    static fromJSON(data: any): ConeGeometry;
    constructor(radius?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);
    parameters: {
        radius: number;
        height: number;
        radialSegments: number;
        heightSegments: number;
        openEnded: boolean;
        thetaStart: number;
        thetaLength: number;
    };
}

declare class PolyhedronGeometry extends BufferGeometry {
    static fromJSON(data: any): PolyhedronGeometry;
    constructor(vertices?: any[], indices?: any[], radius?: number, detail?: number);
    parameters: {
        vertices: any[];
        indices: any[];
        radius: number;
        detail: number;
    };
    copy(source: any): this;
}

declare class DodecahedronGeometry extends PolyhedronGeometry {
    static fromJSON(data: any): DodecahedronGeometry;
    constructor(radius?: number, detail?: number);
    parameters: {
        radius: number;
        detail: number;
    };
}

declare class EdgesGeometry extends BufferGeometry {
    constructor(geometry?: any, thresholdAngle?: number);
    parameters: {
        geometry: any;
        thresholdAngle: number;
    };
    copy(source: any): this;
}

/**
 * Extensible curve object.
 *
 * Some common of curve methods:
 * .getPoint( t, optionalTarget ), .getTangent( t, optionalTarget )
 * .getPointAt( u, optionalTarget ), .getTangentAt( u, optionalTarget )
 * .getPoints(), .getSpacedPoints()
 * .getLength()
 * .updateArcLengths()
 *
 * This following curves inherit from THREE.Curve:
 *
 * -- 2D curves --
 * THREE.ArcCurve
 * THREE.CubicBezierCurve
 * THREE.EllipseCurve
 * THREE.LineCurve
 * THREE.QuadraticBezierCurve
 * THREE.SplineCurve
 *
 * -- 3D curves --
 * THREE.CatmullRomCurve3
 * THREE.CubicBezierCurve3
 * THREE.LineCurve3
 * THREE.QuadraticBezierCurve3
 *
 * A series of curves can be represented as a THREE.CurvePath.
 *
 **/
declare class Curve {
    type: string;
    arcLengthDivisions: number;
    getPoint(): any;
    getPointAt(u: any, optionalTarget: any): any;
    getPoints(divisions?: number): any[];
    getSpacedPoints(divisions?: number): any[];
    getLength(): number;
    getLengths(divisions?: number): number[];
    needsUpdate: boolean;
    cacheArcLengths: number[];
    updateArcLengths(): void;
    getUtoTmapping(u: any, distance: any): number;
    getTangent(t: any, optionalTarget: any): any;
    getTangentAt(u: any, optionalTarget: any): any;
    computeFrenetFrames(segments: any, closed: any): {
        tangents: any[];
        normals: any[];
        binormals: any[];
    };
    clone(): any;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}

/**************************************************************
 *	Curved Path - a curve path is simply a array of connected
 *  curves, but retains the api of a curve
 **************************************************************/
declare class CurvePath extends Curve {
    curves: any[];
    autoClose: boolean;
    add(curve: any): void;
    closePath(): void;
    getPoint(t: any, optionalTarget: any): any;
    cacheLengths: number[];
    getCurveLengths(): number[];
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class Path extends CurvePath {
    constructor(points: any);
    currentPoint: Vector2;
    setFromPoints(points: any): this;
    moveTo(x: any, y: any): this;
    lineTo(x: any, y: any): this;
    quadraticCurveTo(aCPx: any, aCPy: any, aX: any, aY: any): this;
    bezierCurveTo(aCP1x: any, aCP1y: any, aCP2x: any, aCP2y: any, aX: any, aY: any): this;
    splineThru(pts: any): this;
    arc(aX: any, aY: any, aRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any): this;
    absarc(aX: any, aY: any, aRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any): this;
    ellipse(aX: any, aY: any, xRadius: any, yRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any, aRotation: any): this;
    absellipse(aX: any, aY: any, xRadius: any, yRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any, aRotation: any): this;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class Shape extends Path {
    uuid: string;
    holes: any[];
    getPointsHoles(divisions: any): any[];
    extractPoints(divisions: any): {
        shape: any[];
        holes: any[];
    };
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class ExtrudeGeometry extends BufferGeometry {
    static fromJSON(data: any, shapes: any): ExtrudeGeometry;
    constructor(shapes?: Shape, options?: {});
    parameters: {
        shapes: Shape;
        options: {};
    };
    copy(source: any): this;
    toJSON(): any;
}

declare class IcosahedronGeometry extends PolyhedronGeometry {
    static fromJSON(data: any): IcosahedronGeometry;
    constructor(radius?: number, detail?: number);
    parameters: {
        radius: number;
        detail: number;
    };
}

declare class OctahedronGeometry extends PolyhedronGeometry {
    static fromJSON(data: any): OctahedronGeometry;
    constructor(radius?: number, detail?: number);
    parameters: {
        radius: number;
        detail: number;
    };
}

declare class PlaneGeometry extends BufferGeometry {
    static fromJSON(data: any): PlaneGeometry;
    constructor(width?: number, height?: number, widthSegments?: number, heightSegments?: number);
    parameters: {
        width: number;
        height: number;
        widthSegments: number;
        heightSegments: number;
    };
    copy(source: any): this;
}

declare class RingGeometry extends BufferGeometry {
    static fromJSON(data: any): RingGeometry;
    constructor(innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number);
    parameters: {
        innerRadius: number;
        outerRadius: number;
        thetaSegments: number;
        phiSegments: number;
        thetaStart: number;
        thetaLength: number;
    };
    copy(source: any): this;
}

declare class ShapeGeometry extends BufferGeometry {
    static fromJSON(data: any, shapes: any): ShapeGeometry;
    constructor(shapes?: Shape, curveSegments?: number);
    parameters: {
        shapes: Shape;
        curveSegments: number;
    };
    copy(source: any): this;
    toJSON(): any;
}

declare class SphereGeometry extends BufferGeometry {
    static fromJSON(data: any): SphereGeometry;
    constructor(radius?: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number);
    parameters: {
        radius: number;
        widthSegments: number;
        heightSegments: number;
        phiStart: number;
        phiLength: number;
        thetaStart: number;
        thetaLength: number;
    };
    copy(source: any): this;
}

declare class TetrahedronGeometry extends PolyhedronGeometry {
    static fromJSON(data: any): TetrahedronGeometry;
    constructor(radius?: number, detail?: number);
    parameters: {
        radius: number;
        detail: number;
    };
}

declare class TorusGeometry extends BufferGeometry {
    static fromJSON(data: any): TorusGeometry;
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);
    parameters: {
        radius: number;
        tube: number;
        radialSegments: number;
        tubularSegments: number;
        arc: number;
    };
    copy(source: any): this;
}

declare class TorusKnotGeometry extends BufferGeometry {
    static fromJSON(data: any): TorusKnotGeometry;
    constructor(radius?: number, tube?: number, tubularSegments?: number, radialSegments?: number, p?: number, q?: number);
    parameters: {
        radius: number;
        tube: number;
        tubularSegments: number;
        radialSegments: number;
        p: number;
        q: number;
    };
    copy(source: any): this;
}

declare class EllipseCurve extends Curve {
    constructor(aX?: number, aY?: number, xRadius?: number, yRadius?: number, aStartAngle?: number, aEndAngle?: number, aClockwise?: boolean, aRotation?: number);
    isEllipseCurve: boolean;
    aX: number;
    aY: number;
    xRadius: number;
    yRadius: number;
    aStartAngle: number;
    aEndAngle: number;
    aClockwise: boolean;
    aRotation: number;
    getPoint(t: any, optionalTarget: any): any;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class ArcCurve extends EllipseCurve {
    constructor(aX: any, aY: any, aRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any);
    isArcCurve: boolean;
}

declare class CatmullRomCurve3 extends Curve {
    constructor(points?: any[], closed?: boolean, curveType?: string, tension?: number);
    isCatmullRomCurve3: boolean;
    points: any[];
    closed: boolean;
    curveType: string;
    tension: number;
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class CubicBezierCurve extends Curve {
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2, v3?: Vector2);
    isCubicBezierCurve: boolean;
    v0: Vector2;
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class CubicBezierCurve3 extends Curve {
    constructor(v0?: Vector3, v1?: Vector3, v2?: Vector3, v3?: Vector3);
    isCubicBezierCurve3: boolean;
    v0: Vector3;
    v1: Vector3;
    v2: Vector3;
    v3: Vector3;
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class LineCurve extends Curve {
    constructor(v1?: Vector2, v2?: Vector2);
    isLineCurve: boolean;
    v1: Vector2;
    v2: Vector2;
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    getPointAt(u: any, optionalTarget: any): Vector2;
    getTangent(t: any, optionalTarget?: Vector2): Vector2;
    getTangentAt(u: any, optionalTarget: any): Vector2;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class LineCurve3 extends Curve {
    constructor(v1?: Vector3, v2?: Vector3);
    isLineCurve3: boolean;
    v1: Vector3;
    v2: Vector3;
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    getPointAt(u: any, optionalTarget: any): Vector3;
    getTangent(t: any, optionalTarget?: Vector3): Vector3;
    getTangentAt(u: any, optionalTarget: any): Vector3;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class QuadraticBezierCurve extends Curve {
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2);
    isQuadraticBezierCurve: boolean;
    v0: Vector2;
    v1: Vector2;
    v2: Vector2;
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class QuadraticBezierCurve3 extends Curve {
    constructor(v0?: Vector3, v1?: Vector3, v2?: Vector3);
    isQuadraticBezierCurve3: boolean;
    v0: Vector3;
    v1: Vector3;
    v2: Vector3;
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class SplineCurve extends Curve {
    constructor(points?: any[]);
    isSplineCurve: boolean;
    points: any[];
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class TubeGeometry extends BufferGeometry {
    static fromJSON(data: any): TubeGeometry;
    constructor(path?: QuadraticBezierCurve3, tubularSegments?: number, radius?: number, radialSegments?: number, closed?: boolean);
    parameters: {
        path: QuadraticBezierCurve3;
        tubularSegments: number;
        radius: number;
        radialSegments: number;
        closed: boolean;
    };
    tangents: any[];
    normals: any[];
    binormals: any[];
    copy(source: any): this;
}

declare class WireframeGeometry extends BufferGeometry {
    constructor(geometry?: any);
    parameters: {
        geometry: any;
    };
    copy(source: any): this;
}

declare class ShadowMaterial extends Material {
    constructor(parameters: any);
    isShadowMaterial: boolean;
    color: Color;
    fog: boolean;
    copy(source: any): this;
}

declare class SpriteMaterial extends Material {
    constructor(parameters: any);
    isSpriteMaterial: boolean;
    color: Color;
    map: any;
    alphaMap: any;
    rotation: number;
    sizeAttenuation: boolean;
    fog: boolean;
    copy(source: any): this;
}

declare class ShaderMaterial extends Material {
    constructor(parameters: any);
    isShaderMaterial: boolean;
    defines: {};
    uniforms: {};
    uniformsGroups: any[];
    vertexShader: string;
    fragmentShader: string;
    linewidth: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    fog: boolean;
    lights: boolean;
    clipping: boolean;
    extensions: {
        derivatives: boolean;
        fragDepth: boolean;
        drawBuffers: boolean;
        shaderTextureLOD: boolean;
    };
    defaultAttributeValues: {
        color: number[];
        uv: number[];
        uv1: number[];
    };
    index0AttributeName: any;
    uniformsNeedUpdate: boolean;
    glslVersion: any;
    copy(source: any): this;
}

declare class RawShaderMaterial extends ShaderMaterial {
    isRawShaderMaterial: boolean;
}

declare class MeshStandardMaterial extends Material {
    constructor(parameters: any);
    isMeshStandardMaterial: boolean;
    defines: {
        STANDARD: string;
    };
    color: Color;
    roughness: number;
    metalness: number;
    map: any;
    lightMap: any;
    lightMapIntensity: number;
    aoMap: any;
    aoMapIntensity: number;
    emissive: Color;
    emissiveIntensity: number;
    emissiveMap: any;
    bumpMap: any;
    bumpScale: number;
    normalMap: any;
    normalMapType: number;
    normalScale: Vector2;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    roughnessMap: any;
    metalnessMap: any;
    alphaMap: any;
    envMap: any;
    envMapIntensity: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    fog: boolean;
    copy(source: any): this;
}

declare class MeshPhysicalMaterial extends MeshStandardMaterial {
    isMeshPhysicalMaterial: boolean;
    defines: {
        STANDARD: string;
        PHYSICAL: string;
    };
    anisotropyRotation: number;
    anisotropyMap: any;
    clearcoatMap: any;
    clearcoatRoughness: number;
    clearcoatRoughnessMap: any;
    clearcoatNormalScale: Vector2;
    clearcoatNormalMap: any;
    ior: number;
    iridescenceMap: any;
    iridescenceIOR: number;
    iridescenceThicknessRange: number[];
    iridescenceThicknessMap: any;
    sheenColor: Color;
    sheenColorMap: any;
    sheenRoughness: number;
    sheenRoughnessMap: any;
    transmissionMap: any;
    thickness: number;
    thicknessMap: any;
    attenuationDistance: number;
    attenuationColor: Color;
    specularIntensity: number;
    specularIntensityMap: any;
    specularColor: Color;
    specularColorMap: any;
    _anisotropy: number;
    _clearcoat: number;
    _iridescence: number;
    _sheen: number;
    _transmission: number;
    set anisotropy(arg: number);
    get anisotropy(): number;
    set clearcoat(arg: number);
    get clearcoat(): number;
    set iridescence(arg: number);
    get iridescence(): number;
    set sheen(arg: number);
    get sheen(): number;
    set transmission(arg: number);
    get transmission(): number;
    copy(source: any): this;
}

declare class MeshPhongMaterial extends Material {
    constructor(parameters: any);
    isMeshPhongMaterial: boolean;
    color: Color;
    specular: Color;
    shininess: number;
    map: any;
    lightMap: any;
    lightMapIntensity: number;
    aoMap: any;
    aoMapIntensity: number;
    emissive: Color;
    emissiveIntensity: number;
    emissiveMap: any;
    bumpMap: any;
    bumpScale: number;
    normalMap: any;
    normalMapType: number;
    normalScale: Vector2;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    specularMap: any;
    alphaMap: any;
    envMap: any;
    combine: number;
    reflectivity: number;
    refractionRatio: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    fog: boolean;
    copy(source: any): this;
}

declare class MeshToonMaterial extends Material {
    constructor(parameters: any);
    isMeshToonMaterial: boolean;
    defines: {
        TOON: string;
    };
    color: Color;
    map: any;
    gradientMap: any;
    lightMap: any;
    lightMapIntensity: number;
    aoMap: any;
    aoMapIntensity: number;
    emissive: Color;
    emissiveIntensity: number;
    emissiveMap: any;
    bumpMap: any;
    bumpScale: number;
    normalMap: any;
    normalMapType: number;
    normalScale: Vector2;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    alphaMap: any;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    fog: boolean;
    copy(source: any): this;
}

declare class MeshNormalMaterial extends Material {
    constructor(parameters: any);
    isMeshNormalMaterial: boolean;
    bumpMap: any;
    bumpScale: number;
    normalMap: any;
    normalMapType: number;
    normalScale: Vector2;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    flatShading: boolean;
    copy(source: any): this;
}

declare class MeshLambertMaterial extends Material {
    constructor(parameters: any);
    isMeshLambertMaterial: boolean;
    color: Color;
    map: any;
    lightMap: any;
    lightMapIntensity: number;
    aoMap: any;
    aoMapIntensity: number;
    emissive: Color;
    emissiveIntensity: number;
    emissiveMap: any;
    bumpMap: any;
    bumpScale: number;
    normalMap: any;
    normalMapType: number;
    normalScale: Vector2;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    specularMap: any;
    alphaMap: any;
    envMap: any;
    combine: number;
    reflectivity: number;
    refractionRatio: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    fog: boolean;
    copy(source: any): this;
}

declare class MeshDepthMaterial extends Material {
    constructor(parameters: any);
    isMeshDepthMaterial: boolean;
    depthPacking: number;
    map: any;
    alphaMap: any;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    copy(source: any): this;
}

declare class MeshDistanceMaterial extends Material {
    constructor(parameters: any);
    isMeshDistanceMaterial: boolean;
    map: any;
    alphaMap: any;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    copy(source: any): this;
}

declare class MeshMatcapMaterial extends Material {
    constructor(parameters: any);
    isMeshMatcapMaterial: boolean;
    defines: {
        MATCAP: string;
    };
    color: Color;
    matcap: any;
    map: any;
    bumpMap: any;
    bumpScale: number;
    normalMap: any;
    normalMapType: number;
    normalScale: Vector2;
    displacementMap: any;
    displacementScale: number;
    displacementBias: number;
    alphaMap: any;
    flatShading: boolean;
    fog: boolean;
    copy(source: any): this;
}

declare class LineDashedMaterial extends LineBasicMaterial {
    isLineDashedMaterial: boolean;
    scale: number;
    dashSize: number;
    gapSize: number;
    copy(source: any): this;
}

declare class Loader {
    constructor(manager: any);
    manager: any;
    crossOrigin: string;
    withCredentials: boolean;
    path: string;
    resourcePath: string;
    requestHeader: {};
    load(): void;
    loadAsync(url: any, onProgress: any): Promise<any>;
    parse(): void;
    setCrossOrigin(crossOrigin: any): this;
    setWithCredentials(value: any): this;
    setPath(path: any): this;
    setResourcePath(resourcePath: any): this;
    setRequestHeader(requestHeader: any): this;
}
declare namespace Loader {
    let DEFAULT_MATERIAL_NAME: string;
}

declare class AnimationClip {
    static parse(json: any): AnimationClip;
    static toJSON(clip: any): {
        name: any;
        duration: any;
        tracks: any[];
        uuid: any;
        blendMode: any;
    };
    static CreateFromMorphTargetSequence(name: any, morphTargetSequence: any, fps: any, noLoop: any): AnimationClip;
    static findByName(objectOrClipArray: any, name: any): any;
    static CreateClipsFromMorphTargetSequences(morphTargets: any, fps: any, noLoop: any): AnimationClip[];
    static parseAnimation(animation: any, bones: any): AnimationClip;
    constructor(name: any, duration: number, tracks: any, blendMode?: number);
    name: any;
    tracks: any;
    duration: number;
    blendMode: number;
    uuid: string;
    resetDuration(): this;
    trim(): this;
    validate(): boolean;
    optimize(): this;
    clone(): any;
    toJSON(): any;
}

declare class AnimationLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    parse(json: any): AnimationClip[];
}

/**
 * Abstract Base class to block based textures loader (dds, pvr, ...)
 *
 * Sub classes have to implement the parse() method which will be used in load().
 */
declare class CompressedTextureLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): CompressedTexture;
}

declare class CubeTextureLoader extends Loader {
    load(urls: any, onLoad: any, onProgress: any, onError: any): CubeTexture;
}

/**
 * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
 *
 * Sub classes have to implement the parse() method which will be used in load().
 */
declare class DataTextureLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): DataTexture;
}

declare class TextureLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): Texture;
}

declare class ObjectLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    loadAsync(url: any, onProgress: any): Promise<Object3D | Mesh | Sprite | LOD | Line | Points>;
    parse(json: any, onLoad: any): Object3D | Mesh | Sprite | LOD | Line | Points;
    parseAsync(json: any): Promise<Object3D | Mesh | Sprite | LOD | Line | Points>;
    parseShapes(json: any): {};
    parseSkeletons(json: any, object: any): {};
    parseGeometries(json: any, shapes: any): {};
    parseMaterials(json: any, textures: any): {};
    parseAnimations(json: any): {};
    parseImages(json: any, onLoad: any): {};
    parseImagesAsync(json: any): Promise<{}>;
    parseTextures(json: any, images: any): {};
    parseObject(data: any, geometries: any, materials: any, textures: any, animations: any): Object3D | Mesh | Sprite | LOD | Line | Points;
    bindSkeletons(object: any, skeletons: any): void;
}

declare class MaterialLoader extends Loader {
    static createMaterialFromType(type: any): any;
    textures: {};
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    parse(json: any): any;
    setTextures(value: any): this;
}

declare class BufferGeometryLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    parse(json: any): BufferGeometry;
}

declare class ImageLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): any;
}

declare class ImageBitmapLoader extends Loader {
    isImageBitmapLoader: boolean;
    options: {
        premultiplyAlpha: string;
    };
    setOptions(options: any): this;
    load(url: any, onLoad: any, onProgress: any, onError: any): any;
}

declare class FileLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): any;
    setResponseType(value: any): this;
    responseType: any;
    setMimeType(value: any): this;
    mimeType: any;
}

declare class LoaderUtils {
    static decodeText(array: any): any;
    static extractUrlBase(url: any): any;
    static resolveURL(url: any, path: any): string;
}

declare namespace Cache {
    let enabled: boolean;
    let files: {};
    function add(key: any, file: any): void;
    function get(key: any): any;
    function remove(key: any): void;
    let clear: () => void;
}

declare class AudioLoader extends Loader {
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
}

declare class Light extends Object3D {
    constructor(color: any, intensity?: number);
    isLight: boolean;
    color: Color;
    intensity: number;
    dispose(): void;
    copy(source: any, recursive: any): this;
}

declare class Plane {
    constructor(normal?: Vector3, constant?: number);
    isPlane: boolean;
    normal: Vector3;
    constant: number;
    set(normal: any, constant: any): this;
    setComponents(x: any, y: any, z: any, w: any): this;
    setFromNormalAndCoplanarPoint(normal: any, point: any): this;
    setFromCoplanarPoints(a: any, b: any, c: any): this;
    copy(plane: any): this;
    normalize(): this;
    negate(): this;
    distanceToPoint(point: any): number;
    distanceToSphere(sphere: any): number;
    projectPoint(point: any, target: any): any;
    intersectLine(line: any, target: any): any;
    intersectsLine(line: any): boolean;
    intersectsBox(box: any): any;
    intersectsSphere(sphere: any): any;
    coplanarPoint(target: any): any;
    applyMatrix4(matrix: any, optionalNormalMatrix: any): this;
    translate(offset: any): this;
    equals(plane: any): boolean;
    clone(): any;
}

declare class Frustum {
    constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);
    planes: Plane[];
    set(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): this;
    copy(frustum: any): this;
    setFromProjectionMatrix(m: any, coordinateSystem?: number): this;
    intersectsObject(object: any): boolean;
    intersectsSprite(sprite: any): boolean;
    intersectsSphere(sphere: any): boolean;
    intersectsBox(box: any): boolean;
    containsPoint(point: any): boolean;
    clone(): any;
}

declare class LightShadow {
    constructor(camera: any);
    camera: any;
    bias: number;
    normalBias: number;
    radius: number;
    blurSamples: number;
    mapSize: Vector2;
    map: any;
    mapPass: any;
    matrix: Matrix4;
    autoUpdate: boolean;
    needsUpdate: boolean;
    _frustum: Frustum;
    _frameExtents: Vector2;
    _viewportCount: number;
    _viewports: Vector4[];
    getViewportCount(): number;
    getFrustum(): Frustum;
    updateMatrices(light: any): void;
    getViewport(viewportIndex: any): Vector4;
    getFrameExtents(): Vector2;
    dispose(): void;
    copy(source: any): this;
    clone(): any;
    toJSON(): {
        bias: number;
        normalBias: number;
        radius: number;
        mapSize: any[];
        camera: any;
    };
}

declare class SpotLightShadow extends LightShadow {
    constructor();
    isSpotLightShadow: boolean;
    focus: number;
    copy(source: any): this;
}

declare class SpotLight extends Light {
    constructor(color: any, intensity: any, distance?: number, angle?: number, penumbra?: number, decay?: number);
    isSpotLight: boolean;
    target: Object3D;
    distance: number;
    angle: number;
    penumbra: number;
    decay: number;
    map: any;
    shadow: SpotLightShadow;
    set power(arg: number);
    get power(): number;
    copy(source: any, recursive: any): this;
}

declare class PointLightShadow extends LightShadow {
    constructor();
    isPointLightShadow: boolean;
    _cubeDirections: Vector3[];
    _cubeUps: Vector3[];
    updateMatrices(light: any, viewportIndex?: number): void;
}

declare class PointLight extends Light {
    constructor(color: any, intensity: any, distance?: number, decay?: number);
    isPointLight: boolean;
    distance: number;
    decay: number;
    shadow: PointLightShadow;
    set power(arg: number);
    get power(): number;
    copy(source: any, recursive: any): this;
}

declare class RectAreaLight extends Light {
    constructor(color: any, intensity: any, width?: number, height?: number);
    isRectAreaLight: boolean;
    width: number;
    height: number;
    set power(arg: number);
    get power(): number;
    copy(source: any): this;
}

declare class HemisphereLight extends Light {
    constructor(skyColor: any, groundColor: any, intensity: any);
    isHemisphereLight: boolean;
    groundColor: Color;
    copy(source: any, recursive: any): this;
}

/**
 * Primary reference:
 *   https://graphics.stanford.edu/papers/envmap/envmap.pdf
 *
 * Secondary reference:
 *   https://www.ppsloan.org/publications/StupidSH36.pdf
 */
declare class SphericalHarmonics3 {
    static getBasisAt(normal: any, shBasis: any): void;
    isSphericalHarmonics3: boolean;
    coefficients: Vector3[];
    set(coefficients: any): this;
    zero(): this;
    getAt(normal: any, target: any): any;
    getIrradianceAt(normal: any, target: any): any;
    add(sh: any): this;
    addScaledSH(sh: any, s: any): this;
    scale(s: any): this;
    lerp(sh: any, alpha: any): this;
    equals(sh: any): boolean;
    copy(sh: any): this;
    clone(): any;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
}

declare class LightProbe extends Light {
    constructor(sh?: SphericalHarmonics3, intensity?: number);
    isLightProbe: boolean;
    sh: SphericalHarmonics3;
    copy(source: any): this;
    fromJSON(json: any): this;
}

declare class HemisphereLightProbe extends LightProbe {
    constructor(skyColor: any, groundColor: any, intensity?: number);
    isHemisphereLightProbe: boolean;
}

declare class DirectionalLightShadow extends LightShadow {
    constructor();
    isDirectionalLightShadow: boolean;
}

declare class DirectionalLight extends Light {
    constructor(color: any, intensity: any);
    isDirectionalLight: boolean;
    target: Object3D;
    shadow: DirectionalLightShadow;
    copy(source: any): this;
}

declare class AmbientLight extends Light {
    constructor(color: any, intensity: any);
    isAmbientLight: boolean;
}

declare class AmbientLightProbe extends LightProbe {
    constructor(color: any, intensity?: number);
    isAmbientLightProbe: boolean;
}

declare class Camera extends Object3D {
    isCamera: boolean;
    matrixWorldInverse: Matrix4;
    projectionMatrix: Matrix4;
    projectionMatrixInverse: Matrix4;
    coordinateSystem: number;
    copy(source: any, recursive: any): this;
    clone(): any;
}

declare class PerspectiveCamera extends Camera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    isPerspectiveCamera: boolean;
    fov: number;
    zoom: number;
    near: number;
    far: number;
    focus: number;
    aspect: number;
    view: any;
    filmGauge: number;
    filmOffset: number;
    copy(source: any, recursive: any): this;
    /**
     * Sets the FOV by focal length in respect to the current .filmGauge.
     *
     * The default film gauge is 35, so that the focal length can be specified for
     * a 35mm (full frame) camera.
     *
     * Values for focal length and film gauge must have the same unit.
     */
    setFocalLength(focalLength: any): void;
    /**
     * Calculates the focal length from the current .fov and .filmGauge.
     */
    getFocalLength(): number;
    getEffectiveFOV(): number;
    getFilmWidth(): number;
    getFilmHeight(): number;
    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or
     * multi-monitor/multi-machine setups.
     *
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
     * the monitors are in grid like this
     *
     *   +---+---+---+
     *   | A | B | C |
     *   +---+---+---+
     *   | D | E | F |
     *   +---+---+---+
     *
     * then for each monitor you would call it like this
     *
     *   const w = 1920;
     *   const h = 1080;
     *   const fullWidth = w * 3;
     *   const fullHeight = h * 2;
     *
     *   --A--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     *   --B--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     *   --C--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     *   --D--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     *   --E--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     *   --F--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
     *
     *   Note there is no reason monitors have to be the same size or in a grid.
     */
    setViewOffset(fullWidth: any, fullHeight: any, x: any, y: any, width: any, height: any): void;
    clearViewOffset(): void;
    updateProjectionMatrix(): void;
}

declare class StereoCamera {
    type: string;
    aspect: number;
    eyeSep: number;
    cameraL: PerspectiveCamera;
    cameraR: PerspectiveCamera;
    _cache: {
        focus: any;
        fov: any;
        aspect: any;
        near: any;
        far: any;
        zoom: any;
        eyeSep: any;
    };
    update(camera: any): void;
}

declare class OrthographicCamera extends Camera {
    constructor(left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number);
    isOrthographicCamera: boolean;
    zoom: number;
    view: any;
    left: number;
    right: number;
    top: number;
    bottom: number;
    near: number;
    far: number;
    copy(source: any, recursive: any): this;
    setViewOffset(fullWidth: any, fullHeight: any, x: any, y: any, width: any, height: any): void;
    clearViewOffset(): void;
    updateProjectionMatrix(): void;
}

declare class CubeCamera extends Object3D {
    constructor(near: any, far: any, renderTarget: any);
    renderTarget: any;
    coordinateSystem: any;
    updateCoordinateSystem(): void;
    update(renderer: any, scene: any): void;
}

declare class ArrayCamera extends PerspectiveCamera {
    constructor(array?: any[]);
    isArrayCamera: boolean;
    cameras: any[];
}

declare class Clock {
    constructor(autoStart?: boolean);
    autoStart: boolean;
    startTime: number;
    oldTime: number;
    elapsedTime: number;
    running: boolean;
    start(): void;
    stop(): void;
    getElapsedTime(): number;
    getDelta(): number;
}

declare class AudioListener extends Object3D {
    context: any;
    gain: any;
    filter: any;
    timeDelta: number;
    _clock: Clock;
    getInput(): any;
    removeFilter(): this;
    getFilter(): any;
    setFilter(value: any): this;
    getMasterVolume(): any;
    setMasterVolume(value: any): this;
}

declare class Audio extends Object3D {
    constructor(listener: any);
    listener: any;
    context: any;
    gain: any;
    autoplay: boolean;
    buffer: any;
    detune: number;
    loop: boolean;
    loopStart: number;
    loopEnd: number;
    offset: number;
    duration: any;
    playbackRate: number;
    isPlaying: boolean;
    hasPlaybackControl: boolean;
    source: any;
    sourceType: string;
    _startedAt: number;
    _progress: number;
    _connected: boolean;
    filters: any[];
    getOutput(): any;
    setNodeSource(audioNode: any): this;
    setMediaElementSource(mediaElement: any): this;
    setMediaStreamSource(mediaStream: any): this;
    setBuffer(audioBuffer: any): this;
    play(delay?: number): this;
    pause(): this;
    stop(): this;
    connect(): this;
    disconnect(): this;
    getFilters(): any[];
    setFilters(value: any): this;
    setDetune(value: any): this;
    getDetune(): number;
    getFilter(): any;
    setFilter(filter: any): this;
    setPlaybackRate(value: any): this;
    getPlaybackRate(): number;
    onEnded(): void;
    getLoop(): boolean;
    setLoop(value: any): this;
    setLoopStart(value: any): this;
    setLoopEnd(value: any): this;
    getVolume(): any;
    setVolume(value: any): this;
}

declare class PositionalAudio extends Audio {
    panner: any;
    connect(): void;
    disconnect(): void;
    getRefDistance(): any;
    setRefDistance(value: any): this;
    getRolloffFactor(): any;
    setRolloffFactor(value: any): this;
    getDistanceModel(): any;
    setDistanceModel(value: any): this;
    getMaxDistance(): any;
    setMaxDistance(value: any): this;
    setDirectionalCone(coneInnerAngle: any, coneOuterAngle: any, coneOuterGain: any): this;
}

declare class AudioContext {
    static getContext(): any;
    static setContext(value: any): void;
}

declare class AudioAnalyser {
    constructor(audio: any, fftSize?: number);
    analyser: any;
    data: Uint8Array;
    getFrequencyData(): Uint8Array;
    getAverageFrequency(): number;
}

/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 * 		http://www.oodesign.com/template-method-pattern.html
 *
 */
declare class Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any);
    parameterPositions: any;
    _cachedIndex: number;
    resultBuffer: any;
    sampleValues: any;
    valueSize: any;
    settings: any;
    DefaultSettings_: {};
    evaluate(t: any): any;
    getSettings_(): any;
    copySampleValue_(index: any): any;
    interpolate_(): void;
    intervalChanged_(): void;
}

/**
 *
 * Interpolant that evaluates to the sample value at the position preceding
 * the parameter.
 */
declare class DiscreteInterpolant extends Interpolant {
    interpolate_(i1: any): any;
}

declare class LinearInterpolant extends Interpolant {
    interpolate_(i1: any, t0: any, t: any, t1: any): any;
}

/**
 * Fast and simple cubic spline interpolant.
 *
 * It was derived from a Hermitian construction setting the first derivative
 * at each sample position to the linear slope between neighboring positions
 * over their parameter interval.
 */
declare class CubicInterpolant extends Interpolant {
    _weightPrev: number;
    _offsetPrev: number;
    _weightNext: number;
    _offsetNext: number;
    DefaultSettings_: {
        endingStart: number;
        endingEnd: number;
    };
    intervalChanged_(i1: any, t0: any, t1: any): void;
    interpolate_(i1: any, t0: any, t: any, t1: any): any;
}

declare class KeyframeTrack {
    static toJSON(track: any): any;
    constructor(name: any, times: any, values: any, interpolation: any);
    name: any;
    times: any;
    values: any;
    InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
    InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
    InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;
    setInterpolation(interpolation: any): this;
    createInterpolant: ((result: any) => LinearInterpolant) | ((result: any) => CubicInterpolant);
    getInterpolation(): 2300 | 2301 | 2302;
    getValueSize(): number;
    shift(timeOffset: any): this;
    scale(timeScale: any): this;
    trim(startTime: any, endTime: any): this;
    validate(): boolean;
    optimize(): this;
    clone(): any;
    TimeBufferType: Float32ArrayConstructor;
    ValueBufferType: Float32ArrayConstructor;
    DefaultInterpolation: number;
}

/**
 * A Track of vectored keyframe values.
 */
declare class VectorKeyframeTrack extends KeyframeTrack {
    ValueTypeName: string;
}

/**
 * A Track that interpolates Strings
 */
declare class StringKeyframeTrack extends KeyframeTrack {
    ValueTypeName: string;
    ValueBufferType: ArrayConstructor;
    InterpolantFactoryMethodLinear: any;
    InterpolantFactoryMethodSmooth: any;
}

/**
 * A Track of quaternion keyframe values.
 */
declare class QuaternionKeyframeTrack extends KeyframeTrack {
    ValueTypeName: string;
    InterpolantFactoryMethodSmooth: any;
}

/**
 * A Track of numeric keyframe values.
 */
declare class NumberKeyframeTrack extends KeyframeTrack {
    ValueTypeName: string;
}

/**
 * A Track of keyframe values that represent color.
 */
declare class ColorKeyframeTrack extends KeyframeTrack {
    ValueTypeName: string;
}

/**
 * A Track of Boolean keyframe values.
 */
declare class BooleanKeyframeTrack extends KeyframeTrack {
    ValueTypeName: string;
    ValueBufferType: ArrayConstructor;
    InterpolantFactoryMethodLinear: any;
    InterpolantFactoryMethodSmooth: any;
}

declare class PropertyMixer {
    constructor(binding: any, typeName: any, valueSize: any);
    binding: any;
    valueSize: any;
    buffer: any[] | Float64Array;
    _workIndex: number;
    _mixBufferRegion: (buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any) => void;
    _mixBufferRegionAdditive: (buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any) => void;
    _setIdentity: () => void;
    _origIndex: number;
    _addIndex: number;
    cumulativeWeight: number;
    cumulativeWeightAdditive: number;
    useCount: number;
    referenceCount: number;
    accumulate(accuIndex: any, weight: any): void;
    accumulateAdditive(weight: any): void;
    apply(accuIndex: any): void;
    saveOriginalState(): void;
    restoreOriginalState(): void;
    _setAdditiveIdentityNumeric(): void;
    _setAdditiveIdentityQuaternion(): void;
    _setAdditiveIdentityOther(): void;
    _select(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
    _slerp(buffer: any, dstOffset: any, srcOffset: any, t: any): void;
    _slerpAdditive(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
    _lerp(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
    _lerpAdditive(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
}

declare class PropertyBinding {
    static create(root: any, path: any, parsedPath: any): Composite | PropertyBinding;
    /**
     * Replaces spaces with underscores and removes unsupported characters from
     * node names, to ensure compatibility with parseTrackName().
     *
     * @param {string} name Node name to be sanitized.
     * @return {string}
     */
    static sanitizeNodeName(name: string): string;
    static parseTrackName(trackName: any): {
        nodeName: string;
        objectName: string;
        objectIndex: string;
        propertyName: string;
        propertyIndex: string;
    };
    static findNode(root: any, nodeName: any): any;
    constructor(rootNode: any, path: any, parsedPath: any);
    path: any;
    parsedPath: any;
    node: any;
    rootNode: any;
    getValue: (targetArray: any, offset: any) => void;
    setValue: (sourceArray: any, offset: any) => void;
    _getValue_unavailable(): void;
    _setValue_unavailable(): void;
    _getValue_direct(buffer: any, offset: any): void;
    _getValue_array(buffer: any, offset: any): void;
    _getValue_arrayElement(buffer: any, offset: any): void;
    _getValue_toArray(buffer: any, offset: any): void;
    _setValue_direct(buffer: any, offset: any): void;
    _setValue_direct_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_direct_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _setValue_array(buffer: any, offset: any): void;
    _setValue_array_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_array_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _setValue_arrayElement(buffer: any, offset: any): void;
    _setValue_arrayElement_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _setValue_fromArray(buffer: any, offset: any): void;
    _setValue_fromArray_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_fromArray_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _getValue_unbound(targetArray: any, offset: any): void;
    _setValue_unbound(sourceArray: any, offset: any): void;
    bind(): void;
    targetObject: any;
    resolvedProperty: any;
    propertyIndex: any;
    propertyName: any;
    unbind(): void;
    BindingType: {
        Direct: number;
        EntireArray: number;
        ArrayElement: number;
        HasFromToArray: number;
    };
    Versioning: {
        None: number;
        NeedsUpdate: number;
        MatrixWorldNeedsUpdate: number;
    };
    GetterByBindingType: ((buffer: any, offset: any) => void)[];
    SetterByBindingTypeAndVersioning: ((buffer: any, offset: any) => void)[][];
}
declare namespace PropertyBinding {
    export { Composite };
}
declare class Composite {
    constructor(targetGroup: any, path: any, optionalParsedPath: any);
    _targetGroup: any;
    _bindings: any;
    getValue(array: any, offset: any): void;
    setValue(array: any, offset: any): void;
    bind(): void;
    unbind(): void;
}

declare function arraySlice(array: any, from: any, to: any): any;
declare function convertArray(array: any, type: any, forceClone: any): any;
declare function isTypedArray(object: any): boolean;
declare function getKeyframeOrder(times: any): any[];
declare function sortedArray(values: any, stride: any, order: any): any;
declare function flattenJSON(jsonKeys: any, times: any, values: any, valuePropertyName: any): void;
declare function subclip(sourceClip: any, name: any, startFrame: any, endFrame: any, fps?: number): any;
declare function makeClipAdditive(targetClip: any, referenceFrame?: number, referenceClip?: any, fps?: number): any;
declare namespace AnimationUtils {
    export { arraySlice };
    export { convertArray };
    export { isTypedArray };
    export { getKeyframeOrder };
    export { sortedArray };
    export { flattenJSON };
    export { subclip };
    export { makeClipAdditive };
}

/**
 *
 * A group of objects that receives a shared animation state.
 *
 * Usage:
 *
 *  - Add objects you would otherwise pass as 'root' to the
 *    constructor or the .clipAction method of AnimationMixer.
 *
 *  - Instead pass this object as 'root'.
 *
 *  - You can also add and remove objects later when the mixer
 *    is running.
 *
 * Note:
 *
 *    Objects of this class appear as one object to the mixer,
 *    so cache control of the individual objects must be done
 *    on the group.
 *
 * Limitation:
 *
 *  - The animated properties must be compatible among the
 *    all objects in the group.
 *
 *  - A single property can either be controlled through a
 *    target group or directly, but not both.
 */
declare class AnimationObjectGroup {
    constructor(...args: any[]);
    isAnimationObjectGroup: boolean;
    uuid: string;
    _objects: any;
    nCachedObjects_: number;
    _indicesByUUID: {};
    _paths: any[];
    _parsedPaths: any[];
    _bindings: any[];
    _bindingsIndicesByPath: {};
    stats: {
        objects: {
            readonly total: any;
            readonly inUse: number;
        };
        readonly bindingsPerObject: number;
    };
    add(...args: any[]): void;
    remove(...args: any[]): void;
    uncache(...args: any[]): void;
    subscribe_(path: any, parsedPath: any): any;
    unsubscribe_(path: any): void;
}

declare class AnimationMixer extends EventDispatcher {
    constructor(root: any);
    _root: any;
    _accuIndex: number;
    time: number;
    timeScale: number;
    _bindAction(action: any, prototypeAction: any): void;
    _activateAction(action: any): void;
    _deactivateAction(action: any): void;
    _initMemoryManager(): void;
    _actions: any[];
    _nActiveActions: number;
    _actionsByClip: {};
    _bindings: any[];
    _nActiveBindings: number;
    _bindingsByRootAndName: {};
    _controlInterpolants: any[];
    _nActiveControlInterpolants: number;
    stats: {
        actions: {
            readonly total: number;
            readonly inUse: number;
        };
        bindings: {
            readonly total: number;
            readonly inUse: number;
        };
        controlInterpolants: {
            readonly total: number;
            readonly inUse: number;
        };
    };
    _isActiveAction(action: any): boolean;
    _addInactiveAction(action: any, clipUuid: any, rootUuid: any): void;
    _removeInactiveAction(action: any): void;
    _removeInactiveBindingsForAction(action: any): void;
    _lendAction(action: any): void;
    _takeBackAction(action: any): void;
    _addInactiveBinding(binding: any, rootUuid: any, trackName: any): void;
    _removeInactiveBinding(binding: any): void;
    _lendBinding(binding: any): void;
    _takeBackBinding(binding: any): void;
    _lendControlInterpolant(): any;
    _takeBackControlInterpolant(interpolant: any): void;
    clipAction(clip: any, optionalRoot: any, blendMode: any): any;
    existingAction(clip: any, optionalRoot: any): any;
    stopAllAction(): this;
    update(deltaTime: any): this;
    setTime(timeInSeconds: any): this;
    getRoot(): any;
    uncacheClip(clip: any): void;
    uncacheRoot(root: any): void;
    uncacheAction(clip: any, optionalRoot: any): void;
}

declare class AnimationAction {
    constructor(mixer: any, clip: any, localRoot?: any, blendMode?: any);
    _mixer: any;
    _clip: any;
    _localRoot: any;
    blendMode: any;
    _interpolantSettings: {
        endingStart: number;
        endingEnd: number;
    };
    _interpolants: any[];
    _propertyBindings: any[];
    _cacheIndex: any;
    _byClipCacheIndex: any;
    _timeScaleInterpolant: any;
    _weightInterpolant: any;
    loop: number;
    _loopCount: number;
    _startTime: any;
    time: number;
    timeScale: number;
    _effectiveTimeScale: number;
    weight: number;
    _effectiveWeight: number;
    repetitions: number;
    paused: boolean;
    enabled: boolean;
    clampWhenFinished: boolean;
    zeroSlopeAtStart: boolean;
    zeroSlopeAtEnd: boolean;
    play(): this;
    stop(): this;
    reset(): this;
    isRunning(): any;
    isScheduled(): any;
    startAt(time: any): this;
    setLoop(mode: any, repetitions: any): this;
    setEffectiveWeight(weight: any): this;
    getEffectiveWeight(): number;
    fadeIn(duration: any): this;
    fadeOut(duration: any): this;
    crossFadeFrom(fadeOutAction: any, duration: any, warp: any): this;
    crossFadeTo(fadeInAction: any, duration: any, warp: any): any;
    stopFading(): this;
    setEffectiveTimeScale(timeScale: any): this;
    getEffectiveTimeScale(): number;
    setDuration(duration: any): this;
    syncWith(action: any): this;
    halt(duration: any): this;
    warp(startTimeScale: any, endTimeScale: any, duration: any): this;
    stopWarping(): this;
    getMixer(): any;
    getClip(): any;
    getRoot(): any;
    _update(time: any, deltaTime: any, timeDirection: any, accuIndex: any): void;
    _updateWeight(time: any): number;
    _updateTimeScale(time: any): number;
    _updateTime(deltaTime: any): any;
    _setEndings(atStart: any, atEnd: any, pingPong: any): void;
    _scheduleFading(duration: any, weightNow: any, weightThen: any): this;
}

declare class Uniform {
    constructor(value: any);
    value: any;
    clone(): Uniform;
}

declare class UniformsGroup extends EventDispatcher {
    isUniformsGroup: boolean;
    name: string;
    usage: number;
    uniforms: any[];
    add(uniform: any): this;
    remove(uniform: any): this;
    setName(name: any): this;
    setUsage(value: any): this;
    dispose(): this;
    copy(source: any): this;
    clone(): any;
}

declare class InstancedBufferGeometry extends BufferGeometry {
    isInstancedBufferGeometry: boolean;
    instanceCount: number;
    copy(source: any): this;
}

declare class InterleavedBufferAttribute {
    constructor(interleavedBuffer: any, itemSize: any, offset: any, normalized?: boolean);
    isInterleavedBufferAttribute: boolean;
    name: string;
    data: any;
    itemSize: any;
    offset: any;
    normalized: boolean;
    get count(): any;
    get array(): any;
    set needsUpdate(arg: any);
    applyMatrix4(m: any): this;
    applyNormalMatrix(m: any): this;
    transformDirection(m: any): this;
    setX(index: any, x: any): this;
    setY(index: any, y: any): this;
    setZ(index: any, z: any): this;
    setW(index: any, w: any): this;
    getX(index: any): any;
    getY(index: any): any;
    getZ(index: any): any;
    getW(index: any): any;
    setXY(index: any, x: any, y: any): this;
    setXYZ(index: any, x: any, y: any, z: any): this;
    setXYZW(index: any, x: any, y: any, z: any, w: any): this;
    clone(data: any): BufferAttribute | InterleavedBufferAttribute;
    toJSON(data: any): {
        itemSize: any;
        type: any;
        array: any[];
        normalized: boolean;
        isInterleavedBufferAttribute?: undefined;
        data?: undefined;
        offset?: undefined;
    } | {
        isInterleavedBufferAttribute: boolean;
        itemSize: any;
        data: any;
        offset: any;
        normalized: boolean;
        type?: undefined;
        array?: undefined;
    };
}

declare class InterleavedBuffer {
    constructor(array: any, stride: any);
    isInterleavedBuffer: boolean;
    array: any;
    stride: any;
    count: number;
    usage: number;
    updateRange: {
        offset: number;
        count: number;
    };
    version: number;
    uuid: string;
    onUploadCallback(): void;
    set needsUpdate(arg: any);
    setUsage(value: any): this;
    copy(source: any): this;
    copyAt(index1: any, attribute: any, index2: any): this;
    set(value: any, offset?: number): this;
    clone(data: any): any;
    onUpload(callback: any): this;
    toJSON(data: any): {
        uuid: string;
        buffer: any;
        type: any;
        stride: any;
    };
}

declare class InstancedInterleavedBuffer extends InterleavedBuffer {
    constructor(array: any, stride: any, meshPerAttribute?: number);
    isInstancedInterleavedBuffer: boolean;
    meshPerAttribute: number;
    copy(source: any): this;
}

declare class GLBufferAttribute {
    constructor(buffer: any, type: any, itemSize: any, elementSize: any, count: any);
    isGLBufferAttribute: boolean;
    name: string;
    buffer: any;
    type: any;
    itemSize: any;
    elementSize: any;
    count: any;
    version: number;
    set needsUpdate(arg: any);
    setBuffer(buffer: any): this;
    setType(type: any, elementSize: any): this;
    setItemSize(itemSize: any): this;
    setCount(count: any): this;
}

declare class Ray {
    constructor(origin?: Vector3, direction?: Vector3);
    origin: Vector3;
    direction: Vector3;
    set(origin: any, direction: any): this;
    copy(ray: any): this;
    at(t: any, target: any): any;
    lookAt(v: any): this;
    recast(t: any): this;
    closestPointToPoint(point: any, target: any): any;
    distanceToPoint(point: any): number;
    distanceSqToPoint(point: any): number;
    distanceSqToSegment(v0: any, v1: any, optionalPointOnRay: any, optionalPointOnSegment: any): number;
    intersectSphere(sphere: any, target: any): any;
    intersectsSphere(sphere: any): boolean;
    distanceToPlane(plane: any): number;
    intersectPlane(plane: any, target: any): any;
    intersectsPlane(plane: any): boolean;
    intersectBox(box: any, target: any): any;
    intersectsBox(box: any): boolean;
    intersectTriangle(a: any, b: any, c: any, backfaceCulling: any, target: any): any;
    applyMatrix4(matrix4: any): this;
    equals(ray: any): any;
    clone(): any;
}

declare class Raycaster {
    constructor(origin: any, direction: any, near?: number, far?: number);
    ray: Ray;
    near: number;
    far: number;
    camera: any;
    layers: Layers;
    params: {
        Mesh: {};
        Line: {
            threshold: number;
        };
        LOD: {};
        Points: {
            threshold: number;
        };
        Sprite: {};
    };
    set(origin: any, direction: any): void;
    setFromCamera(coords: any, camera: any): void;
    intersectObject(object: any, recursive?: boolean, intersects?: any[]): any[];
    intersectObjects(objects: any, recursive?: boolean, intersects?: any[]): any[];
}

/**
 * Spherical linear unit quaternion interpolant.
 */
declare class QuaternionLinearInterpolant extends Interpolant {
    interpolate_(i1: any, t0: any, t: any, t1: any): any;
}

declare class Triangle {
    static getNormal(a: any, b: any, c: any, target: any): any;
    static getBarycoord(point: any, a: any, b: any, c: any, target: any): any;
    static containsPoint(point: any, a: any, b: any, c: any): boolean;
    static getUV(point: any, p1: any, p2: any, p3: any, uv1: any, uv2: any, uv3: any, target: any): any;
    static getInterpolation(point: any, p1: any, p2: any, p3: any, v1: any, v2: any, v3: any, target: any): any;
    static isFrontFacing(a: any, b: any, c: any, direction: any): boolean;
    constructor(a?: Vector3, b?: Vector3, c?: Vector3);
    a: Vector3;
    b: Vector3;
    c: Vector3;
    set(a: any, b: any, c: any): this;
    setFromPointsAndIndices(points: any, i0: any, i1: any, i2: any): this;
    setFromAttributeAndIndices(attribute: any, i0: any, i1: any, i2: any): this;
    clone(): any;
    copy(triangle: any): this;
    getArea(): number;
    getMidpoint(target: any): any;
    getNormal(target: any): any;
    getPlane(target: any): any;
    getBarycoord(point: any, target: any): any;
    getUV(point: any, uv1: any, uv2: any, uv3: any, target: any): any;
    getInterpolation(point: any, v1: any, v2: any, v3: any, target: any): any;
    containsPoint(point: any): boolean;
    isFrontFacing(direction: any): boolean;
    intersectsBox(box: any): any;
    closestPointToPoint(p: any, target: any): any;
    equals(triangle: any): any;
}

declare const DEG2RAD: number;
declare const RAD2DEG: number;
declare function generateUUID(): string;
declare function clamp(value: any, min: any, max: any): number;
declare function euclideanModulo(n: any, m: any): number;
declare function mapLinear(x: any, a1: any, a2: any, b1: any, b2: any): any;
declare function inverseLerp(x: any, y: any, value: any): number;
declare function lerp(x: any, y: any, t: any): number;
declare function damp(x: any, y: any, lambda: any, dt: any): number;
declare function pingpong(x: any, length?: number): number;
declare function smoothstep(x: any, min: any, max: any): number;
declare function smootherstep(x: any, min: any, max: any): number;
declare function randInt(low: any, high: any): any;
declare function randFloat(low: any, high: any): any;
declare function randFloatSpread(range: any): number;
declare function seededRandom(s: any): number;
declare function degToRad(degrees: any): number;
declare function radToDeg(radians: any): number;
declare function isPowerOfTwo(value: any): boolean;
declare function ceilPowerOfTwo(value: any): number;
declare function floorPowerOfTwo(value: any): number;
declare function setQuaternionFromProperEuler(q: any, a: any, b: any, c: any, order: any): void;
declare function normalize(value: any, array: any): any;
declare function denormalize(value: any, array: any): any;
declare namespace MathUtils {
    export { DEG2RAD };
    export { RAD2DEG };
    export { generateUUID };
    export { clamp };
    export { euclideanModulo };
    export { mapLinear };
    export { inverseLerp };
    export { lerp };
    export { damp };
    export { pingpong };
    export { smoothstep };
    export { smootherstep };
    export { randInt };
    export { randFloat };
    export { randFloatSpread };
    export { seededRandom };
    export { degToRad };
    export { radToDeg };
    export { isPowerOfTwo };
    export { ceilPowerOfTwo };
    export { floorPowerOfTwo };
    export { setQuaternionFromProperEuler };
    export { normalize };
    export { denormalize };
}

declare class Spherical {
    constructor(radius?: number, phi?: number, theta?: number);
    radius: number;
    phi: number;
    theta: number;
    set(radius: any, phi: any, theta: any): this;
    copy(other: any): this;
    makeSafe(): this;
    setFromVector3(v: any): this;
    setFromCartesianCoords(x: any, y: any, z: any): this;
    clone(): any;
}

/**
 * Ref: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
 */
declare class Cylindrical {
    constructor(radius?: number, theta?: number, y?: number);
    radius: number;
    theta: number;
    y: number;
    set(radius: any, theta: any, y: any): this;
    copy(other: any): this;
    setFromVector3(v: any): this;
    setFromCartesianCoords(x: any, y: any, z: any): this;
    clone(): any;
}

declare class Sphere {
    constructor(center?: Vector3, radius?: number);
    center: Vector3;
    radius: number;
    set(center: any, radius: any): this;
    setFromPoints(points: any, optionalCenter: any): this;
    copy(sphere: any): this;
    isEmpty(): boolean;
    makeEmpty(): this;
    containsPoint(point: any): boolean;
    distanceToPoint(point: any): number;
    intersectsSphere(sphere: any): boolean;
    intersectsBox(box: any): any;
    intersectsPlane(plane: any): boolean;
    clampPoint(point: any, target: any): any;
    getBoundingBox(target: any): any;
    applyMatrix4(matrix: any): this;
    translate(offset: any): this;
    expandByPoint(point: any): this;
    union(sphere: any): this;
    equals(sphere: any): boolean;
    clone(): any;
}

declare class Box3 {
    constructor(min?: Vector3, max?: Vector3);
    isBox3: boolean;
    min: Vector3;
    max: Vector3;
    set(min: any, max: any): this;
    setFromArray(array: any): this;
    setFromBufferAttribute(attribute: any): this;
    setFromPoints(points: any): this;
    setFromCenterAndSize(center: any, size: any): this;
    setFromObject(object: any, precise?: boolean): this;
    clone(): any;
    copy(box: any): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    getCenter(target: any): any;
    getSize(target: any): any;
    expandByPoint(point: any): this;
    expandByVector(vector: any): this;
    expandByScalar(scalar: any): this;
    expandByObject(object: any, precise?: boolean): this;
    containsPoint(point: any): boolean;
    containsBox(box: any): boolean;
    getParameter(point: any, target: any): any;
    intersectsBox(box: any): boolean;
    intersectsSphere(sphere: any): boolean;
    intersectsPlane(plane: any): boolean;
    intersectsTriangle(triangle: any): boolean;
    clampPoint(point: any, target: any): any;
    distanceToPoint(point: any): any;
    getBoundingSphere(target: any): any;
    intersect(box: any): this;
    union(box: any): this;
    applyMatrix4(matrix: any): this;
    translate(offset: any): this;
    equals(box: any): any;
}

declare class Box2 {
    constructor(min?: Vector2, max?: Vector2);
    isBox2: boolean;
    min: Vector2;
    max: Vector2;
    set(min: any, max: any): this;
    setFromPoints(points: any): this;
    setFromCenterAndSize(center: any, size: any): this;
    clone(): any;
    copy(box: any): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    getCenter(target: any): any;
    getSize(target: any): any;
    expandByPoint(point: any): this;
    expandByVector(vector: any): this;
    expandByScalar(scalar: any): this;
    containsPoint(point: any): boolean;
    containsBox(box: any): boolean;
    getParameter(point: any, target: any): any;
    intersectsBox(box: any): boolean;
    clampPoint(point: any, target: any): any;
    distanceToPoint(point: any): any;
    intersect(box: any): this;
    union(box: any): this;
    translate(offset: any): this;
    equals(box: any): any;
}

declare class Line3 {
    constructor(start?: Vector3, end?: Vector3);
    start: Vector3;
    end: Vector3;
    set(start: any, end: any): this;
    copy(line: any): this;
    getCenter(target: any): any;
    delta(target: any): any;
    distanceSq(): number;
    distance(): number;
    at(t: any, target: any): any;
    closestPointToPointParameter(point: any, clampToLine: any): number;
    closestPointToPoint(point: any, clampToLine: any, target: any): any;
    applyMatrix4(matrix: any): this;
    equals(line: any): any;
    clone(): any;
}

declare namespace ColorManagement {
    let enabled: boolean;
    let legacyMode: boolean;
    let workingColorSpace: string;
    function convert(color: any, sourceColorSpace: any, targetColorSpace: any): any;
    function fromWorkingColorSpace(color: any, targetColorSpace: any): any;
    function toWorkingColorSpace(color: any, sourceColorSpace: any): any;
}

declare class SpotLightHelper extends Object3D {
    constructor(light: any, color: any);
    light: any;
    matrix: any;
    color: any;
    cone: LineSegments;
    dispose(): void;
    update(): void;
}

declare class SkeletonHelper extends LineSegments {
    constructor(object: any);
    isSkeletonHelper: boolean;
    root: any;
    bones: any[];
    matrix: any;
    dispose(): void;
}

declare class PointLightHelper extends Mesh {
    constructor(light: any, sphereSize: any, color: any);
    light: any;
    color: any;
    matrix: any;
    dispose(): void;
    update(): void;
}

declare class HemisphereLightHelper extends Object3D {
    constructor(light: any, size: any, color: any);
    light: any;
    matrix: any;
    color: any;
    material: MeshBasicMaterial;
    dispose(): void;
    update(): void;
}

declare class GridHelper extends LineSegments {
    constructor(size?: number, divisions?: number, color1?: number, color2?: number);
    dispose(): void;
}

declare class PolarGridHelper extends LineSegments {
    constructor(radius?: number, sectors?: number, rings?: number, divisions?: number, color1?: number, color2?: number);
    dispose(): void;
}

declare class DirectionalLightHelper extends Object3D {
    constructor(light: any, size: any, color: any);
    light: any;
    matrix: any;
    color: any;
    lightPlane: Line;
    targetLine: Line;
    dispose(): void;
    update(): void;
}

/**
 *	- shows frustum, line of sight and up of the camera
 *	- suitable for fast updates
 * 	- based on frustum visualization in lightgl.js shadowmap example
 *		https://github.com/evanw/lightgl.js/blob/master/tests/shadowmap.html
 */
declare class CameraHelper extends LineSegments {
    constructor(camera: any);
    camera: any;
    matrix: any;
    pointMap: {};
    setColors(frustum: any, cone: any, up: any, target: any, cross: any): void;
    update(): void;
    dispose(): void;
}

declare class BoxHelper extends LineSegments {
    constructor(object: any, color?: number);
    object: any;
    update(object: any): void;
    setFromObject(object: any): this;
    copy(source: any, recursive: any): this;
    dispose(): void;
}

declare class Box3Helper extends LineSegments {
    constructor(box: any, color?: number);
    box: any;
    dispose(): void;
}

declare class PlaneHelper extends Line {
    constructor(plane: any, size?: number, hex?: number);
    plane: any;
    size: number;
    dispose(): void;
}

declare class ArrowHelper extends Object3D {
    constructor(dir?: Vector3, origin?: Vector3, length?: number, color?: number, headLength?: number, headWidth?: number);
    line: Line;
    cone: Mesh;
    setDirection(dir: any): void;
    setLength(length: any, headLength?: number, headWidth?: number): void;
    setColor(color: any): void;
    copy(source: any): this;
    dispose(): void;
}

declare class AxesHelper extends LineSegments {
    constructor(size?: number);
    setColors(xAxisColor: any, yAxisColor: any, zAxisColor: any): this;
    dispose(): void;
}

declare class ShapePath {
    type: string;
    color: Color;
    subPaths: any[];
    currentPath: Path;
    moveTo(x: any, y: any): this;
    lineTo(x: any, y: any): this;
    quadraticCurveTo(aCPx: any, aCPy: any, aX: any, aY: any): this;
    bezierCurveTo(aCP1x: any, aCP1y: any, aCP2x: any, aCP2y: any, aX: any, aY: any): this;
    splineThru(pts: any): this;
    toShapes(isCCW: any): Shape[];
}

declare function toHalfFloat(val: any): number;
declare function fromHalfFloat(val: any): number;
declare namespace DataUtils {
    export { toHalfFloat };
    export { fromHalfFloat };
}

declare class ImageUtils {
    static getDataURL(image: any): any;
    static sRGBToLinear(image: any): any;
}

declare class ShapeUtils {
    static area(contour: any): number;
    static isClockWise(pts: any): boolean;
    static triangulateShape(contour: any, holes: any): any[][];
}

/**
 * This class generates a Prefiltered, Mipmapped Radiance Environment Map
 * (PMREM) from a cubeMap environment texture. This allows different levels of
 * blur to be quickly accessed based on material roughness. It is packed into a
 * special CubeUV format that allows us to perform custom interpolation so that
 * we can support nonlinear formats such as RGBE. Unlike a traditional mipmap
 * chain, it only goes down to the LOD_MIN level (above), and then creates extra
 * even more filtered 'mips' at the same LOD_MIN resolution, associated with
 * higher roughness levels. In this way we maintain resolution to smoothly
 * interpolate diffuse lighting while limiting sampling computation.
 *
 * Paper: Fast, Accurate Image-Based Lighting
 * https://drive.google.com/file/d/15y8r_UpKlU9SvV4ILb0C3qCPecS8pvLz/view
*/
declare class PMREMGenerator {
    constructor(renderer: any);
    _renderer: any;
    _pingPongRenderTarget: WebGLRenderTarget;
    _lodMax: number;
    _cubeSize: number;
    _lodPlanes: any[];
    _sizeLods: any[];
    _sigmas: any[];
    _blurMaterial: ShaderMaterial;
    _cubemapMaterial: ShaderMaterial;
    _equirectMaterial: ShaderMaterial;
    /**
     * Generates a PMREM from a supplied Scene, which can be faster than using an
     * image if networking bandwidth is low. Optional sigma specifies a blur radius
     * in radians to be applied to the scene before PMREM generation. Optional near
     * and far planes ensure the scene is rendered in its entirety (the cubeCamera
     * is placed at the origin).
     */
    fromScene(scene: any, sigma?: number, near?: number, far?: number): WebGLRenderTarget;
    /**
     * Generates a PMREM from an equirectangular texture, which can be either LDR
     * or HDR. The ideal input image size is 1k (1024 x 512),
     * as this matches best with the 256 x 256 cubemap output.
     */
    fromEquirectangular(equirectangular: any, renderTarget?: any): any;
    /**
     * Generates a PMREM from an cubemap texture, which can be either LDR
     * or HDR. The ideal input cube size is 256 x 256,
     * as this matches best with the 256 x 256 cubemap output.
     */
    fromCubemap(cubemap: any, renderTarget?: any): any;
    /**
     * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
     * your texture's network fetch for increased concurrency.
     */
    compileCubemapShader(): void;
    /**
     * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
     * your texture's network fetch for increased concurrency.
     */
    compileEquirectangularShader(): void;
    /**
     * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
     * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
     * one of them will cause any others to also become unusable.
     */
    dispose(): void;
    _setSize(cubeSize: any): void;
    _dispose(): void;
    _cleanup(outputTarget: any): void;
    _fromTexture(texture: any, renderTarget: any): any;
    _allocateTargets(): WebGLRenderTarget;
    _compileMaterial(material: any): void;
    _sceneToCubeUV(scene: any, near: any, far: any, cubeUVRenderTarget: any): void;
    _textureToCubeUV(texture: any, cubeUVRenderTarget: any): void;
    _applyPMREM(cubeUVRenderTarget: any): void;
    /**
     * This is a two-pass Gaussian blur for a cubemap. Normally this is done
     * vertically and horizontally, but this breaks down on a cube. Here we apply
     * the blur latitudinally (around the poles), and then longitudinally (towards
     * the poles) to approximate the orthogonally-separable blur. It is least
     * accurate at the poles, but still does a decent job.
     */
    _blur(cubeUVRenderTarget: any, lodIn: any, lodOut: any, sigma: any, poleAxis: any): void;
    _halfBlur(targetIn: any, targetOut: any, lodIn: any, lodOut: any, sigmaRadians: any, direction: any, poleAxis: any): void;
}

declare function WebGLUtils(gl: any, extensions: any, capabilities: any): {
    convert: (p: any, colorSpace?: string) => any;
};

declare const DefaultLoadingManager: LoadingManager;
declare class LoadingManager {
    constructor(onLoad: any, onProgress: any, onError: any);
    onStart: any;
    onLoad: any;
    onProgress: any;
    onError: any;
    itemStart: (url: any) => void;
    itemEnd: (url: any) => void;
    itemError: (url: any) => void;
    resolveURL: (url: any) => any;
    setURLModifier: (transform: any) => this;
    addHandler: (regex: any, loader: any) => this;
    removeHandler: (regex: any) => this;
    getHandler: (file: any) => any;
}

export { ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysCompare, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationAction, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, BackSide, BasicDepthPacking, BasicShadowMap, Bone, BooleanKeyframeTrack, Box2, Box3, Box3Helper, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasTexture, CapsuleGeometry, CatmullRomCurve3, CineonToneMapping, CircleGeometry, ClampToEdgeWrapping, Clock, Color, ColorKeyframeTrack, ColorManagement, CompressedArrayTexture, CompressedTexture, CompressedTextureLoader, ConeGeometry, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderGeometry, Cylindrical, Data3DTexture, DataArrayTexture, DataTexture, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DisplayP3ColorSpace, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EllipseCurve, EqualCompare, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeGeometry, FileLoader, Float16BufferAttribute, Float32BufferAttribute, Float64BufferAttribute, FloatType, Fog, FogExp2, FramebufferTexture, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GreaterCompare, GreaterDepth, GreaterEqualCompare, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16BufferAttribute, Int32BufferAttribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, KeepStencilOp, KeyframeTrack, LOD, LatheGeometry, Layers, LessCompare, LessDepth, LessEqualCompare, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LineSegments, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearSRGBColorSpace, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverCompare, NeverDepth, NeverStencilFunc, NoBlending, NoColorSpace, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualCompare, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, Path, PerspectiveCamera, Plane, PlaneGeometry, PlaneHelper, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, RED_GREEN_RGTC2_Format, RED_RGTC1_Format, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingGeometry, SIGNED_RED_GREEN_RGTC2_Format, SIGNED_RED_RGTC1_Format, SRGBColorSpace, Scene, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, Source, Sphere, SphereGeometry, Spherical, SphericalHarmonics3, SplineCurve, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronGeometry, Texture, TextureLoader, TorusGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeGeometry, TwoPassDoubleSide, UVMapping, Uint16BufferAttribute, Uint32BufferAttribute, Uint8BufferAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsGroup, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, VideoTexture, WebGL1Renderer, WebGL3DRenderTarget, WebGLArrayRenderTarget, WebGLCoordinateSystem, WebGLCubeRenderTarget, WebGLMultipleRenderTargets, WebGLRenderTarget, WebGLRenderer, WebGLUtils, WebGPUCoordinateSystem, WireframeGeometry, WrapAroundEnding, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, _SRGBAFormat, sRGBEncoding };

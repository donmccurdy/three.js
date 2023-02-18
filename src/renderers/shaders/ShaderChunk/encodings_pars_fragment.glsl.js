export default /* glsl */`

// http://www.russellcottrell.com/photo/matrixCalculator.htm
mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = transpose( mat3(
	0.8224621, 0.0331941, 0.0170827,
	0.1775380, 0.9668058, 0.0723974,
	-0.0000001, 0.0000001, 0.9105199
) );

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 LinearToDisplayP3( in vec4 value ) {
	return LinearTosRGB( vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a ) );
}
`;

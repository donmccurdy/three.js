export default /* glsl */`

// XYZ_TO_LINEAR_DISPLAY_P3 x LINEAR_SRGB_TO_XYZ
// Reference: http://www.russellcottrell.com/photo/matrixCalculator.htm
mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	2.4039840, -0.9899069, -0.3976415,
	-0.8422229, 1.7988437, 0.0160354,
	0.0482059, -0.0974068, 1.2740049
) * mat3(
	0.4360413, 0.3851129, 0.1430458,
	0.2224845, 0.7169051, 0.0606104,
	0.0139202, 0.0970672, 0.7139126
);

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

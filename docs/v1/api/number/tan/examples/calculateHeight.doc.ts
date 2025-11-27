import { N, A, pipe } from "@duplojs/utils";

const measurements = [
	{
		angleDegrees: 30,
		distance: 50,
	},
	{
		angleDegrees: 45,
		distance: 30,
	},
	{
		angleDegrees: 60,
		distance: 20,
	},
];

const degreesToRadians = N.divide(Math.PI, 180);

const result = pipe(
	measurements,
	A.map((measurement) => pipe(
		measurement.angleDegrees,
		N.multiply(degreesToRadians),
		N.tan,
		N.multiply(measurement.distance),
	)),
);

// result: [28.9, 30, 34.6]

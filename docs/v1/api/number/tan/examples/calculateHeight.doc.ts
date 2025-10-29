import { DNumber, DArray, pipe } from "@duplojs/utils";

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

const degreesToRadians = DNumber.divide(Math.PI, 180);

const result = pipe(
	measurements,
	DArray.map((measurement) => pipe(
		measurement.angleDegrees,
		DNumber.multiply(degreesToRadians),
		DNumber.tan,
		DNumber.multiply(measurement.distance),
	)),
);

// result: [28.9, 30, 34.6]

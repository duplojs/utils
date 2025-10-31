import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const fieldOfViewDegrees = 60;
const viewportWidth = 1920;
const objectDistances = [10, 20, 30, 40, 50];
const objectRealWidth = 2;

const degreesToRadians = DNumber.divide(Math.PI, 180);
const halfDivisor = 2;

const focalLength = pipe(
	fieldOfViewDegrees,
	DNumber.multiply(degreesToRadians),
	(fovRadians) => DNumber.divide(fovRadians, halfDivisor),
	DNumber.tan,
	(tanValue) => DNumber.divide(viewportWidth, DNumber.multiply(halfDivisor, tanValue)),
);

const focalTimesObjectWidth = DNumber.multiply(focalLength, objectRealWidth);

const result = pipe(
	objectDistances,
	DArray.map(
		innerPipe(
			DNumber.divide(focalTimesObjectWidth),
		),
	),
);

// result: [166.3, 83.1, 55.4, 41.6, 33.3]

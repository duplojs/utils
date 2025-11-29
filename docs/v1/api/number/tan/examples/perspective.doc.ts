import { N, A, pipe, innerPipe } from "@duplojs/utils";

const fieldOfViewDegrees = 60;
const viewportWidth = 1920;
const objectDistances = [10, 20, 30, 40, 50];
const objectRealWidth = 2;

const degreesToRadians = N.divide(Math.PI, 180);
const halfDivisor = 2;

const focalLength = pipe(
	fieldOfViewDegrees,
	N.multiply(degreesToRadians),
	(fovRadians) => N.divide(fovRadians, halfDivisor),
	N.tan,
	(tanValue) => N.divide(viewportWidth, N.multiply(halfDivisor, tanValue)),
);

const focalTimesObjectWidth = N.multiply(focalLength, objectRealWidth);

const result = pipe(
	objectDistances,
	A.map(
		innerPipe(
			N.divide(focalTimesObjectWidth),
		),
	),
);

// result: [166.3, 83.1, 55.4, 41.6, 33.3]

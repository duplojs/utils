import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const kilometersPerHour = [45.7, 62.3, 38.9, 55.2];
const kmToMilesConversionFactor = 1.609;

const result = pipe(
	kilometersPerHour,
	DArray.map(
		innerPipe(
			DNumber.divide(kmToMilesConversionFactor),
			DNumber.round,
		),
	),
);

// result: [28, 39, 24, 34]

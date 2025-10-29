import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const distancesInKm = [5, 10, 15, 20];
const kmToMiles = 0.621371;

const result = pipe(
	distancesInKm,
	DArray.map(
		innerPipe(
			DNumber.multiply(kmToMiles),
			DNumber.round,
		),
	),
);

// result: [3, 6, 9, 12]

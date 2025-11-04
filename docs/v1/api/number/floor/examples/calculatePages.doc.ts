import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const totalItems = [47, 93, 125, 18];
const itemsPerPage = 10;

const result = pipe(
	totalItems,
	DArray.map(
		innerPipe(
			DNumber.divide(itemsPerPage),
			DNumber.floor,
		),
	),
);

// result: [4, 9, 12, 1]

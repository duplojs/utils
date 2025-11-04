import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const orderQuantities = [23, 47, 8, 102];
const itemsPerBox = 12;

const result = pipe(
	orderQuantities,
	DArray.map(
		innerPipe(
			DNumber.divide(itemsPerBox),
			DNumber.ceil,
		),
	),
);

// result: [2, 4, 1, 9]

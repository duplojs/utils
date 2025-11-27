import { N, A, pipe, innerPipe } from "@duplojs/utils";

const orderQuantities = [23, 47, 8, 102];
const itemsPerBox = 12;

const result = pipe(
	orderQuantities,
	A.map(
		innerPipe(
			N.divide(itemsPerBox),
			N.ceil,
		),
	),
);

// result: [2, 4, 1, 9]

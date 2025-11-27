import { N, A, pipe, innerPipe } from "@duplojs/utils";

const totalItems = [47, 93, 125, 18];
const itemsPerPage = 10;

const result = pipe(
	totalItems,
	A.map(
		innerPipe(
			N.divide(itemsPerPage),
			N.floor,
		),
	),
);

// result: [4, 9, 12, 1]

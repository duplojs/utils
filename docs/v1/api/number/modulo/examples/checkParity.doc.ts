import { N, A, pipe, innerPipe, equal } from "@duplojs/utils";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divisor = 2;

const result = pipe(
	numbers,
	A.filter(
		innerPipe(
			N.modulo(divisor),
			equal(0),
		),
	),
);

// result: [2, 4, 6, 8, 10]

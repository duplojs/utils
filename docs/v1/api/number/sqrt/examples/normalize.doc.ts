import { N, A, pipe, innerPipe } from "@duplojs/utils";

const values = [1, 4, 9, 16, 25, 36];

const result = pipe(
	values,
	A.map(
		innerPipe(
			N.sqrt,
			N.round,
		),
	),
);

// result: [1, 2, 3, 4, 5, 6]

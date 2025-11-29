import { N, A, pipe } from "@duplojs/utils";

const amounts = [49.99, 125.50, 8.75, 234.00];

const result = pipe(
	amounts,
	A.map((amount) => ({
		euros: N.trunc(amount),
		cents: pipe(
			N.modulo(amount, 1),
			N.multiply(100),
			N.round,
		),
	})),
);

// result: [
//   { euros: 49, cents: 99 },
//   { euros: 125, cents: 50 },
//   { euros: 8, cents: 75 },
//   { euros: 234, cents: 0 }
// ]

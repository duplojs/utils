import { DNumber, DArray, pipe } from "@duplojs/utils";

const amounts = [49.99, 125.50, 8.75, 234.00];

const result = pipe(
	amounts,
	DArray.map((amount) => ({
		euros: DNumber.trunc(amount),
		cents: pipe(
			DNumber.modulo(amount, 1),
			DNumber.multiply(100),
			DNumber.round,
		),
	})),
);

// result: [
//   { euros: 49, cents: 99 },
//   { euros: 125, cents: 50 },
//   { euros: 8, cents: 75 },
//   { euros: 234, cents: 0 }
// ]

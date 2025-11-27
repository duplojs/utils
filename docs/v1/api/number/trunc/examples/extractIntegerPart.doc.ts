import { N, A, pipe } from "@duplojs/utils";

const measurements = [12.87, -5.42, 23.95, -8.13];

const result = pipe(
	measurements,
	A.map((value) => ({
		original: value,
		integerPart: N.trunc(value),
		decimalPart: N.subtract(
			value,
			N.trunc(value),
		),
	})),
);

// result: [
//   { original: 12.87, integerPart: 12, decimalPart: 0.87 },
//   { original: -5.42, integerPart: -5, decimalPart: -0.42 },
//   { original: 23.95, integerPart: 23, decimalPart: 0.95 },
//   { original: -8.13, integerPart: -8, decimalPart: -0.13 }
// ]

import { DNumber, DArray, pipe } from "@duplojs/utils";

const measurements = [12.87, -5.42, 23.95, -8.13];

const result = pipe(
	measurements,
	DArray.map((value) => ({
		original: value,
		integerPart: DNumber.trunc(value),
		decimalPart: DNumber.subtract(
			value,
			DNumber.trunc(value),
		),
	})),
);

// result: [
//   { original: 12.87, integerPart: 12, decimalPart: 0.87 },
//   { original: -5.42, integerPart: -5, decimalPart: -0.42 },
//   { original: 23.95, integerPart: 23, decimalPart: 0.95 },
//   { original: -8.13, integerPart: -8, decimalPart: -0.13 }
// ]

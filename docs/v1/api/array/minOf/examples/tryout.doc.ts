import { DArray, DNumber, pipe } from "@duplojs/utils";

const input = [32, 18, 45, 11] as const;

const result = DArray.minOf(input);
// result: 11

const result2 = pipe(
	input,
	DArray.map(DNumber.subtract(5)),
	DArray.minOf,
);
// result2: 6

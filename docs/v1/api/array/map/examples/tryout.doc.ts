import { DArray, DNumber } from "@duplojs/utils";

const input = [5, 10, 15] as const;

const result = DArray.map(
	input,
	(value, { index }) => DNumber.multiply(value, DNumber.add(index, 1)),
);
// result: [5, 20, 45]

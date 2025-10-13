import { DArray, DString, pipe } from "@duplojs/utils";

const input = "aaabbbccc";
const result = pipe(
	input,
	DString.matchAll(/a/g),
	DArray.from,
	(value) => value.length,
);
// result: 3

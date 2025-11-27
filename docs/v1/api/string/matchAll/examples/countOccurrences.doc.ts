import { A, DString, pipe } from "@duplojs/utils";

const input = "aaabbbccc";
const result = pipe(
	input,
	DString.matchAll(/a/g),
	A.from,
	A.length,
);
// result: 3

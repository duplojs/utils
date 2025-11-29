import { A, N, DString, pipe } from "@duplojs/utils";

const input = [1, 2, 3];
const result = pipe(
	input,
	A.map(
		(value) => DString.repeat(
			"=",
			N.multiply(value, 5),
		),
	),
);
// result: ["=====", "==========", "==============="]

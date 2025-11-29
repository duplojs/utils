import { A, DString, pipe } from "@duplojs/utils";

const input = "test test test";
const result = pipe(
	[0, 5, 10],
	A.map(
		(position) => DString.indexOf(input, "test", position),
	),
	A.filter((value) => value !== undefined),
	A.length,
);
// result: 3

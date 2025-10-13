import { DArray, DString, pipe } from "@duplojs/utils";

const input = "test test test";
const result = pipe(
	[0, 5, 10],
	DArray.map(
		(position) => DString.indexOf(input, "test", position),
	),
	DArray.filter((value) => value !== undefined),
	(value) => value.length,
);
// result: 3

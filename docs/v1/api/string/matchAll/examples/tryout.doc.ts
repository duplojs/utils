import { DArray, DString, pipe } from "@duplojs/utils";

const input = "foo_foo_foo";
const result = pipe(
	input,
	DString.matchAll(/f.o_/g),
	DArray.from,
	DArray.map(DArray.first),
	DArray.filter((value) => value !== undefined),
);
// result: ["foo_", "foo_", "foo_"]


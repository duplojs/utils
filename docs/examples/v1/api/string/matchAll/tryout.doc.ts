import { A, S, pipe } from "@duplojs/utils";

const input = "foo_foo_foo";
const result = pipe(
	input,
	S.matchAll(/f.o_/g),
	A.from,
	A.map(A.first),
	A.filter((value) => value !== undefined),
);
// result: ["foo_", "foo_", "foo_"]


import { A, S, pipe } from "@scripts";

pipe(
	"foo_foo_foo",
	S.matchAll(/f.o_/g),
	A.from,
	A.map(A.first),
	A.filter((value) => value !== undefined),
); // ["foo_", "foo_", "foo_"]

S.matchAll("alpha_beta", /a../g); // RegExpStringIterator

pipe(
	"one_two",
	S.matchAll(/\w+/g),
	A.from,
); // ["one", "two"]

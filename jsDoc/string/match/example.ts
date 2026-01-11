import { S, pipe } from "@scripts";

S.match("foo_foo_foo", /f.o_/); // ["foo_"]

S.match("foo_foo_foo", "foo"); // ["foo"]

pipe(
	"alpha_beta",
	S.match(/a../),
); // ["alph"]

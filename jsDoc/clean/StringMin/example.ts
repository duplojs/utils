import { C, E } from "@scripts";

const UsernameMin = C.StringMin(3);

const result = UsernameMin.create("Ada");

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"string-min-3", "Ada">>
}

const username = UsernameMin.createOrThrow("Eve");
// username: C.ConstrainedType<"string-min-3", "Eve">

UsernameMin.is(username); // type guard

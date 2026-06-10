import { C, E } from "@scripts";

const result = C.NoBlank.create("user-name");

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"no-blank", "user-name">>
}

const token = C.NoBlank.createOrThrow("alpha-123");
// token: C.ConstrainedType<"no-blank", "alpha-123">

C.NoBlank.is(token); // type guard

const rejected = C.NoBlank.create("hello world");

if (E.isLeft(rejected)) {
	// The value contains a whitespace character.
}

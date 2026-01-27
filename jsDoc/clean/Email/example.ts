import { C, E } from "@scripts";

const result = C.Email.create("hello@duplojs.dev");

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"email", "hello@duplojs.dev">>
}

const email = C.Email.createOrThrow("a@b.com");
// email: C.ConstrainedType<"email", "a@b.com">

C.Email.is(email); // type guard

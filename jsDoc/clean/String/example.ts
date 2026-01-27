import { C, E } from "@scripts";

const result = C.String.create("hello");

if (E.isRight(result)) {
	// result: E.Right<"createNewType", C.Primitive<"hello">>
}

const value = C.String.createOrThrow("world");
// value: C.Primitive<"world">

C.String.is(value); // type guard

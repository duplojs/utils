import { C, E } from "@scripts";

const result = C.Boolean.create(true);

if (E.isRight(result)) {
	// result: E.EitherRight<"createNewType", C.Primitive<true>>
}

const value = C.Boolean.createOrThrow(false);
// value: C.Primitive<false>

C.Boolean.is(value); // type guard

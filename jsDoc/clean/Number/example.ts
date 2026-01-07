import { C, E } from "@scripts";

const result = C.Number.create(42);

if (E.isRight(result)) {
	// result: E.EitherRight<"createNewType", C.Primitive<42>>
}

const value = C.Number.createOrThrow(7);
// value: C.Primitive<7>

C.Number.is(value); // type guard

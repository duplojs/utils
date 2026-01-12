import { C, E } from "@scripts";

const result = C.Int.create(12);

if (E.isRight(result)) {
	// result: E.EitherRight<"createConstrainedType", C.ConstrainedType<"int", 12>>
}

const value = C.Int.createOrThrow(7);
// value: C.ConstrainedType<"int", 7>

C.Int.is(value); // type guard

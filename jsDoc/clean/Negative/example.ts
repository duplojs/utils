import { C, E } from "@scripts";

const result = C.Negative.create(-4);

if (E.isRight(result)) {
	// result: E.EitherRight<"createConstrainedType", C.ConstrainedType<"negative", -4>>
}

const value = C.Negative.createOrThrow(-10);
// value: C.ConstrainedType<"negative", -10>

C.Negative.is(value); // type guard

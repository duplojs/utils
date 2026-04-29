import { C, E } from "@scripts";

const result = C.StrictNegative.create(-4);

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"strict-negative", -4>>
}

const value = C.StrictNegative.createOrThrow(-10);
// value: C.ConstrainedType<"strict-negative", -10>

C.StrictNegative.is(value); // type guard

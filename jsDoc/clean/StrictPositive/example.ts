import { C, E } from "@scripts";

const result = C.StrictPositive.create(4);

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"strict-positive", 4>>
}

const value = C.StrictPositive.createOrThrow(10);
// value: C.ConstrainedType<"strict-positive", 10>

C.StrictPositive.is(value); // type guard

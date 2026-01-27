import { C, E } from "@scripts";

const result = C.Positive.create(4);

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"positive", 4>>
}

const value = C.Positive.createOrThrow(10);
// value: C.ConstrainedType<"positive", 10>

C.Positive.is(value); // type guard

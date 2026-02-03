import { C, E } from "@scripts";

const result = C.PositiveInt.create(4);

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"positive-int", 4>>
}

const value = C.PositiveInt.createOrThrow(10);
// value: C.ConstrainedType<"positive-int", 10>

C.PositiveInt.is(value); // type guard

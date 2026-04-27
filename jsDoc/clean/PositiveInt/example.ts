import { C, E } from "@scripts";

const result = C.PositiveInt.create(12);

if (E.isRight(result)) {
	// result: E.Right<"createConstraintsSet", C.Primitive<12> & C.PositiveInt>
}

const value = C.PositiveInt.createOrThrow(0);
// value: C.Primitive<0> & C.PositiveInt

C.PositiveInt.is(value); // type guard

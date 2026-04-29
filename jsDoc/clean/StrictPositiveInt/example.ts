import { C, E } from "@scripts";

const result = C.StrictPositiveInt.create(12);

if (E.isRight(result)) {
	// result: E.Right<"createConstraintsSet", C.Primitive<12> & C.StrictPositiveInt>
}

const value = C.StrictPositiveInt.createOrThrow(1);
// value: C.Primitive<1> & C.StrictPositiveInt

C.StrictPositiveInt.is(value); // type guard

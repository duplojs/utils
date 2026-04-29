import { C, E } from "@scripts";

const result = C.NegativeInt.create(-12);

if (E.isRight(result)) {
	// result: E.Right<"createConstraintsSet", C.Primitive<-12> & C.NegativeInt>
}

const value = C.NegativeInt.createOrThrow(0);
// value: C.Primitive<0> & C.NegativeInt

C.NegativeInt.is(value); // type guard

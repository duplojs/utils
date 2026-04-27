import { C, E } from "@scripts";

const result = C.StrictNegativeInt.create(-12);

if (E.isRight(result)) {
	// result: E.Right<"createConstraintsSet", C.Primitive<-12> & C.StrictNegativeInt>
}

const value = C.StrictNegativeInt.createOrThrow(-1);
// value: C.Primitive<-1> & C.StrictNegativeInt

C.StrictNegativeInt.is(value); // type guard

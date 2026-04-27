import { C, E } from "@scripts";

const result = C.Percent.create(75);

if (E.isRight(result)) {
	// result: E.Right<"createConstraintsSet", C.Primitive<75> & C.Percent>
}

const value = C.Percent.createOrThrow(100);
// value: C.Primitive<100> & C.Percent

C.Percent.is(value); // type guard

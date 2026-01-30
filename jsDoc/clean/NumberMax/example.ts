import { C, E } from "@scripts";

const PercentMax = C.NumberMax(100);

const result = PercentMax.create(100);

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"number-max-100", 100>>
}

const value = PercentMax.createOrThrow(80);
// value: C.ConstrainedType<"number-max-100", 80>

PercentMax.is(value); // type guard

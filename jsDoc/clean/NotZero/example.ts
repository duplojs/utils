import { C, E } from "@scripts";

const result = C.NotZero.create(4);

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"not-zero", 4>>
}

const divisor = C.NotZero.createOrThrow(-2);
// divisor: C.ConstrainedType<"not-zero", -2>

C.NotZero.is(divisor); // type guard

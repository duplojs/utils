import { C, E } from "@scripts";

const AdultMin = C.NumberMin(18);

const result = AdultMin.create(18);

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"number-min-18", 18>>
}

const age = AdultMin.createOrThrow(20);
// age: C.ConstrainedType<"number-min-18", 20>

AdultMin.is(age); // type guard

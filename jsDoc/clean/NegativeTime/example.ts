import { C, D, E } from "@scripts";

const result = C.NegativeTime.create(D.createTime(-1, "second"));

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"negative-time", D.TheTime>>
}

const value = C.NegativeTime.createOrThrow(D.createTime(-500, "millisecond"));
// value: C.ConstrainedType<"negative-time", D.TheTime>

C.NegativeTime.is(value); // type guard

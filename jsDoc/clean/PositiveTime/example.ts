import { C, D, E } from "@scripts";

const result = C.PositiveTime.create(D.createTime(1, "second"));

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"positive-time", D.TheTime>>
}

const value = C.PositiveTime.createOrThrow(D.createTime(500, "millisecond"));
// value: C.ConstrainedType<"positive-time", D.TheTime>

C.PositiveTime.is(value); // type guard

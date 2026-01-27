import { C, D, E } from "@scripts";

const theTime = D.createTheTime(3_600_000);

const result = C.Time.create(theTime);

if (E.isRight(result)) {
	// result: E.Right<"createNewType", C.Primitive<D.TheTime>>
}

const value = C.Time.createOrThrow(theTime);
// value: C.Primitive<D.TheTime>

C.Time.is(value); // type guard

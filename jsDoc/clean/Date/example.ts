import { C, D, E } from "@scripts";

const date = D.create("2024-01-01");
const result = C.Date.create(date);

if (E.isRight(result)) {
	// result: E.Right<"createNewType", C.Primitive<D.TheDate>>
}

const value = C.Date.createOrThrow(date);
// value: C.Primitive<D.TheDate>

C.Date.is(value); // type guard

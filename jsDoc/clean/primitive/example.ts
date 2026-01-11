import { C, E } from "@scripts";

const result = C.String.create("hello");

if (E.isRight(result)) {
	// result: E.EitherRight<"createNewType", C.Primitive<"hello">>
}

const value = C.Number.createOrThrow(42);
// C.Primitive<42>

const unknownValue: unknown = "world";
const maybe = C.String.createWithUnknown(unknownValue);
// E.EitherLeft<"createNewTypeError", DataParserError> | E.EitherRight<"createNewType", C.Primitive<string>>

const strictValue = C.String.createWithUnknownOrThrow("ok");
// C.Primitive<string>

const input = true ? C.Number.createOrThrow(42) : C.String.createOrThrow("value");

if (C.Number.is(input)) {
	// input: C.Primitive<number>
}

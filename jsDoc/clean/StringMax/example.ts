import { C, E } from "@scripts";

const TitleMax = C.StringMax(10);

const result = TitleMax.create("Hello");

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"string-max-10", "Hello">>
}

const title = TitleMax.createOrThrow("World");
// title: C.ConstrainedType<"string-max-10", "World">

TitleMax.is(title); // type guard

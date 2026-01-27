import { C, E } from "@scripts";

const result = C.Url.create("https://duplojs.dev");

if (E.isRight(result)) {
	// result: E.Right<"createConstrainedType", C.ConstrainedType<"url", "https://duplojs.dev">>
}

const url = C.Url.createOrThrow("https://example.com");
// url: C.ConstrainedType<"url", "https://example.com">

C.Url.is(url); // type guard

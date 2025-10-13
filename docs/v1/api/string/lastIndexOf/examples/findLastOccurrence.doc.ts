import { DString, pipe } from "@duplojs/utils";

const input = "test test test";
const result = pipe(
	input,
	DString.lastIndexOf("test"),
);
// result: 10

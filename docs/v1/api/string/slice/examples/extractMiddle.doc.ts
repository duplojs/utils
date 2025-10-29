import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["hello world", "test data", "foo bar"];
const result = pipe(
	input,
	DArray.map(DString.slice(0, 5)),
);
// result: ["hello", "test ", "foo b"]

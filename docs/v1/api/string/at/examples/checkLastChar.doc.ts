import { DArray, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["hello!", "world?", "test"];
const result = pipe(
	input,
	DArray.filter(
		innerPipe(
			DString.at(-1),
			(value) => value === "!" || value === "?",
		),
	),
);
// result: ["hello!", "world?"]

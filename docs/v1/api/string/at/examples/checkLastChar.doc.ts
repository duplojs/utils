import { DArray, DString, innerPipe, or, pipe, equal } from "@duplojs/utils";

const input = ["hello!", "world?", "test"];
const result = pipe(
	input,
	DArray.filter(
		innerPipe(
			DString.at(-1),
			or([equal("!"), equal("?")]),
		),
	),
);
// result: ["hello!", "world?"]

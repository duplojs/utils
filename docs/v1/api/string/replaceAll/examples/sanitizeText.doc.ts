import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["hello world world", "test test test"];
const result = pipe(
	input,
	DArray.map(DString.replaceAll(" ", "-")),
);
// result: ["hello-world-world", "test-test-test"]

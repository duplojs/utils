import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "python", "java"];
const result = pipe(
	input,
	DArray.filter(DString.endsWith("script")),
);
// result: ["javascript", "typescript"]

import { A, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "python", "java"];
const result = pipe(
	input,
	A.filter(DString.endsWith("script")),
);
// result: ["javascript", "typescript"]

import { A, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "python"];
const result = pipe(
	input,
	A.map(DString.search(/script/)),
	A.filter((index) => index !== undefined),
);
// result: [4, 4]

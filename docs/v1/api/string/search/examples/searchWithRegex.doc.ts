import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "python"];
const result = pipe(
	input,
	DArray.map(DString.search(/script/)),
	DArray.filter((index) => index !== undefined),
);
// result: [4, 4]

import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "coffeescript"];
const result = pipe(
	input,
	DArray.map(DString.replace(/script/, "lang")),
);
// result: ["javalang", "typelang", "coffeelang"]

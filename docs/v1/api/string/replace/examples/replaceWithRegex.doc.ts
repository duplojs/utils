import { A, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "coffeescript"];
const result = pipe(
	input,
	A.map(DString.replace(/script/, "lang")),
);
// result: ["javalang", "typelang", "coffeelang"]

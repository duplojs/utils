import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "coffeescript"];
const result = pipe(
	input,
	DArray.map(DString.slice(-6, Infinity)),
	DArray.join(" + "),
	DString.concat(" = script languages"),
);
// result: "script + script + script = script languages"

import { A, DString, pipe } from "@duplojs/utils";

const input = ["javascript", "typescript", "coffeescript"];
const result = pipe(
	input,
	A.map(DString.slice(-6, Infinity)),
	A.join(" + "),
	DString.concat(" = script languages"),
);
// result: "script + script + script = script languages"

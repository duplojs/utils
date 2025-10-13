import { DArray, DString, pipe } from "@duplojs/utils";

const input = "HyperText Markup Language";
const result = pipe(
	input,
	DString.split(" "),
	DArray.map(DString.charAt(0)),
	DArray.join(""),
	DString.toUpperCase,
);
// result: "HTML"

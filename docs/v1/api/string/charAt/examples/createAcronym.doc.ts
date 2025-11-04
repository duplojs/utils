import { DArray, DString, pipe } from "@duplojs/utils";

const input = "Hyper Text Markup Language";
const result = pipe(
	input,
	DString.split(" "),
	DArray.map(DString.charAt(0)),
	DArray.join(""),
	DString.toUpperCase,
);
// result: "HTML"

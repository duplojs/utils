import { A, DString, pipe } from "@duplojs/utils";

const input = "Hyper Text Markup Language";
const result = pipe(
	input,
	DString.split(" "),
	A.map(DString.charAt(0)),
	A.join(""),
	DString.toUpperCase,
);
// result: "HTML"

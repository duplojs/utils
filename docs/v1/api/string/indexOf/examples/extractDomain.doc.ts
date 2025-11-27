import { A, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["user@gmail.com", "admin@yahoo.com", "dev@gmail.com"];
const result = pipe(
	input,
	A.map(
		innerPipe(
			DString.indexOf("@"),
			(value) => value !== undefined ? value + 1 : 0,
		),
	),
	A.map(
		(element, { index }) => DString.substring(element, index),
	),
);
// result: ["gmail.com", "yahoo.com", "gmail.com"]

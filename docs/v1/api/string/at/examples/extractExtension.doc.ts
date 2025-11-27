import { A, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["file.txt", "image.png", "doc.pdf"];
const result = pipe(
	input,
	A.map(
		innerPipe(
			DString.split("."),
			A.at(-1),
		),
	),
);
// result: ["txt", "png", "pdf"]

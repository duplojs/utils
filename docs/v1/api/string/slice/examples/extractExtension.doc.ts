import { A, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["file.txt", "image.png", "document.pdf"];
const result = pipe(
	input,
	A.map(
		innerPipe(
			DString.slice(-3, Infinity),
			DString.toUpperCase,
		),
	),
);
// result: ["TXT", "PNG", "PDF"]

import { DArray, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["file.txt", "image.png", "doc.pdf"];
const result = pipe(
	input,
	DArray.map(
		innerPipe(
			DString.split("."),
			DArray.at(-1),
		),
	),
);
// result: ["txt", "png", "pdf"]

import { DArray, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["Section 1", "Section 2", "Section 3"];
const result = pipe(
	input,
	DArray.map(
		innerPipe(
			DString.concat("\n"),
			DString.concat(DString.repeat("-", 20)),
		),
	),
	DArray.join("\n"),
);
// result: "Section 1\n--------------------\nSection 2\n--------------------\nSection 3\n--------------------"

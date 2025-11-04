import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["5", "42", "100"];
const result = pipe(
	input,
	DArray.map(DString.padStart(5, "0")),
);
// result: ["00005", "00042", "00100"]

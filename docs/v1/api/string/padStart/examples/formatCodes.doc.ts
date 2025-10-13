import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["A", "B", "C"];
const result = pipe(
	input,
	DArray.map(DString.padStart(4, "#")),
	DArray.join(" - "),
);
// result: "###A - ###B - ###C"

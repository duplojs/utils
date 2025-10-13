import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["5", "42", "100"];
const result = pipe(
	input,
	DArray.map(DString.padEnd(5, "0")),
);
// result: ["50000", "42000", "10000"]

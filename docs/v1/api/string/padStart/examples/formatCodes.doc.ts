import { A, DString, pipe } from "@duplojs/utils";

const input = ["A", "B", "C"];
const result = pipe(
	input,
	A.map(DString.padStart(4, "#")),
	A.join(" - "),
);
// result: "###A - ###B - ###C"

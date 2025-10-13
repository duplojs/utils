import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["js", "ts", "go"];
const result = pipe(
	input,
	DArray.map(DString.padEnd(6, "*")),
	DArray.join(" | "),
);
// result: "js**** | ts**** | go****"

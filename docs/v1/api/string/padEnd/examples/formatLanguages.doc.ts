import { A, DString, pipe } from "@duplojs/utils";

const input = ["js", "ts", "go"];
const result = pipe(
	input,
	A.map(DString.padEnd(6, "*")),
	A.join(" | "),
);
// result: "js**** | ts**** | go****"

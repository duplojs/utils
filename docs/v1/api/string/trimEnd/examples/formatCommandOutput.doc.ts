import { DString, A, pipe, N } from "@duplojs/utils";

const commandOutput = `
Line 1
Line 2\t\t
Line 3
`;

const result = pipe(
	commandOutput,
	DString.split("\n"),
	A.map(DString.trimEnd),
	A.filter((line) => N.greaterThan(DString.length(line), 0)),
);

// result: ["Line 1", "Line 2", "Line 3"]

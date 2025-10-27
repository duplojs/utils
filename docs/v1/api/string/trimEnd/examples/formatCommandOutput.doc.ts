import { DString, DArray, pipe } from "@duplojs/utils";

const commandOutput = `
Line 1
Line 2\t\t
Line 3
`;

const result = pipe(
	commandOutput,
	DString.split("\n"),
	DArray.map(DString.trimEnd),
	DArray.filter((line) => line.length > 0),
);

// result: ["Line 1", "Line 2", "Line 3"]

import { DString, DArray, pipe, DNumber } from "@duplojs/utils";

const commandOutput = `
Line 1
Line 2\t\t
Line 3
`;

const result = pipe(
	commandOutput,
	DString.split("\n"),
	DArray.map(DString.trimEnd),
	DArray.filter((line) => DNumber.greaterThan(DString.length(line), 0)),
);

// result: ["Line 1", "Line 2", "Line 3"]

import { DString, DArray, pipe, DNumber } from "@duplojs/utils";

const configFile = `
  PORT=3000
  DATABASE_URL=postgres://localhost
  API_KEY=secret123
`;

const result = pipe(
	configFile,
	DString.split("\n"),
	DArray.map(DString.trim),
	DArray.filter(
		(value) => DNumber.greaterThan(
			DString.length(value),
			0,
		),
	),
);

// result: ["PORT=3000", "DATABASE_URL=postgres://localhost", "API_KEY=secret123"]

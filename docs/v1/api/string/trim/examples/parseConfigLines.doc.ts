import { DString, A, pipe, N } from "@duplojs/utils";

const configFile = `
  PORT=3000
  DATABASE_URL=postgres://localhost
  API_KEY=secret123
`;

const result = pipe(
	configFile,
	DString.split("\n"),
	A.map(DString.trim),
	A.filter(
		(value) => N.greaterThan(
			DString.length(value),
			0,
		),
	),
);

// result: ["PORT=3000", "DATABASE_URL=postgres://localhost", "API_KEY=secret123"]

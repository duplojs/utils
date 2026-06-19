import { P, pipe } from "@scripts";

const status = 200 as 200 | 404;

P.matchWithNumber(status, {
	200: () => "success",
	404: () => "missing",
}); // "success" | "missing"

pipe(
	status,
	P.matchWithNumber({
		200: (value) => `code: ${value}`,
		404: () => "not found",
	}),
); // string

const retry = P.matchWithNumber(
	status,
	{
		200: () => false,
		404: (value) => value === 404,
	},
); // boolean

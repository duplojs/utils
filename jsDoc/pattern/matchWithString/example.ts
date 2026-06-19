import { P, pipe } from "@scripts";

const status = "success" as "success" | "failure";

P.matchWithString(status, {
	success: () => 200,
	failure: () => 500,
}); // 200 | 500

pipe(
	status,
	P.matchWithString({
		success: (value) => value.toUpperCase(),
		failure: () => "retry",
	}),
); // string

const message = P.matchWithString(
	status,
	{
		success: (value) => `received: ${value}`,
		failure: (value) => `received: ${value}`,
	},
); // string

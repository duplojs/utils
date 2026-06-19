import { P, pipe } from "@scripts";

const status = "success" as "success" | "failure" | "pending";

P.matchWithStringOtherwise(
	status,
	{
		success: () => 200,
	},
	(value) => `unhandled: ${value}`,
); // number | string

pipe(
	status,
	P.matchWithStringOtherwise(
		{
			failure: () => "retry",
		},
		(value) => value,
	),
); // "retry" | "success" | "pending"

const message = P.matchWithStringOtherwise(
	status,
	{
		success: (value) => `handled: ${value}`,
		failure: undefined,
	},
	(value) => `fallback: ${value}`,
); // string

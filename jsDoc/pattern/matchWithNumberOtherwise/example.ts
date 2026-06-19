import { P, pipe } from "@scripts";

const status = 200 as 200 | 404 | 500;

P.matchWithNumberOtherwise(
	status,
	{
		200: () => "success",
	},
	(value) => `unhandled: ${value}`,
); // string

pipe(
	status,
	P.matchWithNumberOtherwise(
		{
			404: () => "missing",
		},
		(value) => value,
	),
); // "missing" | 200 | 500

const message = P.matchWithNumberOtherwise(
	status,
	{
		200: (value) => `handled: ${value}`,
		404: undefined,
	},
	(value) => `fallback: ${value}`,
); // string

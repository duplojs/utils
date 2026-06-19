import { C, pipe } from "@scripts";

const status = C.Number.createOrThrow(
	200 as 200 | 404 | 500,
);

C.matchWithNumberOtherwise(
	status,
	{
		200: () => "success",
	},
	() => "error",
); // string

pipe(
	status,
	C.matchWithNumberOtherwise(
		{
			404: () => "missing",
		},
		(value) => value,
	),
); // "missing" | C.Primitive<200 | 500>

const result = C.matchWithNumberOtherwise(
	status,
	{
		200: (value) => value,
		404: undefined,
	},
	(value) => value,
); // C.Primitive<200 | 404 | 500>

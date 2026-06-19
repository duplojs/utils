import { C, pipe } from "@scripts";

const status = C.String.createOrThrow(
	"success" as "success" | "failure" | "pending",
);

C.matchWithStringOtherwise(
	status,
	{
		success: () => 200,
	},
	() => 500,
); // number

pipe(
	status,
	C.matchWithStringOtherwise(
		{
			failure: () => "retry",
		},
		(value) => value,
	),
); // "retry" | C.Primitive<"success" | "pending">

const result = C.matchWithStringOtherwise(
	status,
	{
		success: (value) => value,
		failure: undefined,
	},
	(value) => value,
); // C.Primitive<"success" | "failure" | "pending">

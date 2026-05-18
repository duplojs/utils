import { E, pipe } from "@scripts";

const result1 = E.matchInformationOtherwise(
	E.right("success", 10),
	{
		success: (value) => value + 1,
	},
	() => "otherwise" as const,
);
// type: number | "otherwise"

const result2 = E.matchInformationOtherwise(
	E.left("failure", "error"),
	{},
	(value) => value,
);
// type: E.Left<"failure", "error">

const result3 = pipe(
	true
		? E.ok()
		: E.fail(),
	E.matchInformationOtherwise(
		{
			ok: () => "ok" as const,
		},
		() => "fallback" as const,
	),
);
// type: "ok" | "fallback"

const result4 = E.matchInformationOtherwise(
	42,
	{},
	(value) => value + 1,
);
// type: number

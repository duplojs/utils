import { E, pipe, type ExpectType } from "@duplojs/utils";

const fallbackFromLeft = E.matchInformationOtherwise(
	E.left("failure", "error"),
	{},
	(value) => value,
);

type fallbackFromLeftCheck = ExpectType<
	typeof fallbackFromLeft,
	E.Left<"failure", "error">,
	"strict"
>;

const pipedResult = pipe(
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

type pipedCheck = ExpectType<
	typeof pipedResult,
	"ok" | "fallback",
	"strict"
>;

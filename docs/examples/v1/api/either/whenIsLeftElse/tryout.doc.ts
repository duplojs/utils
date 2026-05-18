import { E, pipe, type ExpectType } from "@duplojs/utils";

const directResult = E.whenIsLeftElse(
	E.left("failure", "error"),
	(value) => value,
	() => "fallback",
);

type directCheck = ExpectType<
	typeof directResult,
	"error" | "fallback",
	"strict"
>;

const pipedResult = pipe(
	true
		? E.ok()
		: E.fail(),
	E.whenIsLeftElse(
		() => "left" as const,
		() => "else" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"left" | "else",
	"strict"
>;

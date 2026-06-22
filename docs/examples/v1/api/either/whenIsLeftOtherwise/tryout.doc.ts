import { E, pipe, type ExpectType } from "@duplojs/utils";

const directResult = E.whenIsLeftOtherwise(
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
	E.whenIsLeftOtherwise(
		() => "left" as const,
		() => "otherwise" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"left" | "otherwise",
	"strict"
>;

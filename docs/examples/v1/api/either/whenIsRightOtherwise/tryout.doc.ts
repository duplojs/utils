import { E, pipe, type ExpectType } from "@duplojs/utils";

const directResult = E.whenIsRightOtherwise(
	E.right("success", 10),
	(value) => value + 1,
	() => 0,
);

type directCheck = ExpectType<
	typeof directResult,
	number,
	"strict"
>;

const pipedResult = pipe(
	true
		? E.ok()
		: E.fail(),
	E.whenIsRightOtherwise(
		() => "right" as const,
		() => "otherwise" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"right" | "otherwise",
	"strict"
>;

import { E, pipe, type ExpectType } from "@duplojs/utils";

const selector = {
	success: true,
	failure: false,
} as const;

const input = true
	? E.right("success", 42 as const)
	: E.left("failure", "error" as const);

const directResult = E.whenIsSelectedOtherwise(
	input,
	selector,
	(value) => {
		type check = ExpectType<
			typeof value,
			42,
			"strict"
		>;
		return "matched" as const;
	},
	(value) => {
		type check = ExpectType<
			typeof value,
			E.Left<"failure", "error">,
			"strict"
		>;
		return "otherwise" as const;
	},
);

type directCheck = ExpectType<
	typeof directResult,
	"matched" | "otherwise",
	"strict"
>;

const pipedResult = pipe(
	input,
	E.whenIsSelectedOtherwise(
		selector,
		() => "matched" as const,
		() => "otherwise" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"matched" | "otherwise",
	"strict"
>;

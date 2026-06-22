import { E, pipe, type ExpectType } from "@duplojs/utils";

const input = true
	? undefined
	: "value" as const;

const directResult = E.whenIsNullishEmptyOtherwise(
	input,
	(value) => {
		type check = ExpectType<
			typeof value,
			undefined,
			"strict"
		>;
		return "matched" as const;
	},
	(value) => {
		type check = ExpectType<
			typeof value,
			"value",
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
	E.whenIsNullishEmptyOtherwise(
		() => "matched" as const,
		() => "otherwise" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"matched" | "otherwise",
	"strict"
>;

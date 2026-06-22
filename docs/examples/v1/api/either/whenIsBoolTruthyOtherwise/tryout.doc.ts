import { E, pipe, type ExpectType } from "@duplojs/utils";

const input = true
	? "value" as const
	: "" as const;

const directResult = E.whenIsBoolTruthyOtherwise(
	input,
	(value) => {
		type check = ExpectType<
			typeof value,
			"value",
			"strict"
		>;
		return "matched" as const;
	},
	(value) => {
		type check = ExpectType<
			typeof value,
			"",
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
	E.whenIsBoolTruthyOtherwise(
		() => "matched" as const,
		() => "otherwise" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"matched" | "otherwise",
	"strict"
>;

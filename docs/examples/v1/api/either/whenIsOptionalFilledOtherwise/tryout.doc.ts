import { E, pipe, type ExpectType } from "@duplojs/utils";

const input = true
	? "value" as const
	: undefined;

const directResult = E.whenIsOptionalFilledOtherwise(
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
			undefined,
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
	E.whenIsOptionalFilledOtherwise(
		() => "matched" as const,
		() => "otherwise" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"matched" | "otherwise",
	"strict"
>;

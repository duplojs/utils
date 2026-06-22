import { E, pipe, type ExpectType } from "@duplojs/utils";

const input = true
	? "" as const
	: "value" as const;

const directResult = E.whenIsBoolFalsyOtherwise(
	input,
	(value) => {
		type check = ExpectType<
			typeof value,
			"",
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
	E.whenIsBoolFalsyOtherwise(
		() => "matched" as const,
		() => "otherwise" as const,
	),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"matched" | "otherwise",
	"strict"
>;

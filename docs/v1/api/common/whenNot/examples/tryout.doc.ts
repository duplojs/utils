import { equal, type ExpectType, justReturn, whenNot } from "@duplojs/utils";

const input = true ? "true" : "false";

const result = whenNot(
	input,
	equal("true"),
	(value) => {
		type check = ExpectType<
			typeof value,
			"false",
			"strict"
		>;

		return false;
	},
);

type check = ExpectType<
	typeof result,
	"true" | false,
	"strict"
>;

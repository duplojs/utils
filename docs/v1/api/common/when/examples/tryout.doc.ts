import { when, equal, type ExpectType } from "@duplojs/utils";

const input = true ? "true" : "false";

const result = when(
	input,
	equal("true"),
	(value) => {
		type check = ExpectType<
			typeof value,
			"true",
			"strict"
		>;

		return true;
	},
);

type check = ExpectType<
	typeof result,
	true | "false",
	"strict"
>;

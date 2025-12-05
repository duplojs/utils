import { whenElse, equal, type ExpectType, justReturn } from "@duplojs/utils";

const input = true ? "true" : "false";

const result = whenElse(
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
	justReturn(false),
);

type check = ExpectType<
	typeof result,
	true | false,
	"strict"
>;

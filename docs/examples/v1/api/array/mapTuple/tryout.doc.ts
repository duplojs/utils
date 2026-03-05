import { A, type ExpectType } from "@duplojs/utils";

const input = ["alpha", "beta"] as const;
const result = A.mapTuple(
	input,
	(element) => {
		type check = ExpectType<
			typeof element,
			"alpha" | "beta",
			"strict"
		>;

		return element.length;
	},
);

type check = ExpectType<
	typeof result,
	[number, number],
	"strict"
>;

import { E, type ExpectType } from "@duplojs/utils";

const input = true
	? false
		? true
			? E.right("right-1", 1)
			: E.left("left-1", null)
		: E.right("right-2", 2)
	: E.left("left-2", 2);

const result = E.rightPipe(
	input,
	(value) => {
		type check = ExpectType<
			typeof value,
			1 | 2,
			"strict"
		>;
		return value;
	},
);

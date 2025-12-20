import { E, pipe, type ExpectType } from "@duplojs/utils";

const input = true
	? false
		? E.right("right-1", 1)
		: E.left("left-2", 2)
	: E.left("left-3", 3);

const result = pipe(
	input,
	E.whenHasInformation("right-1", (value) => {
		type check = ExpectType<
			typeof value,
			1,
			"strict"
		>;
		return value;
	}),
	E.whenHasInformation("left-2", (value) => {
		type check = ExpectType<
			typeof value,
			2,
			"strict"
		>;
		return value;
	}),
);

type check = ExpectType<
	typeof result,
	1 | 2 | E.EitherLeft<"left-3", 3>,
	"strict"
>;

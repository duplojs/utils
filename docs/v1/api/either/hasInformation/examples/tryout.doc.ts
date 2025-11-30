import { E, type ExpectType } from "@duplojs/utils";

const result = true
	? false
		? E.right("right-1", 1)
		: E.left("left-2", 2)
	: E.left("left-3", 3);

if (E.isLeft(result)) {
	type check = ExpectType<
		typeof result,
		E.EitherLeft<"left-2", 2> | E.EitherLeft<"left-3", 3>,
		"strict"
	>;

	if (E.hasInformation(result, "left-2")) {
		type check = ExpectType<
			typeof result,
			E.EitherLeft<"left-2", 2>,
			"strict"
		>;
	}
}

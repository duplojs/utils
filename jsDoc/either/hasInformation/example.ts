/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
import { E } from "@scripts";

const result = true
	? false
		? E.right("right-1", 1)
		: E.left("left-2", 2)
	: E.left("left-3", 3);

if (E.isLeft(result)) {
	// type: E.EitherLeft<"left-2", 2> | E.EitherLeft<"left-3", 3>

	if (E.hasInformation(result, "left-2")) {
		// type: E.EitherLeft<"left-2", 2>
	}
}

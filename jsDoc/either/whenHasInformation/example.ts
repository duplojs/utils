/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
/* eslint-disable arrow-body-style */
import { E, pipe } from "@scripts";

const input = true
	? false
		? E.right("right-1", 1)
		: E.left("left-2", 2)
	: E.left("left-3", 3);

const result = pipe(
	input,
	E.whenHasInformation("right-1", (value) => {
		// type: 1
		return value;
	}),
	E.whenHasInformation("left-2", (value) => {
		// type: 2
		return value;
	}),
);

// type: 1 | 2 | E.Left<"left-3", 3>

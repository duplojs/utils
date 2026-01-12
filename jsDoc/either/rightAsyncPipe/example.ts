/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
/* eslint-disable arrow-body-style */
import { E } from "@scripts";

const input = E.future(
	Promise.resolve(
		true
			? false
				? true
					? E.right("right-1", 1)
					: E.left("left-1", null)
				: E.right("right-2", 2)
			: E.left("left-2", 2),
	),
);

const result = E.rightAsyncPipe(
	input,
	(value) => {
		// type: 1 | 2
		return value;
	},
);

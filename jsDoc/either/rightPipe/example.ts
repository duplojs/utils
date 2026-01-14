/* eslint-disable arrow-body-style */
import { E } from "@scripts";

const input: (
	| E.EitherFail
	| E.EitherNullableEmpty
	| E.EitherRight<"right", 1>
) = E.right("right", 1);

const result = E.rightPipe(
	input,
	(value) => {
		// type: 1 | 2
		return value;
	},
);

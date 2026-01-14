/* eslint-disable arrow-body-style */
import { E } from "@scripts";

const input: Promise<
	| E.EitherFail
	| E.EitherNullableEmpty
	| E.EitherRight<"right", 1>
> = Promise.resolve(E.right("right", 1));

const result = E.rightAsyncPipe(
	input,
	(value) => {
		// type: 1 | 2
		return value;
	},
);

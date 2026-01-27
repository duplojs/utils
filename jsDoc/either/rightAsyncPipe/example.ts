/* eslint-disable arrow-body-style */
import { E } from "@scripts";

const input: Promise<
	| E.Fail
	| E.NullableEmpty
	| E.Right<"right", 1>
> = Promise.resolve(E.right("right", 1));

const result = E.rightAsyncPipe(
	input,
	(value) => {
		// type: 1 | 2
		return value;
	},
);

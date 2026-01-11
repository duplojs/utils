import { type AnyTuple } from "@scripts/common";
import { createTheTime } from "./createTheTime";
import { type TheTime } from "./types";
import { toTimeValue } from "./toTimeValue";

/**
 * {@include date/maxTime/index.md}
 */
export function maxTime<
	GenericInput extends AnyTuple<TheTime>,
>(input: GenericInput) {
	return createTheTime(
		Math.max(
			...input.map(toTimeValue),
		),
	);
}

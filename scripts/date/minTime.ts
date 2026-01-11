import { type AnyTuple } from "@scripts/common";
import { createTheTime } from "./createTheTime";
import { type TheTime } from "./types";
import { toTimeValue } from "./toTimeValue";

/**
 * {@include date/minTime/index.md}
 */
export function minTime<
	GenericInput extends AnyTuple<TheTime>,
>(input: GenericInput) {
	return createTheTime(
		Math.min(
			...input.map(toTimeValue),
		),
	);
}

import type { AnyTuple } from "@scripts/common/types/anyTuple";
import { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types";
import { toTimeValue } from "./toTimeValue";

/**
 * {@include date/maxTime/index.md}
 */
export function maxTime<
	GenericInput extends AnyTuple<TheTime | SerializedTheTime>,
>(input: GenericInput) {
	return TheTime.new(
		Math.max(
			...input.map(toTimeValue),
		),
	);
}

import type { AnyTuple } from "@scripts/common/types/anyTuple";
import { TheTime } from "./theTime";
import { toTimeValue } from "./toTimeValue";
import type { SerializedTheTime } from "./types";

/**
 * {@include date/minTime/index.md}
 */
export function minTime<
	GenericInput extends AnyTuple<TheTime | SerializedTheTime>,
>(input: GenericInput) {
	return TheTime.new(
		Math.min(
			...input.map(toTimeValue),
		),
	);
}

import type { AnyTuple } from "@scripts/common/types/anyTuple";
import { toTimestamp } from "./toTimestamp";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/min/index.md}
 */
export function min<
	GenericInput extends AnyTuple<TheDate | SerializedTheDate>,
>(input: GenericInput) {
	return TheDate.new(
		Math.min(
			...input.map(toTimestamp),
		),
	);
}

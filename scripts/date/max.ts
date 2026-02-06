import type { AnyTuple } from "@scripts/common/types/anyTuple";
import { TheDate } from "./theDate";
import { toTimestamp } from "./toTimestamp";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/max/index.md}
 */
export function max<
	GenericInput extends AnyTuple<TheDate | SerializedTheDate>,
>(input: GenericInput) {
	return TheDate.new(
		Math.max(
			...input.map(toTimestamp),
		),
	);
}

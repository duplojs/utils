import { type AnyTuple } from "@scripts/common";
import { createOrThrow } from "./createOrThrow";
import { toTimestamp } from "./toTimestamp";
import { type TheDate } from "./types";

/**
 * {@include date/min/index.md}
 */
export function min<
	GenericInput extends AnyTuple<TheDate>,
>(input: GenericInput) {
	return createOrThrow(
		Math.min(
			...input.map(toTimestamp),
		),
	);
}

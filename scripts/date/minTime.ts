import { type AnyTuple } from "@scripts/common";
import { createTheTime } from "./createTheTime";
import { toTimestamp } from "./toTimestamp";
import { type TheTime } from "./types";

export function minTime<
	GenericInput extends AnyTuple<TheTime>,
>(input: GenericInput) {
	return createTheTime(
		Math.min(
			...input.map(toTimestamp),
		),
	);
}

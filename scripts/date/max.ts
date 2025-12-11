import { type AnyTuple } from "@scripts/common";
import { createOrThrow } from "./createOrThrow";
import { toTimestamp } from "./toTimestamp";
import { type TheDate } from "./types";

export function max<
	GenericInput extends AnyTuple<TheDate>,
>(input: GenericInput) {
	return createOrThrow(
		Math.max(
			...input.map(toTimestamp),
		),
	);
}

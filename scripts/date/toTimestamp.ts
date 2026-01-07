import { theDateRegex, theTimeRegex } from "./constants";
import { makeSafeTimestamp } from "./makeSafeTimestamp";
import type { TheDate } from "./types";

export function toTimestamp<
	GenericInput extends TheDate,
>(input: GenericInput) {
	const match = input.startsWith("date")
		? input.match(theDateRegex)
		: input.match(theTimeRegex);
	const { value, sign } = match!.groups as Record<"value" | "sign", string>;

	return makeSafeTimestamp(
		Number(
			sign === "-"
				? `-${value}`
				: value,
		),
	);
}

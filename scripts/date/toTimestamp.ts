import { theDateRegex, theTimeRegex } from "./constants";
import { makeSafeTimestamp } from "./makeSafeTimestamp";
import type { TheDate, TheTime } from "./types";

export function toTimestamp<
	GenericInput extends TheDate | TheTime,
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

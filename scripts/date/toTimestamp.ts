import { serializeTheDateRegex } from "./constants";
import { makeSafeTimestamp } from "./makeSafeTimestamp";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/toTimestamp/index.md}
 */
export function toTimestamp<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput) {
	if (input instanceof TheDate) {
		return input.getTime();
	}

	const match = input.match(serializeTheDateRegex);
	const { value, sign } = match!.groups as Record<"value" | "sign", string>;

	return makeSafeTimestamp(
		Number(
			sign === "-"
				? `-${value}`
				: value,
		),
	);
}

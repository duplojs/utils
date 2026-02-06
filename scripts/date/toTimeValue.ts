import { makeSafeTimeValue } from "./makeSafeTimeValue";
import { TheTime } from "./theTime";
import { serializeTheTimeRegex } from "./constants";
import type { SerializedTheTime } from "./types";

/**
 * {@include date/toTimeValue/index.md}
 */
export function toTimeValue<
	GenericInput extends TheTime | SerializedTheTime,
>(input: GenericInput) {
	if (input instanceof TheTime) {
		return input.toNative();
	}

	const match = input.match(serializeTheTimeRegex);
	const { value, sign } = match!.groups as Record<"value" | "sign", string>;

	return makeSafeTimeValue(
		Number(
			sign === "-"
				? `-${value}`
				: value,
		),
	);
}

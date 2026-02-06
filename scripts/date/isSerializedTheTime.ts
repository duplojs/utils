import { serializeTheTimeRegex } from "./constants";
import { isSafeTimeValue } from "./isSafeTimeValue";
import type { SerializedTheTime } from "./types";

/**
 * {@include date/isSerializedTheTime/index.md}
 */
export function isSerializedTheTime(
	input: string,
): input is SerializedTheTime {
	const serializeTheTimeMatch = input.match(serializeTheTimeRegex);
	if (serializeTheTimeMatch) {
		const { value, sign } = serializeTheTimeMatch.groups as Record<"value" | "sign", string>;

		return isSafeTimeValue(
			Number(
				sign === "-"
					? `-${value}`
					: value,
			),
		);
	}

	return false;
}

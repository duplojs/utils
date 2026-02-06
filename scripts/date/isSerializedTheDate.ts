import { serializeTheDateRegex } from "./constants";
import { isSafeTimestamp } from "./isSafeTimestamp";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/isSerializedTheDate/index.md}
 */
export function isSerializedTheDate(
	input: string,
): input is SerializedTheDate {
	const serializeTheDateMatch = input.match(serializeTheDateRegex);
	if (serializeTheDateMatch) {
		const { value, sign } = serializeTheDateMatch.groups as Record<"value" | "sign", string>;

		return isSafeTimestamp(
			Number(
				sign === "-"
					? `-${value}`
					: value,
			),
		);
	}

	return false;
}

import { theTimeRegex } from "./constants";
import { isSafeTimestamp } from "./isSafeTimestamp";
import { type TheTime } from "./types";

export function isTime(
	input: string,
): input is TheTime {
	const theTimeMatch = input.match(theTimeRegex);
	if (theTimeMatch) {
		const { value, sign } = theTimeMatch.groups as Record<"value" | "sign", string>;

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

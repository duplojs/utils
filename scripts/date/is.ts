import { theDateRegex } from "./constants";
import { isSafeTimestamp } from "./isSafeTimestamp";
import { type TheDate } from "./types";

export function is(
	input: string,
): input is TheDate {
	const theDateMatch = input.match(theDateRegex);
	if (theDateMatch) {
		const { value, sign } = theDateMatch.groups as Record<"value" | "sign", string>;

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

import { TheTime } from "./theTime";

/**
 * {@include date/isTime/index.md}
 */
export function isTime(
	input: unknown,
): input is TheTime {
	if (input instanceof TheTime) {
		return true;
	}

	return false;
}

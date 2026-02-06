import { TheDate } from "./theDate";

/**
 * {@include date/is/index.md}
 */
export function is(
	input: unknown,
): input is TheDate {
	if (input instanceof TheDate) {
		return true;
	}

	return false;
}

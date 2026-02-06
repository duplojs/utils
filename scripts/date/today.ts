import { TheDate } from "./theDate";

/**
 * {@include date/today/index.md}
 */
export function today() {
	const timestamp = new Date().setUTCHours(0, 0, 0, 0);

	return TheDate.new(timestamp);
}

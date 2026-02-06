import { TheDate } from "./theDate";

/**
 * {@include date/now/index.md}
 */
export function now() {
	const timestamp = Date.now();

	return TheDate.new(timestamp);
}

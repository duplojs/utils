import { millisecondsInOneDay } from "./constants";
import { TheDate } from "./theDate";

/**
 * {@include date/tomorrow/index.md}
 */
export function tomorrow() {
	const timestamp = Date.now() + millisecondsInOneDay;

	return TheDate.new(timestamp);
}

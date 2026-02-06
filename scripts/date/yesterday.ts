import { millisecondsInOneDay } from "./constants";
import { TheDate } from "./theDate";

/**
 * {@include date/yesterday/index.md}
 */
export function yesterday() {
	const timestamp = Date.now() - millisecondsInOneDay;

	return TheDate.new(timestamp);
}

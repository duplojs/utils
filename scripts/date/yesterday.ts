import { millisecondsInOneDay } from "./constants";
import type { TheDate } from "./types";

/**
 * {@include date/yesterday/index.md}
 */
export function yesterday() {
	const timestamp = Date.now() - millisecondsInOneDay;

	return `date${timestamp}+` satisfies TheDate;
}

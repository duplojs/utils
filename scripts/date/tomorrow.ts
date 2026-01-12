import { millisecondsInOneDay } from "./constants";
import type { TheDate } from "./types";

/**
 * {@include date/tomorrow/index.md}
 */
export function tomorrow() {
	const timestamp = Date.now() + millisecondsInOneDay;

	return `date${timestamp}+` satisfies TheDate;
}

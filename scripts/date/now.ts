import type { TheDate } from "./types";

/**
 * {@include date/now/index.md}
 */
export function now() {
	const timestamp = Date.now();

	return `date${timestamp}+` satisfies TheDate;
}

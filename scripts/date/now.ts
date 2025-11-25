import type { TheDate } from "./types";

export function now() {
	const timestamp = Date.now();

	return `date${timestamp}+` satisfies TheDate;
}

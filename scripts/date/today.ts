import type { TheDate } from "./types";

export function today() {
	const timestamp = new Date().setUTCHours(0, 0, 0, 0);

	return `date${timestamp}+` satisfies TheDate;
}

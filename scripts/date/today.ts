import type { NewDate } from "./types";

export function today() {
	const todayInNumber = new Date().setUTCHours(0, 0, 0, 0);
	return new Date(todayInNumber).toISOString() as NewDate;
}

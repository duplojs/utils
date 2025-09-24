import type { NewDate } from "./types";

export function now() {
	return new Date(Date.now()).toISOString() as NewDate;
}

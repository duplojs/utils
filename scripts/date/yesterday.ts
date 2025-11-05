import { millisecondsInDay } from "./constants";
import type { TheDate } from "./types";

export function yesterday() {
	const timestamp = Date.now() - millisecondsInDay;

	return `date${timestamp}+` satisfies TheDate;
}

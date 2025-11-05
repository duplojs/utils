import { millisecondsInDay } from "./constants";
import type { TheDate } from "./types";

export function tomorrow() {
	const timestamp = Date.now() + millisecondsInDay;

	return `date${timestamp}+` satisfies TheDate;
}

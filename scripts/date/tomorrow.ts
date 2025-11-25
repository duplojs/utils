import { millisecondsInOneDay } from "./constants";
import type { TheDate } from "./types";

export function tomorrow() {
	const timestamp = Date.now() + millisecondsInOneDay;

	return `date${timestamp}+` satisfies TheDate;
}

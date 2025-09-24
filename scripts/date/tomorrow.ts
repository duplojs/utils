import { millisecondsInDay } from "./constants";
import type { NewDate } from "./types";

export function tomorrow() {
	return new Date(Date.now() + millisecondsInDay).toISOString() as NewDate;
}

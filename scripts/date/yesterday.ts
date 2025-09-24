import type { NewDate } from "./types";
import { millisecondsInDay } from "./constants";

export function yesterday(): NewDate {
	return new Date(Date.now() - millisecondsInDay).toISOString() as NewDate;
}

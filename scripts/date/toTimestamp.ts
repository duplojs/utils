import type { NewDate } from "./types";

export function toTimestamp<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate ? number : never;

export function toTimestamp(date: NewDate): any {
	return new Date(date).getTime();
}

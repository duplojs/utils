import type { NewDate } from "./types";

export function toNative(value: NewDate) {
	return new Date(value);
}

import type { NewDate } from "./types/newDate";
import type { DateObject } from "./types/dateObject";
import type { SerializedDate } from "./types/serializedDate";

export function create<
	GenericDateObject extends DateObject,
>(
	value: GenericDateObject
): NewDate<SerializedDate<GenericDateObject>> | undefined;

export function create(
	value: Date
): NewDate | undefined;

export function create(
	value: number
): NewDate | undefined;

export function create<
	GenericDateString extends string,
>(
	value: GenericDateString
): NewDate<GenericDateString> | undefined;

export function create(
	value: string
): NewDate | undefined;

export function create(value: DateObject | string | Date | number): any {
	if (typeof value === "string") {
		const nativeDate = new Date(value);

		if (isNaN(nativeDate.getTime())) {
			return undefined;
		}

		return nativeDate.toISOString();
	}

	if (value instanceof Date) {
		if (isNaN(value.getTime())) {
			return undefined;
		}
		return value.toISOString();
	}

	if (typeof value === "number") {
		const nativeDate = new Date(value);
		if (isNaN(nativeDate.getTime())) {
			return undefined;
		}
		return nativeDate.toISOString();
	}

	const parts = value;
	const dateString = parts.milliseconds
		? `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}.${parts.milliseconds}${parts.timezone}`
		: `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}${parts.timezone}`;

	const testDate = new Date(dateString);
	if (isNaN(testDate.getTime())) {
		return undefined;
	}

	return dateString;
}

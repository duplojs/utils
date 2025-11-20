import { kindHeritage } from "@scripts/common";
import { dateComponentsRegex, maxTimestamp, minTimestamp, theDateRegex } from "./constants";
import { type CreateDateInputString } from "./create";
import type { TheDate } from "./types";

export class CreateTheDateError extends kindHeritage("duplo-utils-invalide-input-format-date", [], Error) {
	public constructor() {
		super({}, ["invalide-input-format-date"]);
	}
}

function fromDateComponentsMatch(match: RegExpMatchArray) {
	const [
		,
		signStr,
		yearStr,
		monthStr,
		dayStr,
		hourStr,
		minuteStr,
		secondStr,
		millisecondStr,
	] = match;

	const yearValue = Number(yearStr);
	const monthValue = Number(monthStr);
	const dayValue = Number(dayStr);

	if (
		Number.isNaN(yearValue)
		|| Number.isNaN(monthValue)
		|| Number.isNaN(dayValue)
		|| monthValue < 1
		|| monthValue > 12
		|| dayValue < 1
		|| dayValue > 31
	) {
		throw new CreateTheDateError();
	}

	const hourValue = hourStr === undefined ? undefined : Number(hourStr);
	const minuteValue = minuteStr === undefined ? undefined : Number(minuteStr);
	const secondValue = secondStr === undefined ? undefined : Number(secondStr);
	const millisecondValue = millisecondStr === undefined ? undefined : Number(millisecondStr);

	if (
		(hourValue !== undefined && (Number.isNaN(hourValue) || hourValue < 0 || hourValue > 23))
		|| (minuteValue !== undefined && (Number.isNaN(minuteValue) || minuteValue < 0 || minuteValue > 59))
		|| (secondValue !== undefined && (Number.isNaN(secondValue) || secondValue < 0 || secondValue > 59))
		|| (
			millisecondValue !== undefined
			&& (Number.isNaN(millisecondValue) || millisecondValue < 0 || millisecondValue > 999)
		)
	) {
		throw new CreateTheDateError();
	}

	const signedYear = signStr === "-" ? -yearValue : yearValue;
	const date = new Date(0);

	date.setUTCFullYear(signedYear);
	date.setUTCMonth(monthValue - 1);
	date.setUTCDate(dayValue);
	date.setUTCHours(hourValue ?? 0);
	date.setUTCMinutes(minuteValue ?? 0);
	date.setUTCSeconds(secondValue ?? 0);
	date.setUTCMilliseconds(millisecondValue ?? 0);

	if (
		Number.isNaN(date.getTime())
		|| date.getUTCFullYear() !== signedYear
		|| date.getUTCMonth() !== monthValue - 1
		|| date.getUTCDate() !== dayValue
		|| (hourValue !== undefined && date.getUTCHours() !== hourValue)
		|| (minuteValue !== undefined && date.getUTCMinutes() !== minuteValue)
		|| (secondValue !== undefined && date.getUTCSeconds() !== secondValue)
		|| (millisecondValue !== undefined && date.getUTCMilliseconds() !== millisecondValue)
	) {
		throw new CreateTheDateError();
	}

	return date.getTime();
}

export function createOrThrow<
	GenericInput extends CreateDateInputString,
>(
	input: GenericInput,
): TheDate;

export function createOrThrow<
	GenericInput extends TheDate,
>(
	input: GenericInput,
): TheDate;

export function createOrThrow<
	GenericInput extends Date,
>(
	input: GenericInput,
): TheDate;

export function createOrThrow<
	GenericInput extends number,
>(
	input: GenericInput,
): TheDate;

export function createOrThrow(input: string | number | Date): TheDate {
	// number (timestamp)
	if (typeof input === "number") {
		if (
			!Number.isSafeInteger(input)
			|| input <= minTimestamp
			|| input >= maxTimestamp
		) {
			throw new CreateTheDateError();
		}

		const isNegative = input < 0;

		return `date${Math.abs(input)}${isNegative ? "-" : "+"}` satisfies TheDate;
	}

	// Date object
	if (input instanceof Date) {
		const timestamp = input.getTime();

		if (
			Number.isNaN(timestamp)
			|| !Number.isSafeInteger(timestamp)
			|| timestamp <= minTimestamp
			|| timestamp >= maxTimestamp
		) {
			throw new CreateTheDateError();
		}

		const isNegative = timestamp < 0;

		return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
	}

	if (typeof input === "string") {
		// TheDate (format: date{number}{+/-})
		const theDateMatch = input.match(theDateRegex);
		if (theDateMatch) {
			const [, timestampString, sign] = theDateMatch;
			const magnitude = Number(timestampString);

			if (!Number.isSafeInteger(magnitude)) {
				throw new CreateTheDateError();
			}

			const signedTimestamp = sign === "-" ? -magnitude : magnitude;

			if (signedTimestamp <= minTimestamp || signedTimestamp >= maxTimestamp) {
				throw new CreateTheDateError();
			}

			return input as TheDate;
		}

		// CreateDateInputString (format: 2024y-12m-25d)
		const dateStringMatch = input.match(dateComponentsRegex);
		if (!dateStringMatch) {
			throw new CreateTheDateError();
		}

		const timestamp = fromDateComponentsMatch(dateStringMatch);

		if (
			!Number.isSafeInteger(timestamp)
			|| timestamp <= minTimestamp
			|| timestamp >= maxTimestamp
		) {
			throw new CreateTheDateError();
		}

		const isNegative = timestamp < 0;

		return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
	}

	throw new CreateTheDateError();
}

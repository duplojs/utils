import { dateComponentsRegex, maxTimestamp, minTimestamp, theDateRegex } from "./constants";
import type { TheDate, IsLeapYear } from "./types";
import { type EitherError, type EitherSuccess, success, error } from "@scripts/either";

type Days1To28 = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28";
type Day29 = "29";

type ValidFebruaryDay<
	GenericYear extends `${"" | "-"}${number}`,
> = IsLeapYear<GenericYear> extends true
	? Days1To28 | Day29
	: Days1To28;

type CreateDateInputStringBase =
	| `${"" | "-"}${number}y-${number}m-${number}d`
	| `${"" | "-"}${number}y-${number}m-${number}d-${number}h`
	| `${"" | "-"}${number}y-${number}m-${number}d-${number}h-${number}mn`
	| `${"" | "-"}${number}y-${number}m-${number}d-${number}h-${number}mn-${number}s`
	| `${"" | "-"}${number}y-${number}m-${number}d-${number}h-${number}mn-${number}s-${number}ms`;

export type CreateDateInputString<
	GenericInput extends CreateDateInputStringBase = CreateDateInputStringBase,
> =
	GenericInput extends `${infer InferedYear extends `${"" | "-"}${number}`}y-2m-${infer InferedDay extends `${number}`}d${string}`
		? InferedDay extends ValidFebruaryDay<InferedYear>
			? GenericInput
			: never
		: GenericInput;

export type MayBe = EitherSuccess<TheDate> | EitherError<null>;

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

	const date = new Date(0);
	const isBeforeChrist = signStr === "-";
	const yearValue = Number(yearStr);

	date.setUTCFullYear(isBeforeChrist ? -yearValue : yearValue);
	date.setUTCMonth(Number(monthStr) - 1);
	date.setUTCDate(Number(dayStr));

	if (hourStr !== undefined) {
		date.setUTCHours(Number(hourStr));
	}

	if (minuteStr !== undefined) {
		date.setUTCMinutes(Number(minuteStr));
	}

	if (secondStr !== undefined) {
		date.setUTCSeconds(Number(secondStr));
	}

	if (millisecondStr !== undefined) {
		date.setUTCMilliseconds(Number(millisecondStr));
	}

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}

export function create<
	GenericInput extends CreateDateInputString,
>(
	input: GenericInput,
): TheDate;

export function create<
	GenericInput extends TheDate,
>(
	input: GenericInput,
): MayBe;

export function create<
	GenericInput extends Date,
>(
	input: GenericInput,
): MayBe;

export function create<
	GenericInput extends number,
>(
	input: GenericInput,
): MayBe;

export function create(input: string | number | Date): TheDate | MayBe {
	// number (timestamp)
	if (typeof input === "number") {
		if (
			!Number.isSafeInteger(input)
			|| input < minTimestamp
			|| input > maxTimestamp
		) {
			return error(null);
		}

		const isNegative = input < 0;

		return success(
			`date${Math.abs(input)}${isNegative ? "-" : "+"}` satisfies TheDate,
		);
	}

	// Date object
	if (input instanceof Date) {
		const timestamp = input.getTime();

		if (
			Number.isNaN(timestamp)
			|| !Number.isSafeInteger(timestamp)
			|| timestamp < minTimestamp
			|| timestamp > maxTimestamp
		) {
			return error(null);
		}

		const isNegative = timestamp < 0;

		return success(
			`date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate,
		);
	}

	// TheDate (format: date{number}{+/-})
	if (theDateRegex.test(input)) {
		return success(input as TheDate);
	}

	// CreateDateInputString (format: 2024y-12m-25d)
	const dateStringMatch = input.match(dateComponentsRegex)!;

	return fromDateComponentsMatch(dateStringMatch);
}

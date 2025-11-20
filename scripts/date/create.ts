import { type DEither } from "@scripts";
import { dateComponentsRegex, maxTimestamp, minTimestamp, theDateRegex } from "./constants";
import type { TheDate, IsLeapYear } from "./types";

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

type CreateDateInputString<
	GenericInput extends CreateDateInputStringBase = CreateDateInputStringBase,
> =
	GenericInput extends `${infer InferedYear extends `${"" | "-"}${number}`}y-2m-${infer InferedDay extends `${number}`}d${string}`
		? InferedDay extends ValidFebruaryDay<InferedYear>
			? GenericInput
			: never
		: GenericInput;

export type MayBeDate = DEither.EitherSuccess<TheDate> | DEither.EitherError<null>;

export function create<
	GenericInput extends CreateDateInputString,
>(
	input: GenericInput,
): TheDate;

export function create<
	GenericInput extends TheDate,
>(
	input: GenericInput,
): TheDate;

export function create<
	GenericInput extends Date,
>(
	input: GenericInput,
): TheDate;

export function create<
	GenericInput extends number,
>(
	input: GenericInput,
): TheDate;

export function create(input: string | number | Date): TheDate {
	let timestamp = 0;
	let isNegative = false;

	// number (timestamp)
	if (typeof input === "number") {
		if (!Number.isSafeInteger(input) || input < minTimestamp || input > maxTimestamp) {
			return "date0+" satisfies TheDate;
		}
		timestamp = input;
		isNegative = input < 0;
		return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
	}

	// Date object
	if (input instanceof Date) {
		timestamp = input.getTime();
		isNegative = timestamp < 0;
		return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
	}

	// TheDate (format: date{number}{+/-})
	const theDateMatch = input.match(theDateRegex);
	if (theDateMatch) {
		const [, timestampStr, sign] = theDateMatch;
		timestamp = parseInt(timestampStr!);
		isNegative = sign === "-";
		return `date${timestamp}${isNegative ? "-" : "+"}` satisfies TheDate;
	}

	// CreateDateInputString (format: 2024y-12m-25d)
	const dateStringMatch = input.match(dateComponentsRegex);
	if (!dateStringMatch) {
		return "date0+" satisfies TheDate;
	}

	const date = new Date(0);
	const [, signStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr, millisecondStr] = dateStringMatch;
	const isBeforeChrist = signStr === "-";

	const yearValue = parseInt(yearStr!);
	date.setUTCFullYear(isBeforeChrist ? -yearValue : yearValue);
	date.setUTCMonth(parseInt(monthStr!) - 1);
	date.setUTCDate(parseInt(dayStr!));

	if (hourStr !== undefined) {
		date.setUTCHours(parseInt(hourStr));
	}

	if (minuteStr !== undefined) {
		date.setUTCMinutes(parseInt(minuteStr));
	}

	if (secondStr !== undefined) {
		date.setUTCSeconds(parseInt(secondStr));
	}

	if (millisecondStr !== undefined) {
		date.setUTCMilliseconds(parseInt(millisecondStr));
	}

	timestamp = date.getTime();
	isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}

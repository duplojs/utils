import { type IsEqual, type And } from "@scripts/common";
import { isoTimeRegex, type maxTimeValue, millisecondInOneHour, millisecondInOneMinute, millisecondInOneWeek, millisecondsInOneDay, millisecondsInOneSecond, type minTimeValue, serializeTheTimeRegex } from "./constants";
import { isSafeTimeValue } from "./isSafeTimeValue";
import { type SerializedTheTime, type SpoolingTime } from "./types";
import * as DEither from "@scripts/either";
import { type IsGreater, type IsLess } from "@scripts/number";
import { TheTime } from "./theTime";

export type MayBeTime = DEither.Right<"time-created", TheTime> | DEither.Left<"time-created-error", null>;

type Units = "week" | "day" | "hour" | "minute" | "second" | "millisecond";

const unitsMapper: Record<Units, number> = {
	week: millisecondInOneWeek,
	day: millisecondsInOneDay,
	hour: millisecondInOneHour,
	minute: millisecondInOneMinute,
	second: millisecondsInOneSecond,
	millisecond: 1,
};

declare const SymbolForbiddenTime: unique symbol;

type ForbiddenTime<
	GenericInput extends number,
	GenericUnit extends Units,
> = IsEqual<GenericInput, number> extends true
	? { [SymbolForbiddenTime]: "Expect only literal value." }
	: (
		& (
			IsEqual<GenericUnit, "millisecond"> extends true
				? And<[
					IsGreater<GenericInput, typeof minTimeValue>,
					IsLess<GenericInput, typeof maxTimeValue>,
				]> extends true
					? GenericInput
					: { [SymbolForbiddenTime]: "Support that the milliseconds between -9007199254740991 and 9007199254740991." }
				: GenericInput
		)
		& (
			IsEqual<GenericUnit, "second"> extends true
				? And<[
					IsGreater<GenericInput, -9007199254740>,
					IsLess<GenericInput, 9007199254740>,
				]> extends true
					? GenericInput
					: { [SymbolForbiddenTime]: "Support that the seconds between -9007199254740 and 9007199254740." }
				: GenericInput
		)
		& (
			IsEqual<GenericUnit, "minute"> extends true
				? And<[
					IsGreater<GenericInput, -150119987579>,
					IsLess<GenericInput, 150119987579>,
				]> extends true
					? GenericInput
					: { [SymbolForbiddenTime]: "Support that the minutes between -150119987579 and 150119987579." }
				: GenericInput
		)
		& (
			IsEqual<GenericUnit, "hour"> extends true
				? And<[
					IsGreater<GenericInput, -2501999792>,
					IsLess<GenericInput, 2501999792>,
				]> extends true
					? GenericInput
					: { [SymbolForbiddenTime]: "Support that the hours between -2501999792 and 2501999792." }
				: GenericInput
		)
		& (
			IsEqual<GenericUnit, "day"> extends true
				? And<[
					IsGreater<GenericInput, -104249991>,
					IsLess<GenericInput, 104249991>,
				]> extends true
					? GenericInput
					: { [SymbolForbiddenTime]: "Support that the days between -104249991 and 104249991." }
				: GenericInput
		)
		& (
			IsEqual<GenericUnit, "week"> extends true
				? And<[
					IsGreater<GenericInput, -14892855>,
					IsLess<GenericInput, 14892855>,
				]> extends true
					? GenericInput
					: { [SymbolForbiddenTime]: "Support that the weeks between -14892855 and 14892855." }
				: GenericInput
	)
	);

/**
 * {@include date/createTime/index.md}
 */
export function createTime<
	GenericInput extends number,
	GenericUnit extends Units = "millisecond",
>(
	input: GenericInput & ForbiddenTime<GenericInput, GenericUnit>,
	unit: GenericUnit
): TheTime;

export function createTime<
	GenericInput extends number | TheTime | SpoolingTime | SerializedTheTime,
>(
	input: GenericInput
): MayBeTime;

export function createTime(
	input: SpoolingTime | number | string | TheTime,
	unit?: Units,
) {
	if (input instanceof TheTime) {
		return input;
	}

	if (typeof input === "number") {
		if (unit) {
			return TheTime.new(input * unitsMapper[unit]);
		}
		return createFromTimeValue(input * unitsMapper[unit ?? "millisecond"]);
	}

	if (typeof input === "string") {
		const serializeTheTimeMatch = input.match(serializeTheTimeRegex);

		if (!serializeTheTimeMatch) {
			return DEither.left("time-created-error", null);
		}

		const { value, sign } = serializeTheTimeMatch.groups as Record<"value" | "sign", string>;

		return createFromTimeValue(
			Number(
				sign === "-"
					? `-${value}`
					: value,
			),
		);
	}

	const {
		value = 0,
		week = 0,
		day = 0,
		hour = 0,
		minute = 0,
		second = 0,
		millisecond = 0,
	} = input;

	let fromValue = 0;
	if (typeof value === "number") {
		fromValue = value;
	} else {
		const theTimeMatch = value.match(isoTimeRegex);
		if (theTimeMatch) {
			const {
				sign = "+",
				hour,
				minute,
				second = 0,
				millisecond = 0,
			} = theTimeMatch!.groups as Partial<
				Record<
			"sign" | "hour" | "minute" | "second" | "millisecond",
					string
				>
			>;

			fromValue = (Number(hour) * millisecondInOneHour)
			+ (Number(minute) * millisecondInOneMinute)
			+ (Number(second) * millisecondsInOneSecond)
			+ Number(millisecond);

			fromValue = sign === "-"
				? -fromValue
				: fromValue;
		}
	}

	return createFromTimeValue(
		fromValue
		+ (week * millisecondInOneWeek)
		+ (day * millisecondsInOneDay)
		+ (hour * millisecondInOneHour)
		+ (minute * millisecondInOneMinute)
		+ (second * millisecondsInOneSecond)
		+ millisecond,
	);
}

function createFromTimeValue(input: number): MayBeTime {
	if (!isSafeTimeValue(input)) {
		return DEither.left("time-created-error", null);
	}

	return DEither.right(
		"time-created",
		TheTime.new(input),
	);
}

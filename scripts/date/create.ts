import { isoDateRegex, theDateRegex } from "./constants";
import { isSafeTimestamp } from "./isSafeTimestamp";
import type { Hour, IsLeapYear, IsSafeYear, Millisecond, Minute, Second, TheDate, MonthWithDay, SpoolingDate } from "./types";
import * as DEither from "@scripts/either";
import type * as DString from "@scripts/string";
import { type And, type IsEqual, type Not, type IsExtends, unwrap } from "@scripts/common";
import { applyTimezone } from "./applyTimezone";
import { is } from "./is";
import { toNative } from "./toNative";
import { createTheDate } from "./createTheDate";

export type MayBe = DEither.EitherRight<"date-created", TheDate> | DEither.EitherLeft<"date-created-error", null>;

type SafeDate = `${number}-${MonthWithDay}`;

declare const SymbolForbiddenDate: unique symbol;

type ForbiddenDate<
	GenericDate extends string,
> = And<[
	IsExtends<GenericDate, SafeDate>,
	Not<IsEqual<GenericDate, SafeDate>>,
]> extends true
	? (
		& (
			DString.Includes<GenericDate, "."> extends true
				? { [SymbolForbiddenDate]: "Year can't be includes a float number." }
				: GenericDate
		)
		& (
			GenericDate extends `${infer InferredYear extends number}-02-29`
				? IsLeapYear<InferredYear> extends true
					? GenericDate
					: { [SymbolForbiddenDate]: "Is not a leap year." }
				: GenericDate
		)
		& (
			GenericDate extends `${infer InferredYear extends number}-${MonthWithDay}`
				? IsSafeYear<InferredYear> extends true
					? GenericDate
					: { [SymbolForbiddenDate]: "Support that the years between -271820 and 275759." }
				: GenericDate
		)
	)
	: GenericDate;

interface SafeDateParams {
	hour?: Hour;
	minute?: Minute;
	second?: Second;
	millisecond?: Millisecond;
}

const safeDateRegex = /^(?<year>-?[0-9]+)-(?<monthWithDay>[0-1][0-9]-[0-3][0-9])$/;

export function create<
	GenericInput extends TheDate | Date | number,
>(
	input: GenericInput,
): MayBe;

export function create<
	GenericInput extends SpoolingDate,
>(
	input: GenericInput,
): MayBe;

export function create<
	GenericInput extends SafeDate,
>(
	input: GenericInput & ForbiddenDate<GenericInput>,
	params?: SafeDateParams
): TheDate;

export function create(
	input: Date | number | string | SpoolingDate,
	params?: SafeDateParams,
): MayBe | TheDate {
	if (typeof input === "number") {
		return createFromTimestamp(input);
	}

	if (input instanceof Date) {
		return createFromDate(input);
	}

	if (typeof input === "string" && is(input)) {
		return createFromTheDate(input);
	}

	const safeDateMatch = typeof input === "string" && input.match(safeDateRegex);

	if (safeDateMatch) {
		const { year, monthWithDay } = safeDateMatch.groups as Record<"year" | "monthWithDay", string>;
		const date = new Date(
			`0000-${monthWithDay}T${params?.hour ?? "00"}:${params?.minute ?? "00"}:${params?.second ?? "00"}.${params?.millisecond ?? "000"}Z`,
		);

		date.setUTCFullYear(Number(year));

		const timestamp = date.getTime();

		return `date${Math.abs(timestamp)}${timestamp < 0 ? "-" : "+"}`;
	}

	if (typeof input === "object") {
		let inputValueResult: MayBe | undefined = undefined;

		if (input.value instanceof Date) {
			inputValueResult = createFromDate(input.value);
		} else if (typeof input.value === "number") {
			inputValueResult = createFromTimestamp(input.value);
		} else if (is(input.value)) {
			inputValueResult = createFromTheDate(input.value);
		} else {
			const isoDateMatch = input.value.match(isoDateRegex);
			if (isoDateMatch) {
				const { year, month, date, hour, minute, second, millisecond } = isoDateMatch.groups as Partial<
					Record<
						"year" | "month" | "date" | "hour" | "minute" | "second" | "millisecond",
						string
					>
				>;

				inputValueResult = createFromTimestamp(
					Date.UTC(
						Number(year),
						Number(month) - 1,
						Number(date),
						Number(hour),
						Number(minute),
						Number(second),
						Number(millisecond),
					),
				);
			}
		}

		if (!inputValueResult || DEither.isLeft(inputValueResult)) {
			return inputValueResult || DEither.left("date-created-error", null);
		}

		const date = toNative(
			unwrap(inputValueResult),
		);

		void (input.year && date.setUTCFullYear(input.year));
		void (input.month && date.setMonth(input.month));
		void (input.day && date.setDate(input.day));
		void (input.hour && date.setHours(input.hour));
		void (input.minute && date.setMinutes(input.minute));
		void (input.second && date.setSeconds(input.second));
		void (input.millisecond && date.setMilliseconds(input.millisecond));

		const result = createFromDate(date);

		if (DEither.isLeft(result)) {
			return result;
		}

		const timezone = input.timezone;

		if (!timezone) {
			return result;
		}

		return DEither.whenIsLeft(
			DEither.safeCallback(
				() => DEither.right(
					"date-created",
					applyTimezone(unwrap(result), timezone),
				),
			),
			() => DEither.left("date-created-error", null),
		);
	}

	return DEither.left("date-created-error", null);
}

function createFromTimestamp(input: number): MayBe {
	if (!isSafeTimestamp(input)) {
		return DEither.left("date-created-error", null);
	}

	return DEither.right(
		"date-created",
		createTheDate(input),
	);
}

function createFromDate(input: Date): MayBe {
	return createFromTimestamp(input.getTime());
}

function createFromTheDate(input: TheDate): MayBe {
	const theDateMatch = input.match(theDateRegex);

	const { value, sign } = theDateMatch!.groups as Record<"value" | "sign", string>;

	return createFromTimestamp(
		Number(
			sign === "-"
				? `-${value}`
				: value,
		),
	);
}

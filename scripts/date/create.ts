import { theDateRegex } from "./constants";
import { isSafeTimestamp } from "./isSafeTimestamp";
import type { Hour, IsLeapYear, IsSafeYear, Millisecond, Minute, Second, TheDate } from "./types";
import { type EitherLeft, left, right, type EitherRight } from "@scripts/either";
import { type MonthWithDay } from "./types/month";
import type * as DString from "@scripts/string";

export type MayBe = EitherRight<"date-created", TheDate> | EitherLeft<"date-created-error", null>;

type SafeDate = `${number}-${MonthWithDay}`;

declare const SymbolForbiddenDate: unique symbol;

type ForbiddenDate<
	GenericDate extends SafeDate,
> = (
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
);

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
	GenericInput extends SafeDate,
>(
	input: GenericInput & ForbiddenDate<GenericInput>,
	params?: SafeDateParams
): TheDate;

export function create(
	input: Date | number | string,
	params?: SafeDateParams,
): MayBe | TheDate {
	if (input instanceof Date) {
		const timestamp = input.getTime();

		if (!isSafeTimestamp(timestamp)) {
			return left("date-created-error", null);
		}

		const isNegative = timestamp < 0;

		return right(
			"date-created",
			`date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`,
		);
	}

	if (typeof input === "number") {
		if (!isSafeTimestamp(input)) {
			return left("date-created-error", null);
		}

		const isNegative = input < 0;

		return right(
			"date-created",
			`date${Math.abs(input)}${isNegative ? "-" : "+"}`,
		);
	}

	const theDateMatch = typeof input === "string" && input.match(theDateRegex);

	if (theDateMatch) {
		const { value, sign } = theDateMatch.groups as Record<"value" | "sign", string>;
		const magnitude = Number(value);

		const timestamp = sign === "-" ? -magnitude : magnitude;

		if (!isSafeTimestamp(timestamp)) {
			return left("date-created-error", null);
		}

		return right(
			"date-created",
			input as TheDate,
		);
	}

	const safeDateMatch = typeof input === "string" && input.match(safeDateRegex);

	if (safeDateMatch) {
		const { year, monthWithDay } = safeDateMatch.groups as Record<"year" | "monthWithDay", string>;
		const date = new Date(
			`0000-${monthWithDay}T${params?.hour ?? "00"}:${params?.minute ?? "00"}:${params?.second ?? "00"}.${params?.millisecond ?? "000"}Z`,
		);

		date.setUTCFullYear(Number(year));

		const timestamp = date.getTime();

		if (!isSafeTimestamp(timestamp)) {
			return "date0+";
		}

		const isNegative = timestamp < 0;

		return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
	}

	return left("date-created-error", null);
}

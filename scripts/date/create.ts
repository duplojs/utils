import { theDateRegex } from "./constants";
import { isSafeTimestamp } from "./isSafeTimestamp";
import type { TheDate } from "./types";
import { type EitherError, type EitherSuccess, success, error } from "@scripts/either";

export type MayBe = EitherSuccess<TheDate> | EitherError<null>;

export function create<
	GenericInput extends TheDate | Date | number,
>(
	input: GenericInput,
) {
	// number (timestamp)
	if (typeof input === "number") {
		if (!isSafeTimestamp(input)) {
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

		if (!isSafeTimestamp(timestamp)) {
			return error(null);
		}

		const isNegative = timestamp < 0;

		return success(
			`date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate,
		);
	}

	// TheDate (format: date{number}{+/-})
	if (typeof input === "string") {
		const theDateMatch = input.match(theDateRegex);
		if (theDateMatch) {
			const { value, sign } = theDateMatch.groups as Record<"value" | "sign", string>;
			const magnitude = Number(value);

			const timestamp = sign === "-" ? -magnitude : magnitude;

			if (!isSafeTimestamp(timestamp)) {
				return error(null);
			}

			return success(input as TheDate);
		}
	}

	return error(null);
}

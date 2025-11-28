import { createErrorKind, kindHeritage } from "@scripts/common";
import { theDateRegex } from "./constants";
import type { TheDate } from "./types";
import { isSafeTimestamp } from "./isSafeTimestamp";

export class InvalidTheDateError extends kindHeritage(
	"invalid-the-Date-error",
	createErrorKind("invalid-the-Date-error"),
	Error,
) {
	public constructor(public theDate: TheDate) {
		super({}, ["TheDate is invalid."]);
	}
}

export function toTimestamp<
	GenericInput extends TheDate,
>(input: GenericInput) {
	const match = input.match(theDateRegex);

	if (!match) {
		throw new InvalidTheDateError(input);
	}

	const { value, sign } = match.groups as Record<"value" | "sign", string>;

	const timestamp = Number(
		sign === "-"
			? `-${value}`
			: value,
	);

	if (!isSafeTimestamp(timestamp)) {
		throw new InvalidTheDateError(input);
	}

	return timestamp;
}

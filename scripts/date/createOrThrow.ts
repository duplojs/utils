import { createErrorKind, kindHeritage, unwrap } from "@scripts/common";
import { create } from "./create";
import type { TheDate, SpoolingDate } from "./types";
import * as DEither from "@scripts/either";

export class CreateTheDateError extends kindHeritage(
	"create-the-date-error",
	createErrorKind("create-the-date-error"),
	Error,
) {
	public constructor(public input: string | Date | number | SpoolingDate) {
		const value = typeof input === "object" && "value" in input
			? JSON.stringify(input)
			: input.toString();

		super({}, [`Invalid date input: ${value}`]);
	}
}

export function createOrThrow<
	GenericInput extends TheDate | Date | number,
>(
	input: GenericInput,
): TheDate;

export function createOrThrow<
	GenericInput extends SpoolingDate,
>(
	input: GenericInput,
): TheDate;

export function createOrThrow(
	input: Date | number | string | SpoolingDate,
): TheDate {
	const result = create(input as never);

	if (DEither.isLeft(result)) {
		throw new CreateTheDateError(
			input,
		);
	}

	return unwrap(result);
}

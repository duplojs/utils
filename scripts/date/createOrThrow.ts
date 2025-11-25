import { kindHeritage, unwrap } from "@scripts/common";
import { create } from "./create";
import type { TheDate } from "./types";
import * as DEither from "@scripts/either";
import { createErrorKind } from "@scripts/common/errorKindNamespace";

export class CreateTheDateError extends kindHeritage(
	"create-the-date-error",
	createErrorKind("create-the-date-error"),
	Error,
) {
	public constructor(public input: TheDate | Date | number) {
		super({}, [`Invalid input: ${input.toString()}`]);
	}
}

export function createOrThrow<
	GenericInput extends TheDate | Date | number,
>(
	input: GenericInput,
) {
	const result = create(input);

	if (DEither.isLeft(result)) {
		throw new CreateTheDateError(input);
	}

	return unwrap(result);
}

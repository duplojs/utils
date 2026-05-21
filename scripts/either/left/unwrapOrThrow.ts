import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { createErrorKind } from "@scripts/common/errorKindNamespace";
import { kindClass } from "@scripts/common/kindClass";
import { type Left } from "./create";
import { isLeft } from "..";

export class NotLeftError extends kindClass(
	createErrorKind("not-left-error"),
	Error,
) {
	public constructor(
		public value: unknown,
	) {
		super(undefined, "Value is not Left.");
	}
}

/**
 * {@include either/unwrapLeftOrThrow/index.md}
 */
export function unwrapLeftOrThrow<
	GenericInput extends unknown,
>(
	input: GenericInput,
): Unwrap<Extract<GenericInput, Left>> {
	if (isLeft(input)) {
		return unwrap(input);
	}

	throw new NotLeftError(input);
}

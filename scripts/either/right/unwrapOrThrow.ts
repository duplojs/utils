import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { createErrorKind } from "@scripts/common/errorKindNamespace";
import { kindClass } from "@scripts/common/kindClass";
import { type Right } from "./create";
import { isRight } from "./is";

export class NotRightError extends kindClass(
	createErrorKind("not-right-error"),
	Error,
) {
	public constructor(
		public value: unknown,
	) {
		super(undefined, "Value is not Right.");
	}
}

/**
 * {@include either/unwrapRightOrThrow/index.md}
 */
export function unwrapRightOrThrow<
	GenericInput extends unknown,
>(
	input: GenericInput,
): Unwrap<Extract<GenericInput, Right>> {
	if (isRight(input)) {
		return unwrap(input);
	}

	throw new NotRightError(input);
}

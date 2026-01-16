import { createErrorKind } from "./errorKindNamespace";
import { kindHeritage } from "./kind";

export class AssertsError extends kindHeritage(
	"asserts-error",
	createErrorKind("asserts-error"),
	Error,
) {
	public constructor(
		public value: unknown,
	) {
		super({}, ["Asserts Error."]);
	}
}

/**
 * {@include common/asserts/index.md}
 */
export function asserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput,
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicate,
): asserts input is GenericPredicate {
	if (!predicate(input)) {
		throw new AssertsError(input);
	}
}

import { createErrorKind } from "./errorKindNamespace";
import { kindHeritage } from "./kind";
import { type AnyFunction, type AnyPredicate } from "./types";

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

/**
 * {@include common/forwardAsserts/index.md}
 */
export function forwardAsserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput,
>(
	predicate: (input: GenericInput) => input is GenericPredicate,
): (input: GenericInput) => GenericPredicate;

export function forwardAsserts<
	GenericInput extends unknown,
>(
	predicate: (input: GenericInput) => boolean,
): (input: GenericInput) => GenericInput;

export function forwardAsserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput,
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicate,
): GenericPredicate;

export function forwardAsserts<
	GenericInput extends unknown,
>(
	input: GenericInput,
	predicate: (input: GenericInput) => boolean,
): GenericInput;

export function forwardAsserts(
	...args: [unknown, AnyPredicate | AnyFunction]
		| [AnyPredicate | AnyFunction]
) {
	if (args.length === 1) {
		const [theFunction] = args;
		return (input: unknown) => forwardAsserts(input, theFunction);
	}
	const [input, theFunction] = args;

	if (!theFunction(input)) {
		throw new AssertsError(input);
	}

	return input;
}

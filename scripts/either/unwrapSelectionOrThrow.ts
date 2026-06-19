import { unwrap, type Unwrap, type GetKindValue, type Kind } from "@scripts/common";
import { createErrorKind } from "@scripts/common/errorKindNamespace";
import { kindClass } from "@scripts/common/kindClass";
import { type ForbiddenKey, type GetPropsWithValue } from "@scripts/object";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";

export class HasNotSelectedInformationError extends kindClass(
	createErrorKind("has-not-selected-information-error"),
	Error,
) {
	public constructor(
		public value: unknown,
		public selector: Record<string, boolean>,
	) {
		super(undefined, "Value information is not selected.");
	}
}

type Either = Right | Left;

type ForbiddenMoreKey<
	GenericInput extends unknown,
	GenericSelector extends Record<string, boolean>,
> = ForbiddenKey<
	GenericSelector,
	Extract<
		Exclude<
			keyof GenericSelector,
			GetKindValue<
				typeof informationKind,
				Extract<GenericInput, Either>
			>
		>,
		string
	>
>;

/**
 * {@include either/unwrapSelectionOrThrow/index.md}
 */
export function unwrapSelectionOrThrow<
	GenericInput extends unknown,
	GenericSelector extends Record<
		GetKindValue<
			typeof informationKind,
			Extract<
				GenericInput,
				Either
			>
		>,
		boolean
	>,
>(
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
): (input: GenericInput) => Unwrap<
	Extract<
		GenericInput,
		Kind<
			typeof informationKind.definition,
			Extract<
				| GetPropsWithValue<GenericSelector, true>
				| GetPropsWithValue<GenericSelector, boolean>,
				string
			>
		>
	>
>;

export function unwrapSelectionOrThrow<
	GenericInput extends unknown,
	const GenericSelector extends Record<
		GetKindValue<
			typeof informationKind,
			Extract<
				GenericInput,
				Either
			>
		>,
		boolean
	>,
>(
	input: GenericInput,
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
): Unwrap<
	Extract<
		GenericInput,
		Kind<
			typeof informationKind.definition,
			Extract<
				| GetPropsWithValue<GenericSelector, true>
				| GetPropsWithValue<GenericSelector, boolean>,
				string
			>
		>
	>
>;

export function unwrapSelectionOrThrow(
	...args: [unknown, Record<string, boolean>] | [Record<string, boolean>]
): any {
	if (args.length === 1) {
		const [selector] = args;

		return (input: unknown) => unwrapSelectionOrThrow(input, selector as never);
	}

	const [input, selector] = args;

	if (
		informationKind.has(input)
		&& selector[informationKind.getValue(input)] === true
	) {
		return unwrap(input);
	}

	throw new HasNotSelectedInformationError(input, selector);
}

import { createErrorKind, type GetKindValue, type Kind } from "@scripts/common";
import { kindClass } from "@scripts/common/kindClass";
import { type ForbiddenKey, type GetPropsWithValue } from "@scripts/object";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";

export class ForwardAssertsSelectionError extends kindClass(
	createErrorKind("forward-asserts-selection-error"),
	Error,
) {
	public constructor(
		public value: unknown,
		public selector: Record<string, boolean>,
	) {
		super(undefined, "Either information is not selected.");
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

type SelectedInput<
	GenericInput extends unknown,
	GenericSelector extends Record<string, boolean>,
> = (
	| Extract<
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
	| Exclude<GenericInput, Either>
);

/**
 * {@include either/forwardAssertsSelection/index.md}
 */
export function forwardAssertsSelection<
	GenericInput extends unknown,
	GenericSelector extends Record<
		GetKindValue<
			typeof informationKind,
			Extract<GenericInput, Either>
		>,
		boolean
	>,
>(
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
): (input: GenericInput) => Extract<
	SelectedInput<GenericInput, GenericSelector>,
	any
>;

export function forwardAssertsSelection<
	GenericInput extends unknown,
	const GenericSelector extends Record<
		GetKindValue<
			typeof informationKind,
			Extract<GenericInput, Either>
		>,
		boolean
	>,
>(
	input: GenericInput,
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
): Extract<
	SelectedInput<GenericInput, GenericSelector>,
	any
>;

export function forwardAssertsSelection(
	...args: [unknown, Record<string, boolean>] | [Record<string, boolean>]
): unknown {
	if (args.length === 1) {
		const [selector] = args;

		return (input: unknown) => forwardAssertsSelection(input, selector as never);
	}

	const [input, selector] = args;

	if (
		informationKind.has(input)
		&& selector[informationKind.getValue(input)] !== true
	) {
		throw new ForwardAssertsSelectionError(input, selector);
	}

	return input;
}

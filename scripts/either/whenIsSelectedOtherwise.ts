import { type AnyFunction, type GetKindValue, type Kind, type Unwrap, unwrap } from "@scripts/common";
import { type ForbiddenKey, type GetPropsWithValue } from "@scripts/object";
import { informationKind } from "./kind";
import { type Left } from "./left";
import { type Right } from "./right";

type Either = Right | Left;

type ForbiddenMoreKey<
	GenericInput extends unknown,
	GenericSelector extends Record<string, boolean>,
> = ForbiddenKey<
	GenericSelector,
	Extract<
		Exclude<
			keyof GenericSelector,
			GetKindValue<typeof informationKind, Extract<GenericInput, Either>>
		>,
		string
	>
>;

type SelectedKind<GenericSelector extends Record<string, boolean>> = Kind<
	typeof informationKind.definition,
	Extract<GetPropsWithValue<GenericSelector, true>, string>
>;

type CallbackSelectedKind<GenericSelector extends Record<string, boolean>> = Kind<
	typeof informationKind.definition,
	Extract<
		| GetPropsWithValue<GenericSelector, true>
		| GetPropsWithValue<GenericSelector, boolean>,
		string
	>
>;

/**
 * {@include either/whenIsSelectedOtherwise/index.md}
 */
export function whenIsSelectedOtherwise<
	GenericInput extends unknown,
	const GenericSelector extends Record<
		GetKindValue<typeof informationKind, Extract<GenericInput, Either>>,
		boolean
	>,
	const GenericOutput extends unknown,
	const GenericOtherwiseOutput extends unknown,
>(
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
	theFunction: (
		value: Unwrap<Extract<GenericInput, CallbackSelectedKind<GenericSelector>>>
	) => GenericOutput,
	otherwiseFunction: (
		value: Exclude<GenericInput, SelectedKind<GenericSelector>>
	) => GenericOtherwiseOutput,
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
export function whenIsSelectedOtherwise<
	GenericInput extends unknown,
	const GenericSelector extends Record<
		GetKindValue<typeof informationKind, Extract<GenericInput, Either>>,
		boolean
	>,
	const GenericOutput extends unknown,
	const GenericOtherwiseOutput extends unknown,
>(
	input: GenericInput,
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
	theFunction: (
		value: Unwrap<Extract<GenericInput, CallbackSelectedKind<GenericSelector>>>
	) => GenericOutput,
	otherwiseFunction: (
		value: Exclude<GenericInput, SelectedKind<GenericSelector>>
	) => GenericOtherwiseOutput,
): GenericOutput | GenericOtherwiseOutput;
export function whenIsSelectedOtherwise(
	...args: [unknown, Record<string, boolean>, AnyFunction, AnyFunction]
		| [Record<string, boolean>, AnyFunction, AnyFunction]
): any {
	if (args.length === 3) {
		const [selector, theFunction, otherwiseFunction] = args;

		return (input: unknown) => whenIsSelectedOtherwise(
			input,
			selector as never,
			theFunction,
			otherwiseFunction,
		);
	}

	const [input, selector, theFunction, otherwiseFunction] = args;

	if (
		informationKind.has(input)
		&& selector[informationKind.getValue(input)] === true
	) {
		return theFunction(unwrap(input));
	}

	return otherwiseFunction(input);
}

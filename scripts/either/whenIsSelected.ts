import { type AnyFunction, type Kind, type Unwrap, type GetKindValue, unwrap } from "@scripts/common";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
import { type ForbiddenKey, type GetPropsWithValue } from "@scripts/object";

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
 * {@include either/whenIsSelected/index.md}
 */
export function whenIsSelected<
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
	const GenericOutput extends unknown,
>(
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
	theFunction: (
		value: Unwrap<
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
		>
	) => GenericOutput,
): (input: GenericInput) => (
	| GenericOutput
	| Exclude<
		GenericInput,
		Kind<
			typeof informationKind.definition,
			Extract<
				GetPropsWithValue<GenericSelector, true>,
				string
			>
		>
	>
);

export function whenIsSelected<
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
	const GenericOutput extends unknown,
>(
	input: GenericInput,
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
	theFunction: (
		value: Unwrap<
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
		>
	) => GenericOutput,
): (
	| GenericOutput
	| Exclude<
		GenericInput,
		Kind<
			typeof informationKind.definition,
			Extract<
				GetPropsWithValue<GenericSelector, true>,
				string
			>
		>
	>
);

export function whenIsSelected(
	...args: [unknown, Record<string, boolean>, AnyFunction]
		| [Record<string, boolean>, AnyFunction]
): any {
	if (args.length === 2) {
		const [selector, theFunction] = args;

		return (input: unknown) => whenIsSelected(
			input,
			selector as never,
			theFunction,
		);
	}

	const [input, selector, theFunction] = args;

	if (
		informationKind.has(input)
		&& selector[informationKind.getValue(input)] === true
	) {
		return theFunction(unwrap(input));
	}

	return input;
}

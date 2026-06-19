import { type Right } from "./right";
import { type Left } from "./left";
import { unwrap, type Unwrap, type GetKindValue, type Kind } from "@scripts/common";
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
 * {@include either/unwrapSelection/index.md}
 */
export function unwrapSelection<
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
): (input: GenericInput) => (
	| Unwrap<
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

export function unwrapSelection<
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
): (
	| Unwrap<
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

export function unwrapSelection(
	...args: [unknown, Record<string, boolean>] | [Record<string, boolean>]
): any {
	if (args.length === 1) {
		const [selector] = args;

		return (input: unknown) => unwrapSelection(input, selector as never);
	}

	const [input, selector] = args;

	if (!informationKind.has(input)) {
		return input;
	}

	return selector[informationKind.getValue(input)] === true
		? unwrap(input)
		: input;
}

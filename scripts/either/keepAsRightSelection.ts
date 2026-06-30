import { type GetKindValue, type Kind, unwrap, type Unwrap } from "@scripts/common";
import { informationKind } from "./kind";
import { type GetPropsWithValue, type ForbiddenKey } from "@scripts/object";
import { isLeft, left, type Left } from "./left";
import { isRight, right, type Right } from "./right";

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
 * {@include either/keepAsRightSelection/index.md}
 */
export function keepAsRightSelection<
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
	selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>,
): (
	input: GenericInput,
) => GenericInput extends Either
	? GenericInput extends Kind<
		typeof informationKind.definition,
		Extract<
			| GetPropsWithValue<GenericSelector, true>
			| GetPropsWithValue<GenericSelector, boolean>,
			string
		>
	>
		? GenericInput extends Right
			? GenericInput
			: Right<
				GetKindValue<typeof informationKind, GenericInput>,
				Unwrap<GenericInput>
			>
		: Left<
			GetKindValue<typeof informationKind, GenericInput>,
			Unwrap<GenericInput>
		>
	: GenericInput;

export function keepAsRightSelection<
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
): GenericInput extends Either
	? GenericInput extends Kind<
		typeof informationKind.definition,
		Extract<
			| GetPropsWithValue<GenericSelector, true>
			| GetPropsWithValue<GenericSelector, boolean>,
			string
		>
	>
		? GenericInput extends Right
			? GenericInput
			: Right<
				GetKindValue<typeof informationKind, GenericInput>,
				Unwrap<GenericInput>
			>
		: Left<
			GetKindValue<typeof informationKind, GenericInput>,
			Unwrap<GenericInput>
		>
	: GenericInput;

export function keepAsRightSelection(
	...args: [unknown, Record<string, boolean>] | [Record<string, boolean>]
): any {
	if (args.length === 1) {
		const [selector] = args;

		return (input: unknown) => keepAsRightSelection(input, selector as never);
	}

	const [input, selector] = args;

	if (!informationKind.has(input)) {
		return input;
	}

	const information = informationKind.getValue(input);

	if (selector[information] === true) {
		if (isLeft(input)) {
			return right(information, unwrap(input));
		}

		return input;
	}

	if (isRight(input)) {
		return left(information, unwrap(input));
	}

	return input;
}

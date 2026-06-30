import { type GetKindValue, type Kind, type MaybeArray, unwrap, type Unwrap } from "@scripts/common";
import { informationKind } from "./kind";
import { isLeft, left, type Left } from "./left";
import { isRight, right, type Right } from "./right";
import { hasInformation } from "./hasInformation";

type Either = Right | Left;

/**
 * {@include either/keepAsRightByInformation/index.md}
 */
export function keepAsRightByInformation<
	GenericInput extends unknown,
	const GenericInformation extends (
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
>(
	information: GenericInformation | GenericInformation[],
): (
	input: GenericInput,
) => GenericInput extends Either
	? GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
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

export function keepAsRightByInformation<
	GenericInput extends unknown,
	const GenericInformation extends (
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
>(
	input: GenericInput,
	information: GenericInformation | GenericInformation[],
): GenericInput extends Either
	? GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
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

export function keepAsRightByInformation(
	...args: [unknown, MaybeArray<string>] | [MaybeArray<string>]
): any {
	if (args.length === 1) {
		const [information] = args;

		return (input: unknown) => keepAsRightByInformation(
			input,
			information as never,
		);
	}

	const [input, information] = args;

	if (hasInformation(input, information as never)) {
		if (isLeft(input)) {
			return right(
				informationKind.getValue(input),
				unwrap(input),
			);
		}

		return input;
	}

	if (isRight(input)) {
		return left(
			informationKind.getValue(input),
			unwrap(input),
		);
	}

	return input;
}

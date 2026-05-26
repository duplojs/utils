import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { type Kind } from "@scripts/common/kind";
import { type Left } from "./left";
import { type Right } from "./right";
import { type informationKind } from "./kind";
import { hasInformation } from "./hasInformation";
import { type MaybeArray } from "@scripts/common";

type Either = Right | Left;

/**
 * {@include either/unwrapByInformation/index.md}
 */
export function unwrapByInformation<
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
) => GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
	? Unwrap<GenericInput>
	: GenericInput;

export function unwrapByInformation<
	GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
>(
	input: GenericInput,
	information: GenericInformation | GenericInformation[],
): GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
	? Unwrap<GenericInput>
	: GenericInput;

export function unwrapByInformation(
	...args: [unknown, MaybeArray<string>] | [MaybeArray<string>]
): any {
	if (args.length === 1) {
		const [information] = args;

		return (input: unknown) => unwrapByInformation(
			input,
			information as never,
		);
	}

	const [input, information] = args;

	if (hasInformation(input, information as never)) {
		return unwrap(input);
	}

	return input;
}

import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { createErrorKind } from "@scripts/common/errorKindNamespace";
import { kindClass } from "@scripts/common/kindClass";
import { type Kind } from "@scripts/common/kind";
import { type Left } from "./left";
import { type Right } from "./right";
import { type informationKind } from "./kind";
import { hasInformation } from "./hasInformation";

export class HasNotInformationError extends kindClass(
	createErrorKind("has-not-information-error"),
	Error,
) {
	public constructor(
		public value: unknown,
		public information: string,
	) {
		super(undefined, `Value has not information "${information}".`);
	}
}

type Either = Right | Left;

/**
 * {@include either/unwrapByInformationOrThrow/index.md}
 */
export function unwrapByInformationOrThrow<
	GenericInput extends unknown,
	const GenericInformation extends string,
>(
	information: GenericInformation,
): (
	input: GenericInput,
) => Unwrap<
	Extract<
		GenericInput,
		Kind<typeof informationKind.definition, GenericInformation>
	>
>;

export function unwrapByInformationOrThrow<
	GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
>(
	input: GenericInput,
	information: GenericInformation,
): Unwrap<
	Extract<
		GenericInput,
		Kind<typeof informationKind.definition, GenericInformation>
	>
>;

export function unwrapByInformationOrThrow(
	...args: [unknown, string] | [string]
): any {
	if (args.length === 1) {
		const [information] = args;

		return (input: unknown) => unwrapByInformationOrThrow(
			input,
			information as never,
		);
	}

	const [input, information] = args;

	if (hasInformation(input, information as never)) {
		return unwrap(input);
	}

	throw new HasNotInformationError(input, information);
}

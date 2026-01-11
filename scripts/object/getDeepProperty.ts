import { type EligibleEqual } from "@scripts/common";
import { type FlatObject, type GetPropsWithValueExtends } from "./types";

type ObjectProjection<
	GenericInput extends object,
> = FlatObject<GenericInput> extends infer InferredResult extends object
	? Omit<
		Pick<
			InferredResult,
			GetPropsWithValueExtends<
				InferredResult,
				EligibleEqual
			>
		>,
		`${string}[${string}]${string}`
	>
	: never;

const regexExtractProperty = /([^.]*)(?:\.([^]*))?/;

/**
 * {@include object/getDeepProperty/index.md}
 */
export function getDeepProperty<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,

>(
	path: GenericPath
): (input: GenericInput) => GenericObjectProjection[GenericPath];

export function getDeepProperty<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
>(
	input: GenericInput,
	path: GenericPath
): GenericObjectProjection[GenericPath];

export function getDeepProperty(
	...args: [object, string] | [string]
) {
	if (args.length === 1) {
		const [path] = args;

		return (input: object) => getDeepProperty(input, path as never);
	}

	const [input, path] = args;

	const [_match, first, rest] = path.match(regexExtractProperty)!;

	const currentValue = input[first as never];

	if (rest) {
		return getDeepProperty(currentValue, rest as never);
	}

	return currentValue;
}

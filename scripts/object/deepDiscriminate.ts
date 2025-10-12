import { type EligibleEqual, equal, type MaybeArray } from "@scripts/common";
import { type UnFlatObject, type FlatObject } from "./types";
import { type GetPropsWithValueExtends } from "./types/getPropsWithValueExtends";
import { getDeepProperty } from "./getDeepProperty";

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

export function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericValue extends EligibleEqual,
>(
	path: GenericPath,
	value: (
		| MaybeArray<(GenericValue & GenericObjectProjection[GenericPath])>
		| MaybeArray<GenericObjectProjection[GenericPath]>
	)
): (input: GenericInput) => input is Extract<
	GenericInput,
	UnFlatObject<{ [Prop in GenericPath]: GenericValue }>
>;

export function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericValue extends EligibleEqual,
>(
	input: GenericInput,
	path: GenericPath,
	value: (
		| MaybeArray<(GenericValue & GenericObjectProjection[GenericPath])>
		| MaybeArray<GenericObjectProjection[GenericPath]>
	)
): input is Extract<
	GenericInput,
	UnFlatObject<{ [Prop in GenericPath]: GenericValue }>
>;

export function deepDiscriminate(
	...args: [object, string, MaybeArray<EligibleEqual>]
		| [string, MaybeArray<EligibleEqual>]
) {
	if (args.length === 2) {
		const [path, value] = args;

		return (input: object) => deepDiscriminate(input, path as never, value as never);
	}

	const [input, path, value] = args;

	return equal(
		getDeepProperty(input, path as never),
		value as never,
	);
}

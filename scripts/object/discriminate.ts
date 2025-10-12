import { type EligibleEqual, equal, type MaybeArray } from "@scripts/common";
import { type GetPropsWithValueExtends } from "./types/getPropsWithValueExtends";

export function discriminate<
	GenericInput extends object,
	GenericKey extends GetPropsWithValueExtends<
		GenericInput,
		EligibleEqual
	>,
	GenericValue extends EligibleEqual,
>(
	key: GenericKey,
	value: (
		| MaybeArray<(GenericValue & GenericInput[GenericKey])>
		| MaybeArray<GenericInput[GenericKey]>
	)
): (input: GenericInput) => input is Extract<
	GenericInput,
	{ [Prop in GenericKey]: GenericValue }
>;

export function discriminate<
	GenericInput extends object,
	GenericKey extends GetPropsWithValueExtends<
		GenericInput,
		EligibleEqual
	>,
	GenericValue extends EligibleEqual,
>(
	input: GenericInput,
	key: GenericKey,
	value: (
		| MaybeArray<(GenericValue & GenericInput[GenericKey])>
		| MaybeArray<GenericInput[GenericKey]>
	)
): input is Extract<
	GenericInput,
	{ [Prop in GenericKey]: GenericValue }
>;

export function discriminate(
	...args: [object, string, MaybeArray<EligibleEqual>]
		| [string, MaybeArray<EligibleEqual>]
) {
	if (args.length === 2) {
		const [key, value] = args;

		return (input: object) => discriminate(input, key as never, value as never);
	}

	const [input, key, value] = args;

	return equal(
		input[key as never],
		value as never,
	);
}

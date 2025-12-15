import { type AnyObject, type ObjectKey, type SimplifyTopLevel } from "@scripts/common";
import { type Adaptor } from "@scripts/common/types/adaptor";
import { type GetPropsWithValue } from "./types/getPropsWithValue";
import { type PartialKeys } from "./types";

type ComputeResultWithOmitIsObject<
	GenericInput extends object,
	GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>>,
> = SimplifyTopLevel<
	Omit<GenericInput, GetPropsWithValue<GenericOmitValue, true>> extends infer InferredValue extends object
		? PartialKeys<
			InferredValue,
			Adaptor<
				| GetPropsWithValue<GenericOmitValue, boolean>
				| GetPropsWithValue<GenericOmitValue, boolean | undefined>
				| GetPropsWithValue<GenericOmitValue, true | undefined>,
				keyof InferredValue
			>
		>
		: never
>;

export function omit<
	GenericInput extends object,
	const GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[],
>(
	omitValue: GenericOmitValue
): (input: GenericInput) => GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>>
	? ComputeResultWithOmitIsObject<GenericInput, GenericOmitValue>
	: SimplifyTopLevel<Omit<GenericInput, Adaptor<GenericOmitValue, readonly ObjectKey[]>[number]>>;

export function omit<
	GenericInput extends object,
	const GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[],
>(
	input: GenericInput,
	omitValue: GenericOmitValue
): GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>>
	? ComputeResultWithOmitIsObject<GenericInput, GenericOmitValue>
	: SimplifyTopLevel<Omit<GenericInput, Adaptor<GenericOmitValue, readonly ObjectKey[]>[number]>>;

export function omit(
	...args:
		| [object, Record<string, boolean> | ObjectKey[]]
		| [Record<string, boolean> | ObjectKey[]]
) {
	if (args.length === 1) {
		const [omitValue] = args;

		return (input: object) => omit(input, omitValue);
	}

	const [input, omitValue] = args;

	const formattedOmitValue = omitValue instanceof Array
		? omitValue.reduce<Record<string, boolean>>(
			(acc, value) => {
				acc[value as never] = true;

				return acc;
			},
			{},
		)
		: omitValue;

	return Object.entries(input)
		.reduce<AnyObject>(
			(acc, [key, value]) => {
				if (formattedOmitValue[key] !== true) {
					acc[key] = value;
				}

				return acc;
			},
			{},
		);
}

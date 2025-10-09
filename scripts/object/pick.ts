import { type AnyObject, type ObjectKey, type SimplifyTopLevel } from "@scripts/common";
import { type Adaptor } from "@scripts/common/types/adaptor";
import { type GetPropsWithValue } from "./types/getPropsWithValue";

type ComputeResultWithPickIsObject<
	GenericInput extends object,
	GenericPickValue extends Partial<Record<keyof GenericInput, boolean>>,
> = SimplifyTopLevel<
	& Pick<
		GenericInput,
		Adaptor<
			GetPropsWithValue<GenericPickValue, true>,
			keyof GenericInput
		>
	>
	& Partial<
		Pick<
			GenericInput,
			Adaptor<
				| GetPropsWithValue<GenericPickValue, boolean>
				| GetPropsWithValue<GenericPickValue, boolean | undefined>
				| GetPropsWithValue<GenericPickValue, true | undefined>,
				keyof GenericInput
			>
		>
	>
>;

export function pick<
	GenericInput extends object,
	GenericValue extends boolean,
	GenericPickValue extends Partial<Record<keyof GenericInput, GenericValue>> | readonly (keyof GenericInput)[],
>(
	pickValue: GenericPickValue
): (input: GenericInput) => GenericPickValue extends Partial<Record<keyof GenericInput, boolean>>
	? ComputeResultWithPickIsObject<GenericInput, GenericPickValue>
	: SimplifyTopLevel<Pick<GenericInput, Adaptor<GenericPickValue, ObjectKey[]>[number]>>;

export function pick<
	GenericInput extends object,
	GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[],
>(
	input: GenericInput,
	pickValue: GenericPickValue
): GenericPickValue extends Partial<Record<keyof GenericInput, boolean>>
	? ComputeResultWithPickIsObject<GenericInput, GenericPickValue>
	: SimplifyTopLevel<Pick<GenericInput, Adaptor<GenericPickValue, ObjectKey[]>[number]>>;

export function pick(
	...args:
		| [object, Record<string, boolean> | ObjectKey[]]
		| [Record<string, boolean> | ObjectKey[]]
) {
	if (args.length === 1) {
		const [pickValue] = args;

		return (input: object) => pick(input, pickValue);
	}

	const [input, pickValue] = args;

	const formattedPickValue = pickValue instanceof Array
		? pickValue.reduce<Record<string, boolean>>(
			(acc, value) => {
				acc[value as never] = true;

				return acc;
			},
			{},
		)
		: pickValue;

	return Object.entries(input)
		.reduce<AnyObject>(
			(acc, [key, value]) => {
				if (formattedPickValue[key] === true) {
					acc[key] = value;
				}

				return acc;
			},
			{},
		);
}

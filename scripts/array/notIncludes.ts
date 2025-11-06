import { type RemoveFromUnion } from "@scripts/common";

export type NotIncludeValue = string | null | undefined | boolean | number | bigint | symbol;

export function notIncludes<
	GenericArrayValue extends unknown,
	const GenericNotIncludeValue extends RemoveFromUnion<
		Extract<GenericArrayValue, NotIncludeValue>,
		Exclude<NotIncludeValue, null | undefined>
	>,
>(
	value: GenericNotIncludeValue,
): (input: readonly GenericArrayValue[]) => input is Exclude<
	GenericArrayValue,
	GenericNotIncludeValue
>[];

export function notIncludes<
	GenericArrayValue extends unknown,
	const GenericNotIncludeValue extends RemoveFromUnion<
		Extract<GenericArrayValue, NotIncludeValue>,
		Exclude<NotIncludeValue, null | undefined>
	>,
>(
	input: readonly GenericArrayValue[],
	value: GenericNotIncludeValue,
): input is Exclude<
	GenericArrayValue,
	GenericNotIncludeValue
>[];

export function notIncludes(...args: [readonly unknown[], NotIncludeValue] | [NotIncludeValue]) {
	if (args.length === 1) {
		const [value] = args;

		return (array: unknown[]) => notIncludes(array, value as never);
	}

	const [array, value] = args;

	return !array.includes(value);
}


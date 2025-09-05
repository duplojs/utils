import { type AnyFunction, type SimplifyTopLevel } from "@scripts/common";

interface TransformersParams<
	GenericObjectInput extends object = object,
	GenericObjectOutput extends object = object,
> {
	transformValue<
		GenericKey extends keyof GenericObjectInput,
		GenericValue extends unknown,
	>(
		key: GenericKey,
		theFunction: (input: GenericObjectInput[GenericKey]) => GenericValue
	): TransformersParams<
		GenericObjectInput,
		& Omit<GenericObjectInput, GenericKey>
		& { [Prop in GenericKey]: GenericValue }
	>;
	"-objectOutput": GenericObjectOutput;
}

function createTransformersParams(
	input: object,
	lastValue: object,
): TransformersParams {
	return {
		"-objectOutput": lastValue,
		transformValue(key, theFunction) {
			return createTransformersParams(
				input,
				{
					...lastValue,
					[key]: theFunction(input[key]),
				},
			) as never;
		},
	};
}

export function transformProperties<
	GenericObjectInput extends object = object,
	GenericObjectOutput extends object = object,
>(
	transformers: (
		params: TransformersParams<
			GenericObjectInput,
			{}
		>
	) => TransformersParams<GenericObjectInput, GenericObjectOutput>,
): (obj: GenericObjectInput) => SimplifyTopLevel<GenericObjectOutput>;

export function transformProperties<
	GenericObjectInput extends object = object,
	GenericObjectOutput extends object = object,
>(
	obj: GenericObjectInput,
	transformers: (
		params: TransformersParams<
			GenericObjectInput,
			{}
		>
	) => TransformersParams<GenericObjectInput, GenericObjectOutput>,
): SimplifyTopLevel<GenericObjectOutput>;

export function transformProperties(
	...args:
		| [Record<string, any>, (params: TransformersParams) => TransformersParams]
		| [AnyFunction]
): any {
	if (args.length === 1) {
		const [transformers] = args;

		return (obj: object) => transformProperties(obj, transformers);
	}

	const [obj, transformers] = args;

	return transformers(
		createTransformersParams(obj, obj),
	)["-objectOutput"];
}

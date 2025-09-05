import { type AnyFunction, type SimplifyTopLevel } from "@scripts/common";
import { entries } from "./entries";

type TransformersObject<
	GenericObject extends object,
> = {
	[Prop in keyof GenericObject]?: (value: GenericObject[Prop]) => unknown
};

type ComputeResult<
	GenericObject extends object,
	GenericTransformer extends TransformersObject<GenericObject>,
> = SimplifyTopLevel<
	& {
		[Prop in keyof GenericTransformer]:
		GenericTransformer[Prop] extends AnyFunction
			? ReturnType<GenericTransformer[Prop]>
			: undefined
	}
	& Omit<GenericObject, keyof GenericTransformer>
>;

export function transformProperties<
	GenericObject extends object,
	GenericTransformer extends TransformersObject<GenericObject>,
>(
	transformers: GenericTransformer,
): (obj: GenericObject) => ComputeResult<GenericObject, GenericTransformer>;

export function transformProperties<
	GenericObject extends object,
	GenericTransformer extends TransformersObject<GenericObject>,
>(
	obj: GenericObject,
	transformers: GenericTransformer,
): ComputeResult<GenericObject, GenericTransformer>;

export function transformProperties(
	...args:
		| [Record<string, any>, TransformersObject<Record<string, any>>]
		| [TransformersObject<Record<string, any>>]
): any {
	if (args.length === 1) {
		const [transformers] = args;

		return (obj: object) => transformProperties(obj, transformers);
	}

	const [obj, transformers] = args;

	return entries(transformers)
		.reduce<object>(
			(acc, [key, value]) => ({
				...acc,
				[key]: value?.(obj[key]),
			}),
			obj,
		);
}

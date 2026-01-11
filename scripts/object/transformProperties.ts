import { type Adaptor, type FixDeepFunctionInfer, type AnyFunction, type SimplifyTopLevel } from "@scripts/common";

type TransformObject<
	GenericObjectInput extends object = object,
> = {
	[Prop in keyof GenericObjectInput]?: (input: GenericObjectInput[Prop]) => unknown
};

type ComputesResult<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<GenericObjectInput>,
> = SimplifyTopLevel<
	& Omit<GenericObjectInput, keyof GenericTransformObject>
	& {
		[Prop in keyof GenericTransformObject]: (
			| ReturnType<
				Adaptor<
					GenericTransformObject[Prop],
					AnyFunction
				>
			>
		| (
			undefined extends GenericTransformObject[Prop]
				? GenericObjectInput[Adaptor<Prop, keyof GenericObjectInput>]
				: never

		)
		)
	}
>;

/**
 * {@include object/transformProperties/index.md}
 */
export function transformProperties<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<NoInfer<GenericObjectInput>>,
>(
	transformObject: TransformObject<NoInfer<GenericObjectInput>> & GenericTransformObject,
): (obj: GenericObjectInput) => ComputesResult<NoInfer<GenericObjectInput>, NoInfer<GenericTransformObject>>;

export function transformProperties<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<GenericObjectInput>,
>(
	obj: GenericObjectInput,
	transformObject: FixDeepFunctionInfer<
		TransformObject<GenericObjectInput>,
		GenericTransformObject
	>,
): ComputesResult<GenericObjectInput, GenericTransformObject>;

export function transformProperties(
	...args:
		| [Record<string, any>, Partial<Record<string, AnyFunction>>]
		| [Partial<Record<string, AnyFunction>>]
): any {
	if (args.length === 1) {
		const [transformers] = args;

		return (obj: object) => transformProperties(obj, transformers);
	}

	const [obj, transformObject] = args;

	return Object.entries(transformObject)
		.reduce(
			(acc, [key, theFunction]) => {
				if (theFunction) {
					acc[key] = theFunction(acc[key]);
				}

				return acc;
			},
			{ ...obj },
		);
}

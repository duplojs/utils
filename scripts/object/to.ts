import { type FixDeepFunctionInfer, type AnyFunction, type SimplifyTopLevel, type Adaptor } from "@scripts/common";

type ShapeObject<
	GenericInput extends unknown = unknown,
> = {
	[Prop in string]?: (input: GenericInput) => unknown
};

type ComputesResult<
	GenericShapeObject extends ShapeObject<any>,
> = SimplifyTopLevel<
	{
		[Prop in keyof GenericShapeObject]: (
			| ReturnType<
				Adaptor<
					GenericShapeObject[Prop],
					AnyFunction
				>
			>
			| (
				undefined extends GenericShapeObject[Prop]
					? undefined
					: never
			)
		)
	}
>;

/**
 * {@include object/to/index.md}
 */
export function to<
	GenericInput extends unknown,
	GenericShapeObject extends ShapeObject<NoInfer<GenericInput>>,
>(
	shapeObject: ShapeObject<NoInfer<GenericInput>> & GenericShapeObject,
): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeObject>>;

export function to<
	GenericInput extends unknown,
	GenericShapeObject extends ShapeObject<GenericInput>,
>(
	input: GenericInput,
	shapeObject: FixDeepFunctionInfer<
		ShapeObject<GenericInput>,
		GenericShapeObject
	>,
): ComputesResult<GenericShapeObject>;

export function to(
	...args:
		| [unknown, ShapeObject]
		| [ShapeObject]
): any {
	if (args.length === 1) {
		const [shape] = args;

		return (input: unknown) => to(input, shape);
	}

	const [input, shapeObject] = args;

	return Object.entries(shapeObject)
		.reduce<Record<string, any>>(
			(acc, [key, theFunction]) => {
				acc[key] = theFunction?.(input);

				return acc;
			},
			{},
		);
}

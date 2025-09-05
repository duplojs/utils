import { type AnyFunction, type SimplifyTopLevel } from "@scripts/common";

function createShape(
	input: unknown,
	lastValue: object,
): ShapeParams {
	return {
		"-objectOutput": lastValue,
		addEntry(key, theFunction) {
			return createShape(
				input,
				{
					...lastValue,
					[key]: theFunction(input),
				},
			) as never;
		},
	};
}

interface ShapeParams<
	GenericInput extends unknown = unknown,
	GenericObjectOutput extends object = object,
> {
	addEntry<
		GenericKey extends string,
		GenericValue extends unknown,
	>(
		key: GenericKey,
		theFunction: (input: GenericInput) => GenericValue
	): ShapeParams<
		GenericInput,
		& GenericObjectOutput
		& { [Prop in GenericKey]: GenericValue }
	>;
	"-objectOutput": GenericObjectOutput;
}

export function to<
	GenericInput extends unknown,
	GenericOutput extends object,
>(
	shape: (params: ShapeParams<GenericInput, {}>) => ShapeParams<GenericInput, GenericOutput>,
): (input: GenericInput) => SimplifyTopLevel<GenericOutput>;

export function to<
	GenericInput extends unknown,
	GenericOutput extends object,
>(
	input: GenericInput,
	shape: (params: ShapeParams<GenericInput, {}>) => ShapeParams<GenericInput, GenericOutput>,
): SimplifyTopLevel<GenericOutput>;

export function to(
	...args:
		| [unknown, (params: ShapeParams) => ShapeParams]
		| [AnyFunction]
): any {
	if (args.length === 1) {
		const [shape] = args;

		return (input: unknown) => to(input, shape);
	}

	const [input, shape] = args;

	return shape(
		createShape(input, {}),
	)["-objectOutput"];
}

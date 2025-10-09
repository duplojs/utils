import { type IsEqual } from "@scripts/common/types/isEqual";

export type ExtractInterpolationId<
	GenericValue extends string,
> = GenericValue extends `${string}{${infer InferredInterpolationId}}${infer InferredEndValue}`
	? InferredInterpolationId | ExtractInterpolationId<InferredEndValue>
	: never;

export type ReplaceInterpolationIdByValues<
	GenericValue extends string,
	GenericInterpolationValues extends Record<string, string>,
> = GenericValue extends `${infer InferredStartValue}{${infer InferredInterpolationId}}${infer InferredEndValue}`
	? InferredInterpolationId extends keyof GenericInterpolationValues
		? `${InferredStartValue}${GenericInterpolationValues[InferredInterpolationId]}${ReplaceInterpolationIdByValues<InferredEndValue, GenericInterpolationValues>}`
		: `${InferredStartValue}${string}${ReplaceInterpolationIdByValues<InferredEndValue, GenericInterpolationValues>}`
	: GenericValue;

export type CreateInterpolationContract<
	GenericInterpolationFunction extends ((value: Record<string, string>) => string),
> = ReplaceInterpolationIdByValues<
	ReturnType<GenericInterpolationFunction>,
	{}
>;

export function createInterpolation<
	GenericValue extends string,
	GenericInterpolationId extends ExtractInterpolationId<GenericValue>,
	GenericStrict extends boolean,
>(value: GenericValue, strict?: GenericStrict): <
	GenericInterpolationMapperValue extends string,
	GenericInterpolationValues extends Record<GenericInterpolationId, GenericInterpolationMapperValue>,
>(
	...[interpolationValues]: IsEqual<GenericInterpolationId, never> extends true
		? []
		: [interpolationValues: GenericInterpolationValues]
) => IsEqual<GenericStrict, true> extends true
	? ReplaceInterpolationIdByValues<GenericValue, GenericInterpolationValues>
	: string;
export function createInterpolation(value: string, _strict?: true) {
	return (
		interpolationValues: Record<string, string>,
	): string => (
		interpolationValues
			? value.replace(
				/\{([^}]*)\}/g,
				(match, interpolationId: string) => interpolationValues[interpolationId]!,
			)
			: value
	);
}

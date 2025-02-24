import { type IsEqual } from "./isEqual";

export type ExtractInterpolationId<
	GenericValue extends string,
> = GenericValue extends `${string}{${infer InferedInterpolationId}}${infer InferedEndValue}`
	? InferedInterpolationId | ExtractInterpolationId<InferedEndValue>
	: never;

export type ReplaceInterpolationIdByValues<
	GenericValue extends string,
	GenericInterpolationValues extends Record<string, string>,
> = GenericValue extends `${infer InferedStartValue}{${infer InferedInterpolationId}}${infer InferedEndValue}`
	? InferedInterpolationId extends keyof GenericInterpolationValues
		? `${InferedStartValue}${GenericInterpolationValues[InferedInterpolationId]}${ReplaceInterpolationIdByValues<InferedEndValue, GenericInterpolationValues>}`
		: `${InferedStartValue}${string}${ReplaceInterpolationIdByValues<InferedEndValue, GenericInterpolationValues>}`
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
				(match, interpolationId: string) => interpolationValues[interpolationId],
			)
			: value
	);
}

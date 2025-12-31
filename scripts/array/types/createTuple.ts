import { type IsEqual } from "../../common/types/isEqual";

export type CreateTuple<
	GenericValue extends unknown,
	GenericLength extends number,
	GenericLastTuple extends unknown[] = [],
> = IsEqual<GenericLength, number> extends true
	? GenericValue[]
	: IsEqual<GenericLength, 0> extends true
		? []
		: [...GenericLastTuple, GenericValue] extends infer InferredResult extends any[]
			? IsEqual<InferredResult["length"], GenericLength> extends true
				? InferredResult
				: IsEqual<InferredResult["length"], 1000> extends true
					? [...InferredResult, ...GenericValue[]]
					: CreateTuple<
						GenericValue,
						GenericLength,
						InferredResult
					>
			: never;

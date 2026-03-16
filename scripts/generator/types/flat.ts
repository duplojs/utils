import { type IsEqual } from "@scripts/common";

export type FlatIterator<
	GenericValue extends unknown,
	GenericDepth extends number,
	Acc extends never[] = [],
> = IsEqual<Acc["length"], GenericDepth> extends true
	? GenericValue
	: IsEqual<Acc["length"], 250> extends true
		? GenericValue
		: GenericValue extends Iterable<infer InferredValue>
			? FlatIterator<InferredValue, GenericDepth, [...Acc, never]>
			: GenericValue;

export type FlatAsyncIterator<
	GenericValue extends unknown,
	GenericDepth extends number,
	Acc extends never[] = [],
> = IsEqual<Acc["length"], GenericDepth> extends true
	? GenericValue
	: IsEqual<Acc["length"], 250> extends true
		? GenericValue
		: GenericValue extends Iterable<infer InferredValue>
			? FlatIterator<InferredValue, GenericDepth, [...Acc, never]>
			: GenericValue extends AsyncIterable<infer InferredValue>
				? FlatIterator<InferredValue, GenericDepth, [...Acc, never]>
				: GenericValue;


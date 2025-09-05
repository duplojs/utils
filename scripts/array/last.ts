export function last<
	GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): GenericArray extends readonly [...any[], infer InferredValue]
		? InferredValue
		: GenericArray[number] | undefined {
	return array.at(-1) as never;
}

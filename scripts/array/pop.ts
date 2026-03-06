/**
 * {@include array/pop/index.md}
 */
export function pop<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): GenericArray extends readonly [...infer InferredRest, any]
	? InferredRest
	: GenericArray {
	return array.slice(0, -1) as never;
}

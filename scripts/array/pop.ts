import { type MaxElements, type RemoveKind } from "./types";

/**
 * {@include array/pop/index.md}
 */
export function pop<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): RemoveKind<GenericArray> extends readonly [...infer InferredRest, any]
	? (
		& InferredRest
		& (
			GenericArray extends MaxElements<infer InferredMax>
				? MaxElements<InferredMax>
				: unknown
		)
	)
	: GenericArray {
	return array.slice(0, -1) as never;
}

import { type AnyTuple } from "./types";

/**
 * {@include common/promiseAll/index.md}
 */
export function promiseAll<
	const GenericInput extends AnyTuple | Iterable<unknown>,
>(
	input: GenericInput,
): GenericInput extends AnyTuple
		? Promise<{ -readonly [Prop in keyof GenericInput]: Awaited<GenericInput[Prop]>; }>
		: GenericInput extends Iterable<infer InferredValue>
			? Promise<Awaited<InferredValue>[]>
			: never {
	return Promise.all(input as never) as never;
}

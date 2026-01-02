import { type FalsyValue, type UnionContain } from "./types";

export function falsy<
	GenericInput extends unknown,
>(input: GenericInput):
// @ts-expect-error force predicate
input is (
	| Extract<GenericInput, FalsyValue>
	| (
		UnionContain<GenericInput, string> extends true
			? ""
			: never
	)
	| (
		UnionContain<GenericInput, number> extends true
			? 0
			: never
	)
	| (
		UnionContain<GenericInput, bigint> extends true
			? 0n
			: never
	)
) {
	return !input;
}

import { type AnyPredicate, type AnyFunction, type IsEqual } from "./types";

type ExtractPredicate<
	GenericPredicatedInput extends readonly AnyFunction<any[], boolean>[],
> = GenericPredicatedInput extends readonly [
	(input: any, ...args: any[]) => input is infer InferredPredicate,
	...infer InferredRest extends readonly AnyPredicate[],
]
	? InferredRest extends readonly []
		? InferredPredicate
		: ExtractPredicate<InferredRest> extends infer InferredResult
			? IsEqual<InferredResult, never> extends true
				? never
				: InferredPredicate | InferredResult
			: never
	: never;

/**
 * {@include common/or/index.md}
 */
export function or<
	GenericInput extends unknown,
	const GenericArrayPredicatedInput extends readonly [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[],
	],
>(
	predicatedList: GenericArrayPredicatedInput
): (input: GenericInput) => input is Extract<
	GenericInput,
	ExtractPredicate<
		GenericArrayPredicatedInput
	>
>;

export function or<
	GenericInput extends unknown,
>(
	predicatedList: [
		(input: GenericInput) => boolean,
		(input: GenericInput) => boolean,
		...((input: GenericInput) => boolean)[],
	]
): (input: GenericInput) => boolean;

export function or<
	GenericInput extends unknown,
	const GenericArrayPredicatedInput extends readonly [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[],
	],
>(
	input: GenericInput,
	predicatedList: GenericArrayPredicatedInput
): input is Extract<
	GenericInput,
	ExtractPredicate<
		GenericArrayPredicatedInput
	>
>;

export function or<
	GenericInput extends unknown,
>(
	input: GenericInput,
	predicatedList: [
		(input: GenericInput) => boolean,
		(input: GenericInput) => boolean,
		...((input: GenericInput) => boolean)[],
	]
): boolean;

export function or(
	...args: [unknown, AnyFunction[]] | [AnyFunction[]]
): any {
	if (args.length === 1) {
		const [predicatedList] = args;

		return (input: string) => or(input, predicatedList as never);
	}

	const [input, predicatedList] = args;

	for (const predicate of predicatedList) {
		if (predicate(input)) {
			return true;
		}
	}

	return false;
}

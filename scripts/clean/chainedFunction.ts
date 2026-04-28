import { type AnyFunction, type Kind, type IsEqual, type MaybePromise, type MaybeAsyncGenerator, type GetKindValue } from "@scripts/common";
import * as EE from "@scripts/either";
import { createCleanKind } from "./kind";

export type FunctionOfChain = [string, AnyFunction];

export type FunctionChain = [
	FunctionOfChain,
	FunctionOfChain,
	...FunctionOfChain[],
];

export const chainEndKind = createCleanKind("chain-end");

export interface ChainEnd<
	GenericValue extends unknown = unknown,
> extends Kind<typeof chainEndKind.definition, GenericValue> {

}

export interface CreateChainEnd {
	(): ChainEnd<void>;
	<
		GenericValue extends unknown,
	>(
		value: GenericValue
	): ChainEnd<GenericValue>;
}

export type Link<
	GenericFunction extends FunctionOfChain = FunctionOfChain,
	GenericNext extends (Link | CreateChainEnd) = any,
> = <
	GenericOutput extends ReturnType<GenericFunction[1]>,
>(
	theFunction: (
		theFunction: { [Prop in GenericFunction[0]]: GenericFunction[1] }
	) => GenericOutput
) => (
	| (
		Extract<GenericOutput, Promise<unknown>> extends infer InferredPromise
			? IsEqual<InferredPromise, never> extends true
				? never
				: Awaited<InferredPromise> extends infer InferredValue extends unknown
					? AsyncGenerator<
						Extract<InferredValue, EE.Left>,
						[Exclude<InferredValue, EE.Left>, GenericNext]
					>
					: never
			: never
	)
	| (
		Exclude<GenericOutput, Promise<unknown>> extends infer InferredValue
			? IsEqual<InferredValue, never> extends true
				? never
				: Generator<
					Extract<InferredValue, EE.Left>,
					[Exclude<InferredValue, EE.Left>, GenericNext]
				>
			: never
	)
);

export type Chain<
	GenericFunctionChain extends readonly FunctionOfChain[],
> = GenericFunctionChain extends readonly []
	? CreateChainEnd
	: GenericFunctionChain extends [
		infer InferredFirst extends FunctionOfChain,
		...infer InferredRest extends readonly FunctionOfChain[],
	]
		? Chain<InferredRest> extends infer InferredRestResult extends (Link | CreateChainEnd)
			? Link<
				InferredFirst,
				InferredRestResult
			>
			: never
		: never;

declare const SymbolError: unique symbol;

type OutputMustContainChainEnd<
	GenericGenerator extends MaybeAsyncGenerator,
> = IsEqual<
	GenericGenerator extends MaybeAsyncGenerator<any, infer InferredReturnValue>
		? InferredReturnValue extends ChainEnd
			? InferredReturnValue
			: never
		: never,
	never
> extends true
	? { [SymbolError]: "Output must contain a chainEnd" }
	: unknown;

type ComputeResult<
	GenericGenerator extends MaybeAsyncGenerator,
> = GenericGenerator extends Generator<
	infer InferredIterateValue,
	infer InferredReturnValue
>
	? (
		| InferredIterateValue
		| InferredReturnValue
	) extends infer InferredResult
		? InferredResult extends ChainEnd
			? GetKindValue<typeof chainEndKind, InferredResult>
			: InferredResult
		: never
	: GenericGenerator extends AsyncGenerator<
		infer InferredIterateValue,
		infer InferredReturnValue
	>
		? Promise<
			Awaited<
				| InferredIterateValue
				| InferredReturnValue
			> extends infer InferredResult
				? InferredResult extends ChainEnd
					? GetKindValue<typeof chainEndKind, InferredResult>
					: InferredResult
				: never
		>
		: never;

function *breakIfLeft<
	GenericValue extends unknown,
>(
	value: GenericValue,
): Generator<
		Extract<GenericValue, EE.Left>,
		Exclude<GenericValue, EE.Left>
	> {
	if (EE.isLeft(value)) {
		yield value;
	}

	return value as never;
}

export interface ChainedFunctionParams {
	breakIfLeft: typeof breakIfLeft;
}

const chainedFunctionParams: ChainedFunctionParams = { breakIfLeft };

export type ChainedFunction<
	GenericValue extends FunctionChain = FunctionChain,
> = <
	GenericGenerator extends MaybeAsyncGenerator<
		MaybePromise<EE.Left>,
		MaybePromise<EE.Left | ChainEnd>
	>,
>(
	callback: (firstLink: Chain<GenericValue>, params: ChainedFunctionParams) => (
		& GenericGenerator
		& OutputMustContainChainEnd<
			GenericGenerator
		>
	)
) => ComputeResult<GenericGenerator>;

/**
 * {@include clean/chainedFunction/index.md}
 */
export function chainedFunction<
	const GenericFunction1 extends FunctionOfChain,
	const GenericFunction2 extends FunctionOfChain,
	const GenericFunctions extends FunctionOfChain[],
>(
	function1: GenericFunction1,
	function2: GenericFunction2,
	...functions: GenericFunctions
): ChainedFunction<[
		GenericFunction1,
		GenericFunction2,
		...GenericFunctions,
	]> {
	return (theFunction) => {
		const functionChain: FunctionChain = [function1, function2, ...functions];

		const createLink = (
			functionChain: FunctionChain,
		): Link => (theFunction) => {
			const [functionName, chainedFunction] = functionChain.shift()!;
			const result = theFunction({ [functionName]: chainedFunction });

			const nextLink = functionChain.length === 0
				? (value: unknown) => chainEndKind.setTo({}, value)
				: createLink(functionChain);

			if ((result as any) instanceof Promise) {
				return (async function *() {
					const awaitedResult = await result;

					if (EE.isLeft(awaitedResult)) {
						yield awaitedResult;
					}

					return [awaitedResult, nextLink];
				})() as never;
			}

			return (function *() {
				if (EE.isLeft(result)) {
					yield result;
				}

				return [result, nextLink];
			})() as never;
		};

		const generator = theFunction(
			createLink(functionChain) as never,
			chainedFunctionParams,
		);

		let result: undefined | IteratorResult<MaybePromise<EE.Left>, unknown> = undefined;

		if (Symbol.asyncIterator in generator) {
			return (async() => {
				try {
					result = await generator.next();
				} finally {
					await generator.return(undefined as never);
				}

				return (
					chainEndKind.has(result.value)
						? chainEndKind.getValue(result.value)
						: result.value
				);
			})() as never;
		}

		try {
			result = generator.next();
		} finally {
			generator.return(undefined as never);
		}

		return (
			chainEndKind.has(result.value)
				? chainEndKind.getValue(result.value)
				: result.value
		) as never;
	};
}

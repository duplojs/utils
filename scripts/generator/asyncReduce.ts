import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type ToLargeEnsemble } from "@scripts/common";

interface AsyncGeneratorReduceNext<
	GenericOutput extends unknown,
> {
	"-next": GenericOutput;
}

interface ArrayReduceExit<
	GenericOutput extends unknown,
> {
	"-exit": GenericOutput;
}

type ExitOrNext<
	GenericOutput extends unknown = unknown,
> = ArrayReduceExit<GenericOutput> | AsyncGeneratorReduceNext<GenericOutput>;

export interface AsyncGeneratorReduceFunctionParams<
	GenericElement extends unknown = unknown,
	GenericOutput extends unknown = unknown,
> {
	element: GenericElement;
	index: number;
	lastValue: GenericOutput;
	nextWithObject: GenericOutput extends object
		? (
			object1: GenericOutput,
			object2: Partial<GenericOutput>,
		) => AsyncGeneratorReduceNext<GenericOutput>
		: undefined;
	next(output: GenericOutput): AsyncGeneratorReduceNext<GenericOutput>;
	exit(output: GenericOutput): ArrayReduceExit<GenericOutput>;
}

export interface AsyncGeneratorReduceFromResult<
	GenericValue extends unknown = unknown,
> extends Kind<"generator-reduce-from">,
	WrappedValue<GenericValue> {

}

interface GetStartValueParams {
	from<
		GenericValue extends unknown,
	>(value: GenericValue): AsyncGeneratorReduceFromResult<GenericValue>;
}

const getStartValueParams: GetStartValueParams = {
	from: (value) => ({
		...createKind("generator-reduce-from"),
		...wrapValue(value),
	}),
};

export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: AsyncGeneratorReduceFunctionParams<
			GenericElement,
			ToLargeEnsemble<GenericReduceFrom>
		>
	) => ExitOrNext<ToLargeEnsemble<GenericReduceFrom>>,
): (iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>) => Promise<ToLargeEnsemble<GenericReduceFrom>>;

export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends AsyncGeneratorReduceFromResult,
>(
	getStartValue: (params: GetStartValueParams) => GenericReduceFrom,
	theFunction: (
		params: AsyncGeneratorReduceFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNext<Unwrap<GenericReduceFrom>>,
): (iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>) => Promise<Unwrap<GenericReduceFrom>>;

export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: AsyncGeneratorReduceFunctionParams<
			GenericElement,
			ToLargeEnsemble<GenericReduceFrom>
		>
	) => ExitOrNext<ToLargeEnsemble<GenericReduceFrom>>,
): Promise<ToLargeEnsemble<GenericReduceFrom>>;

export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends AsyncGeneratorReduceFromResult,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	getStartValue: (params: GetStartValueParams) => GenericReduceFrom,
	theFunction: (
		params: AsyncGeneratorReduceFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNext<Unwrap<GenericReduceFrom>>,
): Promise<Unwrap<GenericReduceFrom>>;

export function asyncReduce(
	...args: [unknown, AnyFunction]
		| [Iterable<unknown> | AsyncIterable<unknown>, unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [getStartValue, theFunction] = args;

		return (iterator: Iterable<unknown> | AsyncIterable<unknown>) => asyncReduce(
			iterator,
			getStartValue as never,
			theFunction as never,
		);
	}

	const [iterator, getStartValue, theFunction] = args;

	let lastValue = unwrap(
		typeof getStartValue === "function"
			? (getStartValue as AnyFunction)(getStartValueParams)
			: getStartValue,
	);

	return (async() => {
		let index = 0;
		for await (const element of iterator) {
			const result = theFunction({
				element,
				index,
				lastValue,
				nextWithObject: (
					(object1: object, object2: object) => ({
						"-next": override(object1, object2),
					})
				) as never,
				exit: (output: any) => ({ "-exit": output }),
				next: (output: any) => ({ "-next": output }),
			}) as ExitOrNext;

			if ("-exit" in result) {
				return result["-exit"];
			}

			lastValue = result["-next"];

			index++;
		}

		return lastValue;
	})();
}

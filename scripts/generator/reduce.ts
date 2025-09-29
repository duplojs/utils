import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type ToLargeEnsemble } from "@scripts/common";

interface GeneratorReduceNext<
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
> = ArrayReduceExit<GenericOutput> | GeneratorReduceNext<GenericOutput>;

export interface GeneratorReduceFunctionParams<
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
		) => GeneratorReduceNext<GenericOutput>
		: undefined;
	next(output: GenericOutput): GeneratorReduceNext<GenericOutput>;
	exit(output: GenericOutput): ArrayReduceExit<GenericOutput>;
}

export interface GeneratorReduceFromResult<
	GenericValue extends unknown = unknown,
> extends Kind<"generator-reduce-from">,
	WrappedValue<GenericValue> {

}

interface GetStartValueParams {
	from<
		GenericValue extends unknown,
	>(value: GenericValue): GeneratorReduceFromResult<GenericValue>;
}

const getStartValueParams: GetStartValueParams = {
	from: (value) => ({
		...createKind("generator-reduce-from"),
		...wrapValue(value),
	}),
};

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			ToLargeEnsemble<GenericReduceFrom>
		>
	) => ExitOrNext<ToLargeEnsemble<GenericReduceFrom>>,
): (iterator: Iterable<GenericElement>) => ToLargeEnsemble<GenericReduceFrom>;

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorReduceFromResult,
>(
	getStartValue: (params: GetStartValueParams) => GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNext<Unwrap<GenericReduceFrom>>,
): (iterator: Iterable<GenericElement>) => Unwrap<GenericReduceFrom>;

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean,
>(
	iterator: Iterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			ToLargeEnsemble<GenericReduceFrom>
		>
	) => ExitOrNext<ToLargeEnsemble<GenericReduceFrom>>,
): ToLargeEnsemble<GenericReduceFrom>;

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorReduceFromResult,
>(
	iterator: Iterable<GenericElement>,
	getStartValue: (params: GetStartValueParams) => GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNext<Unwrap<GenericReduceFrom>>,
): Unwrap<GenericReduceFrom>;

export function reduce(
	...args: [unknown, AnyFunction]
		| [Iterable<unknown>, unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [getStartValue, theFunction] = args;

		return (iterator: Iterable<unknown>) => reduce(
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

	let index = 0;
	for (const element of iterator) {
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
}

import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";

interface ArrayReduceNext<
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
> = ArrayReduceExit<GenericOutput> | ArrayReduceNext<GenericOutput>;
export interface ArrayReduceFunctionParams<
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
		) => ArrayReduceNext<GenericOutput>
		: undefined;
	next(output: GenericOutput): ArrayReduceNext<GenericOutput>;
	exit(output: GenericOutput): ArrayReduceExit<GenericOutput>;
}

export interface ArrayReduceFromResult<
	GenericValue extends unknown = unknown,
> extends Kind<"array-reduce-from">,
	WrappedValue<GenericValue> {

}

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends ArrayReduceFromResult,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNext<Unwrap<GenericReduceFrom>>,
): (array: readonly GenericElement[]) => Unwrap<GenericReduceFrom>;
export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends ArrayReduceFromResult,
>(
	array: readonly GenericElement[],
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNext<Unwrap<GenericReduceFrom>>,
): Unwrap<GenericReduceFrom>;
export function reduce(...args: [unknown, AnyFunction] | [readonly unknown[], unknown, AnyFunction]): any {
	if (args.length === 2) {
		const [startValue, theFunction] = args;

		return (array: unknown[]) => reduce(
			array,
			startValue as never,
			theFunction as never,
		);
	}

	const [array, startValue, theFunction] = args;

	let lastValue = unwrap(startValue);

	for (let index = 0; index < array.length; index++) {
		const element = array[index]!;

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
	}

	return lastValue;
}

reduce.from = function<
	GenericValue extends unknown,
>(value: GenericValue): ArrayReduceFromResult<GenericValue> {
	return {
		...createKind("array-reduce-from"),
		value,
	};
};

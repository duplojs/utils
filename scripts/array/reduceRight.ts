import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";

interface ArrayReduceRightNext<
	GenericOutput extends unknown,
> {
	"-next": GenericOutput;
}

interface ArrayReduceRightExit<
	GenericOutput extends unknown,
> {
	"-exit": GenericOutput;
}

type ExitOrNextRight<
	GenericOutput extends unknown = unknown,
> = ArrayReduceRightExit<GenericOutput> | ArrayReduceRightNext<GenericOutput>;

export interface ArrayReduceRightFunctionParams<
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
		) => ArrayReduceRightNext<GenericOutput>
		: undefined;
	next(output: GenericOutput): ArrayReduceRightNext<GenericOutput>;
	exit(output: GenericOutput): ArrayReduceRightExit<GenericOutput>;
}

export interface ArrayReduceRightFromResult<
	GenericValue extends unknown = unknown,
> extends Kind<"array-reduce-right-from">,
	WrappedValue<GenericValue> {}

export function reduceRight<
	GenericElement extends unknown,
	GenericReduceFrom extends ArrayReduceRightFromResult,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceRightFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNextRight<Unwrap<GenericReduceFrom>>,
): (array: readonly GenericElement[]) => Unwrap<GenericReduceFrom>;
export function reduceRight<
	GenericElement extends unknown,
	GenericReduceFrom extends ArrayReduceRightFromResult,
>(
	array: readonly GenericElement[],
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceRightFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNextRight<Unwrap<GenericReduceFrom>>,
): Unwrap<GenericReduceFrom>;
export function reduceRight(...args: [unknown, AnyFunction] | [readonly unknown[], unknown, AnyFunction]): any {
	if (args.length === 2) {
		const [startValue, theFunction] = args;

		return (array: unknown[]) => reduceRight(
			array,
			startValue as never,
			theFunction as never,
		);
	}

	const [array, startValue, theFunction] = args;

	let lastValue = unwrap(startValue);

	for (let index = array.length - 1; index >= 0; index--) {
		const element = array[index]!;

		const result = theFunction({
			element,
			index,
			lastValue,
			nextWithObject: (
				(object1: object, object2: object) => ({
					"-next": {
						...object1,
						...object2,
					},
				})
			) as never,
			exit: (output: any) => ({ "-exit": output }),
			next: (output: any) => ({ "-next": output }),
		}) as ExitOrNextRight;

		if ("-exit" in result) {
			return result["-exit"];
		}

		lastValue = result["-next"];
	}

	return lastValue;
}

reduceRight.from = function<
	GenericValue extends unknown,
>(value: GenericValue): ArrayReduceRightFromResult<GenericValue> {
	return {
		...createKind("array-reduce-right-from"),
		value,
	};
};

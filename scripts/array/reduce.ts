import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type ToLargeEnsemble } from "@scripts/common";

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

export type ArrayReduceExitOrNext<
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

const arrayReduceFromKind = createKind(
	"array-reduce-from",
);

export interface ArrayReduceFromResult<
	GenericValue extends unknown = unknown,
> extends Kind<typeof arrayReduceFromKind.definition>,
	WrappedValue<GenericValue> {

}

export function reduceFrom<
	GenericValue extends unknown,
>(value: GenericValue): ArrayReduceFromResult<GenericValue> {
	return arrayReduceFromKind.setTo(
		wrapValue(value),
	);
}

export type ArrayEligibleReduceFromValue = number | string | bigint | boolean | ArrayReduceFromResult;

export type ArrayReduceFromValue<
	GenericValue extends ArrayEligibleReduceFromValue,
> = GenericValue extends ArrayReduceFromResult
	? Unwrap<GenericValue>
	: ToLargeEnsemble<GenericValue>;

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends ArrayEligibleReduceFromValue,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericElement,
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceExitOrNext<ArrayReduceFromValue<GenericReduceFrom>>,
): (array: readonly GenericElement[]) => ArrayReduceFromValue<GenericReduceFrom>;

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
>(
	array: readonly GenericElement[],
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericElement,
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceExitOrNext<ArrayReduceFromValue<GenericReduceFrom>>,
): ArrayReduceFromValue<GenericReduceFrom>;

export function reduce(
	...args: [unknown, AnyFunction]
		| [readonly unknown[], unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [fromValue, theFunction] = args;

		return (array: unknown[]) => reduce(
			array,
			fromValue as never,
			theFunction as never,
		);
	}

	const [array, fromValue, theFunction] = args;

	let lastValue = unwrap(
		fromValue as any,
	);

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
		}) as ArrayReduceExitOrNext;

		if ("-exit" in result) {
			return result["-exit"];
		}

		lastValue = result["-next"];
	}

	return lastValue;
}

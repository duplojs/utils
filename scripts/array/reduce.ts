import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type IsEqual, type ToLargeEnsemble } from "@scripts/common";

export interface ArrayReduceNext<
	GenericOutput extends unknown = unknown,
> {
	"-next": GenericOutput;
}

export interface ArrayReduceExit<
	GenericOutput extends unknown = unknown,
> {
	"-exit": GenericOutput;
}

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
	exit<
		GenericExitValue extends unknown,
	>(output: GenericExitValue): ArrayReduceExit<GenericExitValue>;
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
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericElement,
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit,
): (array: readonly GenericElement[]) => ArrayReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, ArrayReduceExit> extends true
		? never
		: GenericExit["-exit"]
);

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>,
>(
	array: readonly GenericElement[],
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericElement,
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit,
): ArrayReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, ArrayReduceExit> extends true
		? never
		: GenericExit["-exit"]
);

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
		}) as ArrayReduceExit | ArrayReduceNext;

		if ("-exit" in result) {
			return result["-exit"];
		}

		lastValue = result["-next"];
	}

	return lastValue;
}

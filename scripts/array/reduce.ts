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
	GenericInputArray extends readonly unknown[] = unknown[],
	GenericOutput extends unknown = unknown,
> {
	element: GenericInputArray[number];
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
	self: GenericInputArray;
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
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends ArrayEligibleReduceFromValue,
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericInput,
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit,
): (input: GenericInput) => ArrayReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, ArrayReduceExit> extends true
		? never
		: GenericExit["-exit"]
);

export function reduce<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>,
>(
	input: GenericInput,
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericInput,
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit,
): ArrayReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, ArrayReduceExit> extends true
		? never
		: GenericExit["-exit"]
);

export function reduce(
	...args: [unknown, AnyFunction] | [readonly unknown[], unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [fromValue, theFunction] = args;

		return (input: unknown[]) => reduce(
			input,
			fromValue as never,
			theFunction as never,
		);
	}

	const [input, fromValue, theFunction] = args;

	let lastValue = unwrap(
		fromValue as any,
	);

	for (let index = 0; index < input.length; index++) {
		const element = input[index]!;

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
			self: input,
		}) as ArrayReduceExit | ArrayReduceNext;

		if ("-exit" in result) {
			return result["-exit"];
		}

		lastValue = result["-next"];
	}

	return lastValue;
}

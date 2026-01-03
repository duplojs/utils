import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { unwrap } from "@scripts/common/unwrap";
import { type ArrayReduceFunctionParams, type ArrayReduceFromResult, type ArrayReduceFromValue, type ArrayReduceExit, type ArrayReduceNext, reduceTools } from "./reduce";
import { type IsEqual } from "@scripts/common";

/**
 * {@include array/reduceRight/index.md}
 */
export function reduceRight<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
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

export function reduceRight<
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

export function reduceRight(
	...args: [unknown, AnyFunction] | [readonly unknown[], unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [fromValue, theFunction] = args;

		return (input: unknown[]) => reduceRight(
			input,
			fromValue as never,
			theFunction as never,
		);
	}

	const [input, fromValue, theFunction] = args;

	let lastValue = unwrap(
		fromValue as any,
	);

	for (let index = input.length - 1; index >= 0; index--) {
		const element = input[index]!;

		const result = theFunction({
			element,
			index,
			lastValue,
			self: input,
			...reduceTools,
		}) as ArrayReduceExit | ArrayReduceNext;

		if ("-exit" in result) {
			return result["-exit"];
		}

		lastValue = result["-next"];
	}

	return lastValue;
}

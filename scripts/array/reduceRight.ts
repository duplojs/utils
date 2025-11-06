import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type ArrayReduceFunctionParams, type ArrayReduceFromResult, type ArrayReduceFromValue, type ArrayReduceExit, type ArrayReduceNext } from "./reduce";
import { type IsEqual } from "@scripts/common";

export function reduceRight<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
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

export function reduceRight<
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

export function reduceRight(
	...args: [unknown, AnyFunction]
		| [readonly unknown[], unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [fromValue, theFunction] = args;

		return (array: unknown[]) => reduceRight(
			array,
			fromValue as never,
			theFunction as never,
		);
	}

	const [array, fromValue, theFunction] = args;

	let lastValue = unwrap(
		fromValue as any,
	);

	for (let index = array.length - 1; index >= 0; index--) {
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

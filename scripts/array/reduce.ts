import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { theKind, type TheKind } from "@scripts/common/theKind";
import { type TheValue } from "@scripts/common/theValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";

export interface ArrayReduceFunctionParams<
	GenericItem extends unknown = unknown,
	GenericOutput extends unknown = unknown,
> {
	item: GenericItem;
	index: number;
	lastValue: GenericOutput;
	mergeObject: GenericOutput extends object
		? (
			object1: GenericOutput,
			object2: Partial<GenericOutput>,
		) => GenericOutput
		: undefined;
}

export interface ArrayReduceFromResult<
	GenericValue extends unknown = unknown,
> extends TheKind<"array-reduce-from">,
	TheValue<GenericValue> {

}

export function arrayReduce<
	GenericItem extends unknown,
	GenericReduceFrom extends ArrayReduceFromResult,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericItem,
			Unwrap<GenericReduceFrom>
		>
	) => Unwrap<GenericReduceFrom>,
): (array: GenericItem[]) => Unwrap<GenericReduceFrom>;
export function arrayReduce<
	GenericItem extends unknown,
	GenericReduceFrom extends string | number | ArrayReduceFromResult,
>(
	array: GenericItem[],
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericItem,
			Unwrap<GenericReduceFrom>
		>
	) => Unwrap<GenericReduceFrom>,
): Unwrap<GenericReduceFrom>;
export function arrayReduce(...args: [unknown, AnyFunction] | [unknown[], unknown, AnyFunction]): any {
	if (args.length === 2) {
		const [startValue, theFunction] = args;

		return (array: unknown[]) => arrayReduce(
			array,
			startValue as never,
			theFunction as never,
		);
	}

	const [array, startValue, theFunction] = args;

	let lastValue = unwrap(startValue);

	for (let index = 0; index < array.length; index++) {
		const item = array[index]!;

		lastValue = theFunction({
			item,
			index,
			lastValue,
			mergeObject: (
				(object1: object, object2: object) => ({
					...object1,
					...object2,
				})
			) as never,
		});
	}

	return lastValue;
}

arrayReduce.from = function<
	GenericValue extends unknown,
>(value: GenericValue): ArrayReduceFromResult<GenericValue> {
	return {
		...theKind("array-reduce-from"),
		value,
	};
};

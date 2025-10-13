import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type GeneratorReduceFromValue, type GeneratorEligibleReduceFromValue, type GeneratorReduceExitOrNext, type GeneratorReduceFunctionParams } from "./reduce";

export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>,
): (
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>
) => Promise<GeneratorReduceFromValue<GenericReduceFrom>>;

export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>,
): Promise<GeneratorReduceFromValue<GenericReduceFrom>>;

export function asyncReduce(
	...args: [unknown, AnyFunction]
		| [Iterable<unknown> | AsyncIterable<unknown>, unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [fromValue, theFunction] = args;

		return (iterator: Iterable<unknown> | AsyncIterable<unknown>) => asyncReduce(
			iterator,
			fromValue as never,
			theFunction as never,
		);
	}

	const [iterator, fromValue, theFunction] = args;

	let lastValue = unwrap(
		fromValue as any,
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
			}) as GeneratorReduceExitOrNext;

			if ("-exit" in result) {
				return result["-exit"];
			}

			lastValue = result["-next"];

			index++;
		}

		return lastValue;
	})();
}

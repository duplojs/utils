import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type GeneratorReduceFromValue, type GeneratorEligibleReduceFromValue, type GeneratorReduceFunctionParams, type GeneratorReduceExit, type GeneratorReduceNext } from "./reduce";
import { type IsEqual, type MaybePromise } from "@scripts/common";

/**
 * {@include generator/asyncReduce/index.md}
 */
export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
	GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>,

>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => MaybePromise<GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit>,
): (
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>
) => Promise<GeneratorReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, GeneratorReduceExit> extends true
		? never
		: GenericExit["-exit"]
)>;

export function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
	GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => MaybePromise<GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit>,
): Promise<GeneratorReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, GeneratorReduceExit> extends true
		? never
		: GenericExit["-exit"]
)>;

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
			const result = await theFunction({
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
			}) as GeneratorReduceNext | GeneratorReduceExit;

			if ("-exit" in result) {
				return result["-exit"];
			}

			lastValue = result["-next"];

			index++;
		}

		return lastValue;
	})();
}

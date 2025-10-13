import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type ToLargeEnsemble } from "@scripts/common";

interface GeneratorReduceNext<
	GenericOutput extends unknown,
> {
	"-next": GenericOutput;
}

interface GeneratorReduceExit<
	GenericOutput extends unknown,
> {
	"-exit": GenericOutput;
}

export type GeneratorReduceExitOrNext<
	GenericOutput extends unknown = unknown,
> = GeneratorReduceExit<GenericOutput> | GeneratorReduceNext<GenericOutput>;

export interface GeneratorReduceFunctionParams<
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
		) => GeneratorReduceNext<GenericOutput>
		: undefined;
	next(output: GenericOutput): GeneratorReduceNext<GenericOutput>;
	exit(output: GenericOutput): GeneratorReduceExit<GenericOutput>;
}

const generatorReduceFromKind = createKind(
	"generator-reduce-from",
);

export interface GeneratorReduceFromResult<
	GenericValue extends unknown = unknown,
> extends Kind<typeof generatorReduceFromKind.definition>,
	WrappedValue<GenericValue> {

}

export function reduceFrom<
	GenericValue extends unknown,
>(value: GenericValue): GeneratorReduceFromResult<GenericValue> {
	return generatorReduceFromKind.addTo(
		wrapValue(value),
	);
}

export type GeneratorEligibleReduceFromValue = number | string | bigint | boolean | GeneratorReduceFromResult;

export type GeneratorReduceFromValue<
	GenericValue extends GeneratorEligibleReduceFromValue,
> = GenericValue extends GeneratorReduceFromResult
	? Unwrap<GenericValue>
	: ToLargeEnsemble<GenericValue>;

export function reduce<
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
): (iterator: Iterable<GenericElement>) => GeneratorReduceFromValue<GenericReduceFrom>;

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	iterator: Iterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>,
): GeneratorReduceFromValue<GenericReduceFrom>;

export function reduce(
	...args: [unknown, AnyFunction]
		| [Iterable<unknown>, unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [fromValue, theFunction] = args;

		return (iterator: Iterable<unknown>) => reduce(
			iterator,
			fromValue as never,
			theFunction as never,
		);
	}

	const [iterator, fromValue, theFunction] = args;

	let lastValue = unwrap(
		fromValue as any,
	);

	let index = 0;
	for (const element of iterator) {
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
}

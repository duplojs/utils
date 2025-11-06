import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type IsEqual, type ToLargeEnsemble } from "@scripts/common";

export interface GeneratorReduceNext<
	GenericOutput extends unknown = unknown,
> {
	"-next": GenericOutput;
}

export interface GeneratorReduceExit<
	GenericOutput extends unknown = unknown,
> {
	"-exit": GenericOutput;
}

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
	exit<
		GenericExitValue extends unknown,
	>(output: GenericExitValue): GeneratorReduceExit<GenericExitValue>;
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
	return generatorReduceFromKind.setTo(
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
	GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit,
): (iterator: Iterable<GenericElement>) => GeneratorReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, GeneratorReduceExit> extends true
		? never
		: GenericExit["-exit"]
);

export function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
	GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>,
>(
	iterator: Iterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit,
): GeneratorReduceFromValue<GenericReduceFrom> | (
	IsEqual<GenericExit, GeneratorReduceExit> extends true
		? never
		: GenericExit["-exit"]
);

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
		}) as GeneratorReduceExit | GeneratorReduceNext;

		if ("-exit" in result) {
			return result["-exit"];
		}

		lastValue = result["-next"];

		index++;
	}

	return lastValue;
}

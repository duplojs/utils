import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createKind, type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";
import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { override } from "@scripts/object";
import { type ToLargeEnsemble } from "@scripts/common";

interface ArrayReduceRightNext<
	GenericOutput extends unknown,
> {
	"-next": GenericOutput;
}

interface ArrayReduceRightExit<
	GenericOutput extends unknown,
> {
	"-exit": GenericOutput;
}

type ExitOrNextRight<
	GenericOutput extends unknown = unknown,
> = ArrayReduceRightExit<GenericOutput> | ArrayReduceRightNext<GenericOutput>;

export interface ArrayReduceRightFunctionParams<
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
		) => ArrayReduceRightNext<GenericOutput>
		: undefined;
	next(output: GenericOutput): ArrayReduceRightNext<GenericOutput>;
	exit(output: GenericOutput): ArrayReduceRightExit<GenericOutput>;
}

export interface ArrayReduceRightFromResult<
	GenericValue extends unknown = unknown,
> extends Kind<"array-reduce-right-from">,
	WrappedValue<GenericValue> {

}

interface GetStartValueParams {
	from<
		GenericValue extends unknown,
	>(value: GenericValue): ArrayReduceRightFromResult<GenericValue>;
}

const getStartValueParams: GetStartValueParams = {
	from: (value) => ({
		...createKind("array-reduce-right-from"),
		value,
	}),
};

export function reduceRight<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceRightFunctionParams<
			GenericElement,
			ToLargeEnsemble<GenericReduceFrom>
		>
	) => ExitOrNextRight<ToLargeEnsemble<GenericReduceFrom>>,
): (array: readonly GenericElement[]) => ToLargeEnsemble<GenericReduceFrom>;

export function reduceRight<
	GenericElement extends unknown,
	GenericReduceFrom extends ArrayReduceRightFromResult,
>(
	getStartValue: (params: GetStartValueParams) => GenericReduceFrom,
	theFunction: (
		params: ArrayReduceRightFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNextRight<Unwrap<GenericReduceFrom>>,
): (array: readonly GenericElement[]) => Unwrap<GenericReduceFrom>;

export function reduceRight<
	GenericElement extends unknown,
	GenericReduceFrom extends number | string | bigint | boolean,
>(
	array: readonly GenericElement[],
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceRightFunctionParams<
			GenericElement,
			ToLargeEnsemble<GenericReduceFrom>
		>
	) => ExitOrNextRight<ToLargeEnsemble<GenericReduceFrom>>,
): ToLargeEnsemble<GenericReduceFrom>;

export function reduceRight<
	GenericElement extends unknown,
	GenericReduceFrom extends ArrayReduceRightFromResult,
>(
	array: readonly GenericElement[],
	getStartValue: (params: GetStartValueParams) => GenericReduceFrom,
	theFunction: (
		params: ArrayReduceRightFunctionParams<
			GenericElement,
			Unwrap<GenericReduceFrom>
		>
	) => ExitOrNextRight<Unwrap<GenericReduceFrom>>,
): Unwrap<GenericReduceFrom>;

export function reduceRight(
	...args: [unknown, AnyFunction]
		| [readonly unknown[], unknown, AnyFunction]
): any {
	if (args.length === 2) {
		const [getStartValue, theFunction] = args;

		return (array: unknown[]) => reduceRight(
			array,
			getStartValue as never,
			theFunction as never,
		);
	}

	const [array, getStartValue, theFunction] = args;

	let lastValue = unwrap(
		typeof getStartValue === "function"
			? (getStartValue as AnyFunction)(getStartValueParams)
			: getStartValue,
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
		}) as ExitOrNextRight;

		if ("-exit" in result) {
			return result["-exit"];
		}

		lastValue = result["-next"];
	}

	return lastValue;
}

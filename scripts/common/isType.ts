import { type IsEqual, type AnyFunction } from "./types";

interface Type {
	string: [string, never];
	number: [number, never];
	boolean: [boolean, never];
	function: [AnyFunction, never];
	bigint: [bigint, never];
	undefined: [undefined, never];
	null: [null, never];
	symbol: [symbol, never];
	object: [object, readonly any[] | AnyFunction | null];
	iterable: [Iterable<any>, never];
	asyncIterable: [AsyncIterable<any>, never];
	array: [readonly any[], never];
}

const testTypeWrapper: Record<keyof Type, (input: unknown) => boolean> = {
	string: (input) => typeof input === "string",
	number: (input) => typeof input === "number",
	bigint: (input) => typeof input === "bigint",
	boolean: (input) => typeof input === "boolean",
	function: (input) => typeof input === "function",
	symbol: (input) => typeof input === "symbol",
	undefined: (input) => typeof input === "undefined",
	null: (input) => input === null,
	array: (input) => input instanceof Array,
	object: (input) => !!input
		&& typeof input === "object"
		&& !(input instanceof Array)
		&& !(Symbol.iterator in input),
	iterable: (input) => !!input
		&& typeof input === "object"
		&& Symbol.iterator in input
		&& typeof input[Symbol.iterator] === "function",
	asyncIterable: (input) => !!input
		&& typeof input === "object"
		&& Symbol.asyncIterator in input
		&& typeof input[Symbol.asyncIterator] === "function",
};

type ComputeResult<
	GenericInput extends unknown,
	GenericTypeEntry extends Type[keyof Type],
> = Exclude<
	Extract<GenericInput, GenericTypeEntry[0]>,
	GenericTypeEntry[1]
>;

type EligibleType<
	GenericInput extends unknown,
> = {
	[Prop in keyof Type]: IsEqual<
		ComputeResult<GenericInput, Type[Prop]>,
		never
	> extends true
		? never
		: Prop
}[keyof Type];

/**
 * {@include common/isType/index.md}
 */
export function isType<
	GenericInput extends unknown,
	GenericType extends EligibleType<GenericInput>,
>(
	type: GenericType
): (input: GenericInput) => input is ComputeResult<
	GenericInput,
	Type[GenericType]
>;

export function isType<
	GenericInput extends unknown,
	GenericType extends EligibleType<GenericInput>,
>(
	input: GenericInput,
	type: GenericType
): input is ComputeResult<
	GenericInput,
	Type[GenericType]
>;

export function isType(
	...args: [keyof Type] | [unknown, keyof Type]
) {
	if (args.length === 1) {
		const [type] = args;

		return (input: unknown) => isType(
			input,
			type as never,
		);
	}

	const [input, type] = args;

	return testTypeWrapper[type](input);
}

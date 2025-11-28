import { type Or, type UnionContain } from "./types";

export type EligibleEqual = string | null | number | undefined | bigint | boolean | symbol;

type ExpectLiteral<
	GenericValue extends EligibleEqual,
> = Or<[
	UnionContain<GenericValue, string>,
	UnionContain<GenericValue, number>,
	UnionContain<GenericValue, boolean>,
	UnionContain<GenericValue, bigint>,
	UnionContain<GenericValue, symbol>,
]> extends true
	? never
	: GenericValue;

export function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>,
>(
	value: ExpectLiteral<GenericValue> | ExpectLiteral<GenericValue>[]
): (input: GenericInput) => input is NoInfer<GenericValue>;

export function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>,
>(
	value: GenericValue | GenericValue[]
): (input: GenericInput) => boolean;

export function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>,
>(
	input: GenericInput,
	value: ExpectLiteral<GenericValue> | ExpectLiteral<GenericValue>[]
): input is GenericValue;

export function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>,
>(
	input: GenericInput,
	value: GenericValue | GenericValue[]
): boolean;

export function equal(
	...args: [EligibleEqual, EligibleEqual | EligibleEqual[]] | [EligibleEqual | EligibleEqual[]]
) {
	if (args.length === 1) {
		const [value] = args;

		return (input: EligibleEqual) => equal(input, value);
	}

	const [input, value] = args;

	return value instanceof Array
		? value.includes(input)
		: input === value;
}

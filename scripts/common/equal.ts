export type EligibleEqual = string | null | number | undefined | bigint | boolean | symbol;

export function equal<
	GenericInput extends EligibleEqual,
	GenericValue extends GenericInput,
>(
	value: GenericValue
): (input: GenericInput) => input is NoInfer<GenericValue>;

export function equal<
	GenericInput extends EligibleEqual,
	GenericValue extends GenericInput,
>(
	input: GenericInput,
	value: GenericValue
): input is GenericValue;

export function equal(
	...args: [EligibleEqual, EligibleEqual] | [EligibleEqual]
) {
	if (args.length === 1) {
		const [value] = args;

		return (input: EligibleEqual) => equal(input, value);
	}

	const [input, value] = args;

	return input === value;
}

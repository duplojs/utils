/**
 * {@include number/betweenThan/index.md}
 */
export function betweenThan<
	GenericInput extends number,
>(
	greaterThan: number,
	lessThan: number,
): (input: GenericInput) => boolean;

export function betweenThan<
	GenericInput extends number,
>(
	input: GenericInput,
	greaterThan: number,
	lessThan: number,
): boolean;

export function betweenThan(...args: [number, number] | [number, number, number]) {
	if (args.length === 2) {
		const [greaterThan, lessThan] = args;
		return (input: number) => betweenThan(input, greaterThan, lessThan);
	}

	const [input, greaterThan, lessThan] = args;

	return input > greaterThan && input < lessThan;
}

/**
 * {@include number/between/index.md}
 */
export function between<
	GenericInput extends number,
>(
	greater: number,
	less: number,
): (input: GenericInput) => boolean;

export function between<
	GenericInput extends number,
>(
	input: GenericInput,
	greater: number,
	less: number,
): boolean;

export function between(...args: [number, number] | [number, number, number]) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: number) => between(input, greater, less);
	}

	const [input, greater, less] = args;

	return input >= greater && input <= less;
}

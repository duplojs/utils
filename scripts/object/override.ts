export function override<
	GenericInput extends object,
>(
	value: Partial<NoInfer<GenericInput>>,
): (input: GenericInput) => GenericInput;

export function override<
	GenericInput extends object,
>(
	input: GenericInput,
	value: Partial<NoInfer<GenericInput>>,
): GenericInput;

export function override(...args: [object, object] | [object]) {
	if (args.length === 1) {
		const [value] = args;

		return (input: object) => override(input, value);
	}

	const [input, value] = args;

	return Object.entries(value)
		.reduce(
			(acc, [key, value]) => {
				if (value !== undefined) {
					acc[key as never] = value as never;
				}

				return acc;
			},
			{ ...input },
		);
}

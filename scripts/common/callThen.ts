export function callThen<
	GenericInput extends unknown,
	GenericOutput extends unknown,
>(
	input: GenericInput,
	TheFunction: (
		input: Awaited<GenericInput>
	) => GenericOutput,
): GenericInput extends Promise<unknown>
		? Promise<Awaited<GenericOutput>>
		: GenericOutput {
	if (input instanceof Promise) {
		return input
			.then(TheFunction) as never;
	}

	return TheFunction(input as never) as never;
}

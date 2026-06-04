/**
 * {@include common/callThen/index.md}
 */
export function callThen<
	GenericInput extends unknown,
	GenericOutput extends unknown,
	GenericOutputCatch extends unknown = never,
>(
	input: GenericInput,
	theFunction: (
		input: Awaited<GenericInput>
	) => GenericOutput,
	catchFunction?: (error: unknown) => GenericOutputCatch,
): (
	GenericInput extends Promise<unknown>
		? Promise<Awaited<GenericOutput | GenericOutputCatch>>
		: GenericOutput | GenericOutputCatch
	) {
	if (catchFunction) {
		try {
			if (input instanceof Promise) {
				return input
					.then(theFunction)
					.catch(catchFunction) as never;
			}

			return theFunction(input as never) as never;
		} catch (error) {
			return catchFunction(error) as never;
		}
	}

	if (input instanceof Promise) {
		return input
			.then(theFunction) as never;
	}

	return theFunction(input as never) as never;
}

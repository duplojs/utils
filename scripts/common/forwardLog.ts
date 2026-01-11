/**
 * {@include common/forwardLog/index.md}
 */
export function forwardLog<
	const GenericInput extends unknown,
>(
	input: GenericInput,
): GenericInput {
	console.log(input);

	return input;
}

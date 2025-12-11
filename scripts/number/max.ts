export function max<
	GenericInput extends readonly number[],
>(input: GenericInput) {
	return Math.max(...input);
}

export function min<
	GenericInput extends readonly number[],
>(input: GenericInput) {
	return Math.min(...input);
}

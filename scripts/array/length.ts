export function length<
	GenericInput extends readonly unknown[],
>(input: GenericInput): GenericInput["length"] {
	return input.length;
}

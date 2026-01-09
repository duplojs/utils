export function pipeCall<
	GenericInput extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (input: NoInfer<GenericInput>) => GenericOutput,
): (input: GenericInput) => NoInfer<GenericOutput> {
	return theFunction;
}

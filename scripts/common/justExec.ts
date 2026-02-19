/**
 * {@include common/justExec/index.md}
 */
export function justExec<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): GenericOutput {
	return theFunction();
}

/**
 * {@include common/toCurriedPredicate/index.md}
 */
export function toCurriedPredicate<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput,
>(
	thePredicate: (input: GenericInput) => input is GenericPredicate,
): (input: GenericInput) => input is GenericPredicate {
	return thePredicate;
}

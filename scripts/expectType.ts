export interface ExpectType<
	GenericOne extends unknown,
	GenericTwo extends unknown,
	GenericRule extends (
		(<V>() => V extends GenericOne ? 1 : 2) extends (<V>() => V extends GenericTwo ? 1 : 2)
			? "strict"
			: (GenericOne extends GenericTwo ? true : 1) extends (GenericTwo extends GenericOne ? true : 2)
				? "flexible"
				: GenericOne extends GenericTwo
					? "one-extends-two"
					: GenericTwo extends GenericOne
						? "two-extends-one"
						: never
	),

> {
	one: GenericOne;
	two: GenericTwo;
	rule: GenericRule;
}

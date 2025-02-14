import { type IsEqual } from "./isEqual";

export interface ExpectType<
	GenericOne extends unknown,
	GenericTwo extends unknown,
	GenericRule extends (
		IsEqual<GenericOne, GenericTwo> extends true
			? "strict"
			: (GenericOne extends GenericTwo ? true : 1) extends (GenericTwo extends GenericOne ? true : 2)
				? "flexible"
				: GenericOne extends GenericTwo
					? "one-extends-two"
					: GenericTwo extends GenericOne
						? "two-extends-one"
						: "none"
	),

> {
	one: GenericOne;
	two: GenericTwo;
	rule: GenericRule;
}

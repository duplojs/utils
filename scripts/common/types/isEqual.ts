export type IsEqual<
	GenericOne extends unknown,
	GenericTwo extends unknown,
> = (<V>() => V extends GenericOne ? 1 : 2) extends (<V>() => V extends GenericTwo ? 1 : 2)
	? true
	: false;

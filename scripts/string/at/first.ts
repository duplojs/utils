type First<
	StringGeneric extends string,
> = string extends StringGeneric
	? string | undefined
	: StringGeneric extends ""
		? undefined
		: StringGeneric extends `${infer FirstInfered}${string}`
			? FirstInfered
			: string;

export function first<
	GenericString extends string,
>(string: GenericString): First<GenericString> {
	return string[0] as First<GenericString>;
}

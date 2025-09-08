type Last<
	StringGeneric extends string,
> = StringGeneric extends ""
	? undefined
	: StringGeneric extends `${string}${infer LeftInfered}${infer RightInfered}`
		? RightInfered extends ""
			? LeftInfered
			: Last<`${LeftInfered}${RightInfered}`>
		: StringGeneric extends `${infer SingleInfered}`
			? SingleInfered
			: string | undefined;

export function last<
	GenericString extends string,
>(string: GenericString): Last<GenericString> {
	return string.length > 0
		? string[string.length - 1] as Last<GenericString>
		: undefined as never;
}

export type EndsWith<
	GenericString extends string,
	GenericSearchString extends string,
> = GenericString extends `${string}${GenericSearchString}` ? true : false;

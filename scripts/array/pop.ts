type Pop<
	GenericArray extends readonly unknown[],
> = GenericArray extends readonly [...infer Rest, any]
	? Rest
	: GenericArray;

export function pop<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): Pop<GenericArray> {
	return array.slice(0, -1) as never;
}

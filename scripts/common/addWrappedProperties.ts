export type GetWrappedProperties<
	GenericWrappedValue extends object = object,
	GenericProperties extends object = object,
> = (
	params: {
		wrappedValue: GenericWrappedValue;
	}
) => GenericProperties;

export function addWrappedProperties<
	GenericWrappedValue extends object,
	GenericGetWrappedProperties extends GetWrappedProperties<GenericWrappedValue>,
>(
	wrappedValue: GenericWrappedValue,
	getProperties: GenericGetWrappedProperties,
): GenericWrappedValue & ReturnType<GenericGetWrappedProperties> {
	const properties = getProperties({
		wrappedValue,
	});

	return {
		...wrappedValue,
		...properties,
	} as never;
}

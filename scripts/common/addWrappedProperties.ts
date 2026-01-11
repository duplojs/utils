export type GetWrappedProperties<
	GenericWrappedValue extends object = object,
	GenericProperties extends object = object,
> = (
	params: {
		wrappedValue: GenericWrappedValue;
	}
) => GenericProperties;

/**
 * {@include common/addWrappedProperties/index.md}
 */
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

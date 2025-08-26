import { type WrappedValue } from "./wrapValue";

export type GetWrappedProperties<
	GenericWrappedValue extends WrappedValue = WrappedValue,
	GenericProperties extends object = object,
> = (
	params: {
		wrappedValue: GenericWrappedValue;
	}
) => GenericProperties;

export function addWrappedProperties<
	GenericWrappedValue extends WrappedValue,
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

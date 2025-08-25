import { unwrap } from "@scripts/common/unwrap";
import { createWrappedNumber } from "./create/number";
import { type WrappedAnyValue } from "./types/anyValue";

export type GetWrappedProperties<
	GenericWrappedValue extends WrappedAnyValue = WrappedAnyValue,
	GenericProperties extends object = object,
> = (
	params: {
		wrappedValue: GenericWrappedValue;
	}
) => GenericProperties;

export function addWrappedProperties<
	GenericWrappedValue extends WrappedAnyValue,
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

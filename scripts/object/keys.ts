import { keyWrappedValue } from "@scripts/common";

export function keys<
	GenericObject extends object,
>(object: GenericObject) {
	return Object.keys(object)
		.filter(
			(key) => !key.startsWith(keyWrappedValue),
		) as (Exclude<keyof GenericObject, symbol>)[];
}

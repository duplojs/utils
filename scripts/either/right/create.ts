import { type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";

export interface EitherRight<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends Kind<"either-right">,
	Kind<"either-information", GenericInformation>,
	WrappedValue<GenericValue> {

}

export function createRight<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
	value: GenericValue = undefined as GenericValue,
): EitherRight<
		GenericInformation,
		GenericValue
	> {
	return {
		"kind-either-information": information,
		"kind-either-right": null,
		value,
	};
}

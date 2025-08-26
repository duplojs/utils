import { type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherRight<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends Kind<"either-right">,
	Kind<"either-information", GenericInformation>,
	WrappedValue<GenericValue> {

}

export function createEitherRight<
	GenericInformation extends string,
	GenericValue extends AnyValue,
>(
	information: GenericInformation,
	value: GenericValue,
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

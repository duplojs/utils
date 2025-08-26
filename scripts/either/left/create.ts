import { type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends Kind<"either-left">,
	Kind<"either-information", GenericInformation>,
	WrappedValue<GenericValue> {

}

export function createEitherLeft<
	GenericInformation extends string,
	GenericValue extends AnyValue,
>(
	information: GenericInformation,
	value: GenericValue,
): EitherLeft<
		GenericInformation,
		GenericValue
	> {
	return {
		"kind-either-information": information,
		"kind-either-left": null,
		value,
	};
}

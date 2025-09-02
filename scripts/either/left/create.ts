import { type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";

export interface EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends Kind<"either-left">,
	Kind<"either-information", GenericInformation>,
	WrappedValue<GenericValue> {

}

export function left<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
	value: GenericValue = undefined as GenericValue,
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

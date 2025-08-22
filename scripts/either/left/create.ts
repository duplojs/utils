import { type TheKind } from "@scripts/common/theKind";
import { type TheValue } from "@scripts/common/theValue";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherLeft<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends TheKind<"either-left">,
	TheKind<"either-information", GenericInformation>,
	TheValue<GenericValue> {

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

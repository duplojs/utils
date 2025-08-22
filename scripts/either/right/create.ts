import { type TheKind } from "@scripts/common/theKind";
import { type TheValue } from "@scripts/common/theValue";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherRight<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends TheKind<"either-right">,
	TheKind<"either-information", GenericInformation>,
	TheValue<GenericValue> {

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

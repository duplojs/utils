import { type Kind } from "@scripts/common/kind";
import { createEitherLeft, type EitherLeft } from "./create";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherError<
	GenericValue extends unknown = unknown,
> extends EitherLeft<"error", GenericValue>,
	Kind<"either-error"> {

}

export function createEitherError<
	GenericValue extends AnyValue,
>(
	value: GenericValue,
): EitherError<GenericValue> {
	return {
		"kind-either-error": null,
		...createEitherLeft("error", value),
	};
}

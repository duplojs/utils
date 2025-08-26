import { type AnyValue } from "@scripts/common/types/anyValue";
import { createEitherRight, type EitherRight } from "./create";
import { type Kind } from "@scripts/common/kind";

export interface EitherSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"success", GenericValue>,
	Kind<"either-success"> {

}

export function createEitherSuccess<
	GenericValue extends AnyValue,
>(
	value: GenericValue,
): EitherSuccess<GenericValue> {
	return {
		"kind-either-success": null,
		...createEitherRight("success", value),
	};
}

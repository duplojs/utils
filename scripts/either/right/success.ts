import { type AnyValue } from "@scripts/common/types/AnyValue";
import { createEitherRight, type EitherRight } from "./create";
import { type TheKind } from "@scripts/common/theKind";

export interface EitherSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"success", GenericValue>,
	TheKind<"either-success"> {

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

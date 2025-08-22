import { type AnyValue } from "@scripts/common/types/anyValue";
import { createEitherRight, type EitherRight } from "../right";
import { type TheKind } from "@scripts/common/theKind";

export interface EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"future", GenericValue>,
	TheKind<"either-future">,
	TheKind<"either-success"> {

}

export function createEitherFutureSuccess<
	GenericValue extends AnyValue,
>(
	value: GenericValue,
): EitherFutureSuccess<GenericValue> {
	return {
		"kind-either-future": null,
		"kind-either-success": null,
		...createEitherRight("future", value),
	};
}

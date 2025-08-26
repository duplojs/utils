import { type AnyValue } from "@scripts/common/types/anyValue";
import { createEitherRight, type EitherRight } from "../right";
import { type Kind } from "@scripts/common/kind";

export interface EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"future", GenericValue>,
	Kind<"either-future">,
	Kind<"either-success"> {

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

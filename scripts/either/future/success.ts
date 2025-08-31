import { createRight, type EitherRight } from "../right";
import { type Kind } from "@scripts/common/kind";

export interface EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"future", GenericValue>,
	Kind<"either-future">,
	Kind<"either-success"> {

}

export function createFutureSuccess<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherFutureSuccess<GenericValue> {
	return {
		"kind-either-future": null,
		"kind-either-success": null,
		...createRight("future", value),
	};
}

import { right, type EitherRight } from "../right";
import { type Kind } from "@scripts/common/kind";

export interface EitherFutureSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"future", GenericValue>,
	Kind<"either-future">,
	Kind<"either-future-success"> {

}

export function futureSuccess<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherFutureSuccess<GenericValue> {
	return {
		"kind-either-future": null,
		"kind-either-future-success": null,
		...right("future", value),
	};
}

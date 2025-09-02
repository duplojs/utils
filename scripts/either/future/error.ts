import { type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "../left";

export interface EitherFutureError
	extends EitherLeft<"future", unknown>,
	Kind<"either-future">,
	Kind<"either-future-error"> {

}

export function futureError(value: unknown): EitherFutureError {
	return {
		"kind-either-future": null,
		"kind-either-future-error": null,
		...left("future", value),
	};
}

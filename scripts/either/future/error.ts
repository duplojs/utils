import { type Kind } from "@scripts/common/kind";
import { createLeft, type EitherLeft } from "../left";

export interface EitherFutureError
	extends EitherLeft<"future", unknown>,
	Kind<"either-future">,
	Kind<"either-error"> {

}

export function createFutureError(value: unknown): EitherFutureError {
	return {
		"kind-either-future": null,
		"kind-either-error": null,
		...createLeft("future", value),
	};
}

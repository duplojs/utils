import { type Kind } from "@scripts/common/kind";
import { createEitherLeft, type EitherLeft } from "../left";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherFutureError
	extends EitherLeft<"future", unknown>,
	Kind<"either-future">,
	Kind<"either-error"> {

}

export function createEitherFutureError(value: AnyValue): EitherFutureError {
	return {
		"kind-either-future": null,
		"kind-either-error": null,
		...createEitherLeft("future", value),
	};
}

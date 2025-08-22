import { type TheKind } from "@scripts/common/theKind";
import { createEitherLeft, type EitherLeft } from "../left";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherFutureError
	extends EitherLeft<"future", unknown>,
	TheKind<"either-future">,
	TheKind<"either-error"> {

}

export function createEitherFutureError(value: AnyValue): EitherFutureError {
	return {
		"kind-either-future": null,
		"kind-either-error": null,
		...createEitherLeft("future", value),
	};
}

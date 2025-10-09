import { createKind, type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "../left";
import { eitherFutureKind } from "./base";

export const eitherFutureErrorKind = createKind(
	"either-future-error",
);

type _EitherFutureError = (
	& EitherLeft<"future", unknown>
	& Kind<typeof eitherFutureKind.definition>
	& Kind<typeof eitherFutureErrorKind.definition>
);

export interface EitherFutureError extends _EitherFutureError {

}

export function futureError(value: unknown): EitherFutureError {
	return eitherFutureKind.addTo(
		eitherFutureErrorKind.addTo(
			left("future", value),
		),
	);
}

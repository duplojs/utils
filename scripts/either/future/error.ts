import { type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "../left";
import { eitherFutureKind } from "./base";
import { createEitherKind } from "../kind";

export const eitherFutureErrorKind = createEitherKind(
	"future-error",
);

type _EitherFutureError = (
	& EitherLeft<"future", unknown>
	& Kind<typeof eitherFutureKind.definition>
	& Kind<typeof eitherFutureErrorKind.definition>
);

export interface EitherFutureError extends _EitherFutureError {

}

export function futureError(value: unknown): EitherFutureError {
	return eitherFutureKind.setTo(
		eitherFutureErrorKind.setTo(
			left("future", value),
		),
	);
}

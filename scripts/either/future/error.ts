import { type Kind } from "@scripts/common/kind";
import { left, type Left } from "../left";
import { futureKind } from "./base";
import { createEitherKind } from "../kind";

export const futureErrorKind = createEitherKind(
	"future-error",
);

/**
 * @deprecated use futureErrorKind
 */
export const eitherFutureErrorKind = futureErrorKind;

type _FutureError = (
	& Left<"future", unknown>
	& Kind<typeof futureKind.definition>
	& Kind<typeof futureErrorKind.definition>
);

export interface FutureError extends _FutureError {

}

/**
 * @deprecated use FutureError
 */
export type EitherFutureError = FutureError;

/**
 * {@include either/futureError/index.md}
 */
export function futureError(value: unknown): FutureError {
	return futureKind.setTo(
		futureErrorKind.setTo(
			left("future", value),
		),
	);
}

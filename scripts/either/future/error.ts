import { type MergeKind, type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "../left";
import { eitherFutureKind } from "./base";
import { createEitherKind } from "../base";

export const eitherFutureErrorKind = createEitherKind(
	"future-error",
);

export interface EitherFutureError extends MergeKind<
	| Kind<typeof eitherFutureKind.definition>
	| Kind<typeof eitherFutureErrorKind.definition>,
	EitherLeft<"future", unknown>
> {

}

export function futureError(value: unknown): EitherFutureError {
	return eitherFutureKind.setTo(
		eitherFutureErrorKind.setTo(
			left("future", value),
		),
	);
}

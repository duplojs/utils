import { createEitherKind } from "../kind";

export const futureKind = createEitherKind(
	"future",
);

/**
 * @deprecated use futureKind
 */
export const eitherFutureKind = futureKind;

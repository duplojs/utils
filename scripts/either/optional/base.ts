import { createEitherKind } from "../kind";

export const optionalKind = createEitherKind(
	"optional",
);

/**
 * @deprecated use optionalKind
 */
export const eitherOptionalKind = optionalKind;

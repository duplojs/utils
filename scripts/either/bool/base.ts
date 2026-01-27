import { createEitherKind } from "../kind";

export const boolKind = createEitherKind(
	"bool",
);

/**
 * @deprecated use boolKind
 */
export const eitherBoolKind = boolKind;

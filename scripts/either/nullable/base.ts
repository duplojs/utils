import { createEitherKind } from "../kind";

export const nullableKind = createEitherKind(
	"nullable",
);

/**
 * @deprecated use nullableKind
 */
export const eitherNullableKind = nullableKind;

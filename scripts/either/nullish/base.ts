import { createEitherKind } from "../kind";

export const nullishKind = createEitherKind(
	"nullish",
);

/**
 * @deprecated use nullishKind
 */
export const eitherNullishKind = nullishKind;

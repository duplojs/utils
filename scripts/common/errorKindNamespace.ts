import { createKindNamespace } from "./kind";

export const createErrorKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsUtilsError",
);

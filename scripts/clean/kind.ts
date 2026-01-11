import { createKindNamespace } from "@scripts/common";

/**
 * {@include clean/createCleanKind/index.md}
 */
export const createCleanKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsUtilsClean",
);

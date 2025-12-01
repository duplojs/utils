import { createKindNamespace } from "@scripts/common";

export const createCleanKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsUtilsClean",
);

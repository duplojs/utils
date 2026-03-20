import { createKindNamespace } from "@scripts/common";

export const createFlowKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsUtilsFlow",
);

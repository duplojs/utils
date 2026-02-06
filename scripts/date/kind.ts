import { createKindNamespace } from "@scripts/common";

export const createDateKind = createKindNamespace(
	// @ts-expect-error - reserved kind namespace
	"DuplojsUtilsDate",
);

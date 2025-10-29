import { createKindNamespace } from "@scripts/common";

export const createDataParserKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsUtilsDataParser",
);

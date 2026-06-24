import { createKindNamespace } from "@scripts/common";

export const nameKindNamespace = "DuplojsUtilsDataParser";

export const createDataParserKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	nameKindNamespace,
);

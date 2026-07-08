import type { FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

export function nil<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionNil,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNil,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return dataParsers.coercer(dataParsers.nil(definition));
}

import type { FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

export function date<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionDate,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionDate,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return dataParsers.coercer(dataParsers.date(definition));
}

import { type FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "../..";
import { coercer } from "../base";

export function string<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionString,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionString,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return coercer(dataParsers.string(definition));
}

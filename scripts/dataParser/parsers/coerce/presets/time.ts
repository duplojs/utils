import { type FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "../..";
import { coercer } from "../base";

export function time<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionTime,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionTime,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return coercer(dataParsers.time(definition));
}

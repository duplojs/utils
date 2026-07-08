import { type FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "../..";
import { coercer } from "../base";

export function number<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionNumber,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNumber,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return coercer(dataParsers.number(definition));
}

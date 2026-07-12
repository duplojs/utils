import type { FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

/**
 * @deprecated Use `DP.coercer(DP.time())` instead.
 */
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
	return dataParsers.coercer(dataParsers.time(definition));
}

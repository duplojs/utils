import { type FixDeepFunctionInfer } from "@scripts/common";
import { type PrepareDataParserDefinition } from "../../../types";
import * as dataParsers from "../..";
import { coercer } from "../base";

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
	return coercer(dataParsers.date(definition));
}

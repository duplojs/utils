import { type FixDeepFunctionInfer } from "@scripts/common";
import { type PrepareDataParserDefinition } from "../../../types";
import * as dataParsers from "../..";
import { coercer } from "../base";

export function boolean<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionBoolean,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionBoolean,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return coercer(dataParsers.boolean(definition));
}

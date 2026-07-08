import { type FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "../..";
import { coercer } from "../base";

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
	return coercer(dataParsers.nil(definition));
}

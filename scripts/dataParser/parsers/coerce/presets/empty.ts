import type { FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "../..";
import { coercer } from "../base";

export function empty<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionEmpty,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionEmpty,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return coercer(dataParsers.empty(definition));
}

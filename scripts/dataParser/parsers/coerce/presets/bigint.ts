import { type FixDeepFunctionInfer } from "@scripts/common";
import { type PrepareDataParserDefinition } from "../../../types";
import * as dataParsers from "../..";
import { coercer } from "../base";

export function bigint<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionBigInt,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionBigInt,
			"coerce"
		>,
		GenericDefinition
	>,
) {
	return coercer(dataParsers.bigint(definition));
}

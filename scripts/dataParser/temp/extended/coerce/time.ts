import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

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
): dataParsersExtended.DataParserTimeExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTime,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.time({
		...definition,
		coerce: true,
	});
}

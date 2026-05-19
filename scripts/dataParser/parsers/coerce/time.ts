import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";

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
): dataParsers.DataParserTime<
		MergeDefinition<
			dataParsers.DataParserDefinitionTime,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.time({
		...definition,
		coerce: true,
	});
}

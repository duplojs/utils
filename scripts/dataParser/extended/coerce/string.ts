import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

export function string<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionString,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionString,
			"coerce"
		>,
		GenericDefinition
	>,
): dataParsersExtended.DataParserStringExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.string({
		...definition,
		coerce: true,
	});
}

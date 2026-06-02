import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

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
): dataParsersExtended.DataParserDateExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.date({
		...definition,
		coerce: true,
	});
}

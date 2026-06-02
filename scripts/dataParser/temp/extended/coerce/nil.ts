import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

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
): dataParsersExtended.DataParserNilExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.nil({
		...definition,
		coerce: true,
	});
}

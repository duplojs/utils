import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

/**
 * @deprecated Use `dataParsersExtended.string().coerce()` instead.
 */
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

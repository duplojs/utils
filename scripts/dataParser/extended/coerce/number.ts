import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

/**
 * @deprecated Use `dataParsersExtended.number().coerce()` instead.
 */
export function number<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionNumber,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNumber,
			"coerce"
		>,
		GenericDefinition
	>,
): dataParsersExtended.DataParserNumberExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNumber,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.number({
		...definition,
		coerce: true,
	});
}

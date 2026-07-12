import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

/**
 * @deprecated Use `dataParsersExtended.time().coerce()` instead.
 */
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
): dataParsersExtended.DataParserCoercerExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer,
			{
				inner: dataParsersExtended.DataParserTimeExtended<
					MergeDefinition<
						dataParsers.DataParserDefinitionTime,
						NeverCoalescing<GenericDefinition, {}>
					>
				>;
			}
		>
	> {
	return dataParsersExtended.coercer(dataParsersExtended.time(definition));
}

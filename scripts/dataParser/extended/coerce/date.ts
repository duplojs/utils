import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

/**
 * @deprecated Use `dataParsersExtended.date().coerce()` instead.
 */
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
): dataParsersExtended.DataParserCoercerExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer,
			{
				inner: dataParsersExtended.DataParserDateExtended<
					MergeDefinition<
						dataParsers.DataParserDefinitionDate,
						NeverCoalescing<GenericDefinition, {}>
					>
				>;
			}
		>
	> {
	return dataParsersExtended.coercer(dataParsersExtended.date(definition));
}

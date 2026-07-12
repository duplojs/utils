import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

/**
 * @deprecated Use `dataParsersExtended.empty().coerce()` instead.
 */
export function empty<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionEmpty,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionEmpty,
			"coerce"
		>,
		GenericDefinition
	>,
): dataParsersExtended.DataParserCoercerExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer,
			{
				inner: dataParsersExtended.DataParserEmptyExtended<
					MergeDefinition<
						dataParsers.DataParserDefinitionEmpty,
						NeverCoalescing<GenericDefinition, {}>
					>
				>;
			}
		>
	> {
	return dataParsersExtended.coercer(dataParsersExtended.empty(definition));
}

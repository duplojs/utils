import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

/**
 * @deprecated Use `DP.coercer(DP.string())` instead.
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
): dataParsers.DataParserCoercer<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer,
			{
				inner: dataParsers.DataParserString<
					MergeDefinition<
						dataParsers.DataParserDefinitionString,
						NeverCoalescing<GenericDefinition, {}>
					>
				>;
			}
		>
	> {
	return dataParsers.coercer(dataParsers.string(definition));
}

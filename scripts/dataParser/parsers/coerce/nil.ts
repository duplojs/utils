import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

/**
 * @deprecated Use `DP.coercer(DP.nil())` instead.
 */
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
): dataParsers.DataParserCoercer<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer,
			{
				inner: dataParsers.DataParserNil<
					MergeDefinition<
						dataParsers.DataParserDefinitionNil,
						NeverCoalescing<GenericDefinition, {}>
					>
				>;
			}
		>
	> {
	return dataParsers.coercer(dataParsers.nil(definition));
}

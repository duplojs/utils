import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

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
): dataParsers.DataParserCoercer<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer,
			{
				inner: dataParsers.DataParserEmpty<
					MergeDefinition<
						dataParsers.DataParserDefinitionEmpty,
						NeverCoalescing<GenericDefinition, {}>
					>
				>;
			}
		>
	> {
	return dataParsers.coercer(dataParsers.empty(definition));
}

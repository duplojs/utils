import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

/**
 * @deprecated Use `DP.coercer(DP.boolean())` instead.
 */
export function boolean<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionBoolean,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionBoolean,
			"coerce"
		>,
		GenericDefinition
	>,
): dataParsers.DataParserBoolean<
		MergeDefinition<
			dataParsers.DataParserDefinitionBoolean,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.boolean({
		...definition,
		coerce: true,
	});
}

import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

/**
 * @deprecated Use `DP.coercer(DP.number())` instead.
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
): dataParsers.DataParserNumber<
		MergeDefinition<
			dataParsers.DataParserDefinitionNumber,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.number({
		...definition,
		coerce: true,
	});
}


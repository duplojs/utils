import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";

export function bigint<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionBigInt,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionBigInt,
			"coerce"
		>,
		GenericDefinition
	>,
): dataParsers.DataParserBigInt<
		MergeDefinition<
			dataParsers.DataParserDefinitionBigInt,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.bigint({
		...definition,
		coerce: true,
	});
}

import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";

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
): dataParsers.DataParserDate<
		MergeDefinition<
			dataParsers.DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.date({
		...definition,
		coerce: true,
	});
}

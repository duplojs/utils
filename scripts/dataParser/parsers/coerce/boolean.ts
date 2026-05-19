import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";

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

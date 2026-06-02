import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";

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
): dataParsers.DataParserNil<
		MergeDefinition<
			dataParsers.DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.nil({
		...definition,
		coerce: true,
	});
}

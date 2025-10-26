import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";

export function string<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionString, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsers.DataParserString<
		MergeDefinition<
			dataParsers.DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.string({
		...definition,
		coerce: true,
	});
}

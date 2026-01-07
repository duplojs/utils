import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";

export function time<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionTime, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsers.DataParserTime<
		MergeDefinition<
			dataParsers.DataParserDefinitionTime,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.time({
		...definition,
		coerce: true,
	});
}

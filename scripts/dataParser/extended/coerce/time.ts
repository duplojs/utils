import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

export function time<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionTime, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsersExtended.DataParserTimeExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTime,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.time({
		...definition,
		coerce: true,
	});
}

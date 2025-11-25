import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

export function date<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionDate, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsersExtended.DataParserDateExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.date({
		...definition,
		coerce: true,
	});
}

import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

export function empty<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionEmpty, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsersExtended.DataParserEmptyExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionEmpty,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.empty({
		...definition,
		coerce: true,
	});
}

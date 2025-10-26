import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "../";

export function string<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionString, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsersExtended.DataParserStringExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.string({
		...definition,
		coerce: true,
	});
}

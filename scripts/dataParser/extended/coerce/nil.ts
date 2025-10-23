import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

export function nil<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionNil, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsersExtended.DataParserNilExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.nil({
		...definition,
		coerce: true,
	});
}

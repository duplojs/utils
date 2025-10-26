import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

export function bigint<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionBigInt, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsersExtended.DataParserBigIntExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionBigInt,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.bigint({
		...definition,
		coerce: true,
	});
}

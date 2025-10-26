import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";

export function bigint<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionBigInt, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsers.DataParserBigInt<
		MergeDefinition<
			dataParsers.DataParserDefinitionBigInt,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.bigint({
		...definition,
		coerce: true,
	});
}

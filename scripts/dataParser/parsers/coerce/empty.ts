import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";

export function empty<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionEmpty, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsers.DataParserEmpty<
		MergeDefinition<
			dataParsers.DataParserDefinitionEmpty,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.empty({
		...definition,
		coerce: true,
	});
}

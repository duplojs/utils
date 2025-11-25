import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";

export function date<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionDate, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsers.DataParserDate<
		MergeDefinition<
			dataParsers.DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.date({
		...definition,
		coerce: true,
	});
}

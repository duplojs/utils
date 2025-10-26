import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";

export function boolean<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionBoolean, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsers.DataParserBoolean<
		MergeDefinition<
			dataParsers.DataParserDefinitionBoolean,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.boolean({
		...definition,
		coerce: true,
	});
}

import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";

export function nil<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionNil, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsers.DataParserNil<
		MergeDefinition<
			dataParsers.DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsers.nil({
		...definition,
		coerce: true,
	});
}

import { type NeverCoalescing } from "@scripts/common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "../";

export function boolean<
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionBoolean, "coerce">
	> = never,
>(
	definition?: GenericDefinition,
): dataParsersExtended.DataParserBooleanExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionBoolean,
			NeverCoalescing<GenericDefinition, {}> & { coerce: true }
		>
	> {
	return dataParsersExtended.boolean({
		...definition,
		coerce: true,
	});
}

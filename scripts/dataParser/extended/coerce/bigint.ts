import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

/**
 * @deprecated Use `dataParsersExtended.bigint().coerce()` instead.
 */
export function bigint<
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionBigInt,
		"coerce"
	> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionBigInt,
			"coerce"
		>,
		GenericDefinition
	>,
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

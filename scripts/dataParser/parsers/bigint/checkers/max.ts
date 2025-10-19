import { createKind, type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
	max: bigint;
}

export const dataParserCheckerBigIntMaxKind = createKind("data-parser-checker-bigint-max");

type _DataParserCheckerBigIntMax = (
	& Kind<typeof dataParserCheckerBigIntMaxKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionBigIntMax,
		bigint
	>
);

export interface DataParserCheckerBigIntMax extends _DataParserCheckerBigIntMax {

}

export function checkerBigIntMax(
	max: bigint,
	definition: Partial<
		Omit<DataParserCheckerDefinitionBigIntMax, "max">
	> = {},
): DataParserCheckerBigIntMax {
	return dataParserCheckerInit<DataParserCheckerBigIntMax>(
		dataParserCheckerBigIntMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(value) => {
			if (value > max) {
				return SymbolDataParserErrorIssue;
			}

			return value;
		},
	);
}

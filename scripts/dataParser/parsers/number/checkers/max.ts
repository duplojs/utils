import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionNumberMax extends DataParserCheckerDefinition {
	max: number;
}

export const dataParserCheckerNumberMaxKind = createDataParserKind("checker-number-max");

type _DataParserCheckerNumberMax = (
	& Kind<typeof dataParserCheckerNumberMaxKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionNumberMax,
		number
	>
);

export interface DataParserCheckerNumberMax extends _DataParserCheckerNumberMax {

}

export function checkerNumberMax(
	max: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionNumberMax, "max">
	> = {},
): DataParserCheckerNumberMax {
	return dataParserCheckerInit<DataParserCheckerNumberMax>(
		dataParserCheckerNumberMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(value, self) => value <= self.definition.max ? value : SymbolDataParserErrorIssue,
	);
}

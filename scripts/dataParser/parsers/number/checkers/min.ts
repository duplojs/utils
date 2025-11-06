import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionNumberMin extends DataParserCheckerDefinition {
	min: number;
}

export const checkerNumberMinKind = createDataParserKind("checker-number-min");

type _DataParserCheckerNumberMin = (
	& Kind<typeof checkerNumberMinKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionNumberMin,
		number
	>
);

export interface DataParserCheckerNumberMin extends _DataParserCheckerNumberMin {

}

export function checkerNumberMin(
	min: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionNumberMin, "min">
	> = {},
): DataParserCheckerNumberMin {
	return dataParserCheckerInit<DataParserCheckerNumberMin>(
		checkerNumberMinKind,
		{
			definition: {
				...definition,
				min,
			},
		},
		(value, self) => value >= self.definition.min ? value : SymbolDataParserErrorIssue,
	);
}

import { createKind, type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export interface DataParserCheckerDefinitionNumberMin extends DataParserCheckerDefinition {
	min: number;
}

export const dataParserCheckerNumberMinKind = createKind("data-parser-checker-number-min");

type _DataParserCheckerNumberMin = (
	& Kind<typeof dataParserCheckerNumberMinKind.definition>
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
		dataParserCheckerNumberMinKind,
		{
			definition: {
				...definition,
				min,
			},
		},
		(value, self) => value >= self.definition.min ? value : SymbolDataParserErrorIssue,
	);
}

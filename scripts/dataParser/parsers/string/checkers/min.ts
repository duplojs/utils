import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionStringMin extends DataParserCheckerDefinition {
	min: number;
}

export const checkerStringMinKind = createDataParserKind("checker-string-min");

type _DataParserCheckerStringMin = (
	& Kind<typeof checkerStringMinKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionStringMin,
		string
	>
);

export interface DataParserCheckerStringMin extends _DataParserCheckerStringMin {

}

export function checkerStringMin(
	min: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionStringMin, "min">
	> = {},
): DataParserCheckerStringMin {
	return dataParserCheckerInit<DataParserCheckerStringMin>(
		checkerStringMinKind,
		{
			definition: {
				...definition,
				min,
			},
		},
		(value, self) => value.length >= self.definition.min ? value : SymbolDataParserErrorIssue,
	);
}

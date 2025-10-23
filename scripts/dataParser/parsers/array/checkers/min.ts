import { createKind, type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export interface DataParserCheckerDefinitionArrayMin extends DataParserCheckerDefinition {
	min: number;
}

export const dataParserCheckerArrayMinKind = createKind("data-parser-checker-array-min");

type _DataParserCheckerArrayMin = (
	& Kind<typeof dataParserCheckerArrayMinKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionArrayMin,
		unknown[]
	>
);

export interface DataParserCheckerArrayMin extends _DataParserCheckerArrayMin {

}

export function checkerArrayMin(
	min: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionArrayMin, "min">
	> = {},
): DataParserCheckerArrayMin {
	return dataParserCheckerInit<DataParserCheckerArrayMin>(
		dataParserCheckerArrayMinKind,
		{
			definition: {
				...definition,
				min,
			},
		},
		(data, self) => {
			if (data.length < self.definition.min) {
				return SymbolDataParserErrorIssue;
			}

			return data;
		},
	);
}

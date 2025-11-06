import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionArrayMin extends DataParserCheckerDefinition {
	min: number;
}

export const checkerArrayMinKind = createDataParserKind("checker-array-min");

type _DataParserCheckerArrayMin = (
	& Kind<typeof checkerArrayMinKind.definition>
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
		checkerArrayMinKind,
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

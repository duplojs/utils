import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionArrayMax extends DataParserCheckerDefinition {
	max: number;
}

export const dataParserCheckerArrayMaxKind = createDataParserKind("checker-array-max");

type _DataParserCheckerArrayMax = (
	& Kind<typeof dataParserCheckerArrayMaxKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionArrayMax,
		unknown[]
	>
);

export interface DataParserCheckerArrayMax extends _DataParserCheckerArrayMax {

}

export function checkerArrayMax(
	max: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionArrayMax, "max">
	> = {},
): DataParserCheckerArrayMax {
	return dataParserCheckerInit<DataParserCheckerArrayMax>(
		dataParserCheckerArrayMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(data, self) => {
			if (data.length > self.definition.max) {
				return SymbolDataParserErrorIssue;
			}

			return data;
		},
	);
}

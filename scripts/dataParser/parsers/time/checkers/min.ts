import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import * as DDate from "@scripts/date";

export interface DataParserCheckerDefinitionTimeMin extends DataParserCheckerDefinition {
	min: DDate.TheTime;
}

export const checkerTimeMinKind = createDataParserKind("checker-time-min");

type _DataParserCheckerTimeMin = (
	& Kind<typeof checkerTimeMinKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionTimeMin,
		DDate.TheTime
	>
);

export interface DataParserCheckerTimeMin extends _DataParserCheckerTimeMin {

}

export function checkerTimeMin(
	min: DDate.TheTime,
	definition: Partial<
		Omit<DataParserCheckerDefinitionTimeMin, "min">
	> = {},
): DataParserCheckerTimeMin {
	return dataParserCheckerInit<DataParserCheckerTimeMin>(
		checkerTimeMinKind,
		{
			definition: {
				...definition,
				min,
			},
		},
		(value, self) => DDate.greaterTime(value, self.definition.min) ? value : SymbolDataParserErrorIssue,
	);
}

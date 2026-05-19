import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserCheckerBase } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import * as DDate from "@scripts/date";

export interface DataParserCheckerDefinitionTimeMin extends DataParserCheckerDefinition {
	min: DDate.TheTime;
}

export const checkerTimeMinKind = createDataParserKind("checker-time-min");

type _DataParserCheckerTimeMin = (
	& Kind<typeof checkerTimeMinKind.definition>
	& DataParserCheckerBase<
		DataParserCheckerDefinitionTimeMin,
		DDate.TheTime
	>
);

export interface DataParserCheckerTimeMin extends _DataParserCheckerTimeMin {

}

/**
 * {@include dataParser/classic/checkerTimeMin/index.md}
 */
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
		(value, error, self, dataParser) => DDate.greaterTime(value, self.definition.min)
			? value
			: addIssue(error, `time >= ${self.definition.min.toString()}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage),
	);
}

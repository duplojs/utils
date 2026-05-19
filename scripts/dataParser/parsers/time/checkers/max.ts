import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserCheckerBase } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import * as DDate from "@scripts/date";

export interface DataParserCheckerDefinitionTimeMax extends DataParserCheckerDefinition {
	max: DDate.TheTime;
}

export const checkerTimeMaxKind = createDataParserKind("checker-time-max");

type _DataParserCheckerTimeMax = (
	& Kind<typeof checkerTimeMaxKind.definition>
	& DataParserCheckerBase<
		DataParserCheckerDefinitionTimeMax,
		DDate.TheTime
	>
);

export interface DataParserCheckerTimeMax extends _DataParserCheckerTimeMax {

}

/**
 * {@include dataParser/classic/checkerTimeMax/index.md}
 */
export function checkerTimeMax(
	max: DDate.TheTime,
	definition: Partial<
		Omit<DataParserCheckerDefinitionTimeMax, "max">
	> = {},
): DataParserCheckerTimeMax {
	return dataParserCheckerInit<DataParserCheckerTimeMax>(
		checkerTimeMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(value, error, self, dataParser) => DDate.lessTime(value, self.definition.max)
			? value
			: addIssue(error, `time <= ${self.definition.max.toString()}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage),
	);
}

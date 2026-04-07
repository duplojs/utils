import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionNumberMax extends DataParserCheckerDefinition {
	max: number;
}

export const checkerNumberMaxKind = createDataParserKind("checker-number-max");

type _DataParserCheckerNumberMax = (
	& Kind<typeof checkerNumberMaxKind.definition>
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
		checkerNumberMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(value, error, self) => value <= self.definition.max
			? value
			: addIssue(error, `number <= ${self.definition.max}`, value, self.definition.errorMessage),
	);
}

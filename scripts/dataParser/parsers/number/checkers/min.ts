import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
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
		(value, error, self, dataParser) => value >= self.definition.min
			? value
			: addIssue(error, `number >= ${self.definition.min}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage),
	);
}

import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionStringMax extends DataParserCheckerDefinition {
	max: number;
}

export const checkerStringMaxKind = createDataParserKind("checker-string-max");

type _DataParserCheckerStringMax = (
	& Kind<typeof checkerStringMaxKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionStringMax,
		string
	>
);

export interface DataParserCheckerStringMax extends _DataParserCheckerStringMax {

}

export function checkerStringMax(
	max: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionStringMax, "max">
	> = {},
): DataParserCheckerStringMax {
	return dataParserCheckerInit<DataParserCheckerStringMax>(
		checkerStringMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(data, error, self, dataParser) => data.length <= self.definition.max
			? data
			: addIssue(error, `string.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage),
	);
}

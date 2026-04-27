import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionArrayMax extends DataParserCheckerDefinition {
	max: number;
}

export const checkerArrayMaxKind = createDataParserKind("checker-array-max");

type _DataParserCheckerArrayMax = (
	& Kind<typeof checkerArrayMaxKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionArrayMax,
		any[]
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
		checkerArrayMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(data, error, self, dataParser) => data.length <= self.definition.max
			? data
			: addIssue(
				error,
				`array.length <= ${self.definition.max}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			),

	);
}

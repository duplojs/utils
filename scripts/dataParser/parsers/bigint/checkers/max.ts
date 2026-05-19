import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserCheckerBase } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
	max: bigint;
}

export const checkerBigIntMaxKind = createDataParserKind("checker-bigint-max");

type _DataParserCheckerBigIntMax = (
	& Kind<typeof checkerBigIntMaxKind.definition>
	& DataParserCheckerBase<
		DataParserCheckerDefinitionBigIntMax,
		bigint
	>
);

export interface DataParserCheckerBigIntMax extends _DataParserCheckerBigIntMax {

}

export function checkerBigIntMax(
	max: bigint,
	definition: Partial<
		Omit<DataParserCheckerDefinitionBigIntMax, "max">
	> = {},
): DataParserCheckerBigIntMax {
	return dataParserCheckerInit<DataParserCheckerBigIntMax>(
		checkerBigIntMaxKind,
		{
			definition: {
				...definition,
				max,
			},
		},
		(value, error, self, dataParser) => {
			if (value > self.definition.max) {
				return addIssue(error, `bigint <= ${self.definition.max}n`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
			}

			return value;
		},
	);
}

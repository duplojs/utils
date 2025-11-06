import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
	max: bigint;
}

export const checkerBigIntMaxKind = createDataParserKind("checker-bigint-max");

type _DataParserCheckerBigIntMax = (
	& Kind<typeof checkerBigIntMaxKind.definition>
	& DataParserChecker<
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
		(value, self) => {
			if (value > self.definition.max) {
				return SymbolDataParserErrorIssue;
			}

			return value;
		},
	);
}

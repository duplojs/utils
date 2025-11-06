import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionBigIntMin extends DataParserCheckerDefinition {
	min: bigint;
}

export const checkerBigIntMinKind = createDataParserKind("checker-bigint-min");

type _DataParserCheckerBigIntMin = (
	& Kind<typeof checkerBigIntMinKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionBigIntMin,
		bigint
	>
);

export interface DataParserCheckerBigIntMin extends _DataParserCheckerBigIntMin {

}

export function checkerBigIntMin(
	min: bigint,
	definition: Partial<
		Omit<DataParserCheckerDefinitionBigIntMin, "min">
	> = {},
): DataParserCheckerBigIntMin {
	return dataParserCheckerInit<DataParserCheckerBigIntMin>(
		checkerBigIntMinKind,
		{
			definition: {
				...definition,
				min,
			},
		},
		(value, self) => {
			if (value < self.definition.min) {
				return SymbolDataParserErrorIssue;
			}

			return value;
		},
	);
}

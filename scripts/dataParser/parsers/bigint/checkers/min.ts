import { createKind, type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export interface DataParserCheckerDefinitionBigIntMin extends DataParserCheckerDefinition {
	min: bigint;
}

export const dataParserCheckerBigIntMinKind = createKind("data-parser-checker-bigint-min");

type _DataParserCheckerBigIntMin = (
	& Kind<typeof dataParserCheckerBigIntMinKind.definition>
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
		dataParserCheckerBigIntMinKind,
		{
			definition: {
				...definition,
				min,
			},
		},
		(value) => {
			if (value < min) {
				return SymbolDataParserErrorIssue;
			}

			return value;
		},
	);
}

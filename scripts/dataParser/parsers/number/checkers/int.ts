import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { number as numberParser } from "..";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionInt extends DataParserCheckerDefinition {

}

export const checkerIntKind = createDataParserKind("checker-number-int");

type _DataParserCheckerInt = (
	& Kind<typeof checkerIntKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionInt,
		number
	>
);

export interface DataParserCheckerInt extends _DataParserCheckerInt {

}

export function checkerInt(
	definition: Partial<DataParserCheckerDefinitionInt> = {},
): DataParserCheckerInt {
	return dataParserCheckerInit<DataParserCheckerInt>(
		checkerIntKind,
		{
			definition,
		},
		(data) => {
			if (Number.isInteger(data)) {
				return data;
			}

			return SymbolDataParserErrorIssue;
		},
	);
}

export function int(
	definition?: Partial<DataParserCheckerDefinitionInt>,
) {
	return numberParser({
		checkers: [checkerInt(definition)],
	});
}

import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserCheckerBase } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { number as numberParser } from "..";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionInt extends DataParserCheckerDefinition {

}

export const checkerIntKind = createDataParserKind("checker-number-int");

type _DataParserCheckerInt = (
	& Kind<typeof checkerIntKind.definition>
	& DataParserCheckerBase<
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
		(data, error, self, dataParser) => {
			if (Number.isInteger(data)) {
				return data;
			}

			return addIssue(error, "integer", data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
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

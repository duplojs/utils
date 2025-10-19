import { createKind, type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserChecker, type DataParserCheckerDefinition } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { string } from "..";

export interface DataParserCheckerDefinitionEmail extends DataParserCheckerDefinition {
	normalize?: boolean;
}

export const dataParserCheckerEmailKind = createKind("data-parser-checker-email");

type _DataParserCheckerEmail = (
	& Kind<typeof dataParserCheckerEmailKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionEmail,
		string
	>
);

export interface DataParserCheckerEmail extends _DataParserCheckerEmail {

}

const emailPattern = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;

export function checkerEmail(
	definition: Partial<DataParserCheckerDefinitionEmail> = {},
): DataParserCheckerEmail {
	const { normalize } = definition;

	return dataParserCheckerInit<DataParserCheckerEmail>(
		dataParserCheckerEmailKind,
		{
			definition,
		},
		(input) => {
			if (!emailPattern.test(input)) {
				return SymbolDataParserErrorIssue;
			}

			return normalize ? input.toLowerCase() : input;
		},
	);
}

export function email(
	definition?: Partial<DataParserCheckerDefinitionEmail>,
) {
	return string({
		checkers: [checkerEmail(definition)],
	});
}

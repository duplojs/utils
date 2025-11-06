import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserChecker, type DataParserCheckerDefinition } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { string } from "..";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionEmail extends DataParserCheckerDefinition {
	normalize?: boolean;
	pattern: RegExp;
}

export const checkerEmailKind = createDataParserKind("checker-string-email");

type _DataParserCheckerEmail = (
	& Kind<typeof checkerEmailKind.definition>
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
	return dataParserCheckerInit<DataParserCheckerEmail>(
		checkerEmailKind,
		{
			definition: {
				...definition,
				pattern: emailPattern,
			},
		},
		(input, self) => {
			if (!self.definition.pattern.test(input)) {
				return SymbolDataParserErrorIssue;
			}

			return self.definition.normalize ? input.toLowerCase() : input;
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

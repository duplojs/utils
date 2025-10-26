import { createKind, type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export interface DataParserCheckerDefinitionStringRegex extends DataParserCheckerDefinition {
	regex: RegExp;
}

export const dataParserCheckerStringRegexKind = createKind("data-parser-checker-string-regex");

type _DataParserCheckerStringRegex = (
	& Kind<typeof dataParserCheckerStringRegexKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionStringRegex,
		string
	>
);

export interface DataParserCheckerStringRegex extends _DataParserCheckerStringRegex {

}

export function checkerStringRegex(
	regex: RegExp,
	definition: Partial<
		Omit<DataParserCheckerDefinitionStringRegex, "regex">
	> = {},
): DataParserCheckerStringRegex {
	return dataParserCheckerInit<DataParserCheckerStringRegex>(
		dataParserCheckerStringRegexKind,
		{
			definition: {
				...definition,
				regex,
			},
		},
		(value, self) => self.definition.regex.test(value)
			? value
			: SymbolDataParserErrorIssue,
	);
}

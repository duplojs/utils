import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionRegex extends DataParserCheckerDefinition {
	regex: RegExp;
}

export const checkerRegexKind = createDataParserKind("checker-regex");

type _DataParserCheckerStringRegex = (
	& Kind<typeof checkerRegexKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionRegex,
		string
	>
);

export interface DataParserCheckerRegex extends _DataParserCheckerStringRegex {

}

export function checkerRegex(
	regex: RegExp,
	definition: Partial<
		Omit<DataParserCheckerDefinitionRegex, "regex">
	> = {},
): DataParserCheckerRegex {
	return dataParserCheckerInit<DataParserCheckerRegex>(
		checkerRegexKind,
		{
			definition: {
				...definition,
				regex,
			},
		},
		(data, error, self) => self.definition.regex.test(data)
			? data
			: addIssue(error, `string with pattern ${self.definition.regex.source.toString()}`, data, self.definition.errorMessage),
	);
}

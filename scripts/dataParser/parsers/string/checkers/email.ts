import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserChecker, type DataParserCheckerDefinition } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { string } from "..";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionEmail extends DataParserCheckerDefinition {
	regex: RegExp;
}

export const checkerEmailKind = createDataParserKind("checker-email");

type _DataParserCheckerEmail = (
	& Kind<typeof checkerEmailKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionEmail,
		string
	>
);

export interface DataParserCheckerEmail extends _DataParserCheckerEmail {

}

const emailRegex = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;

export function checkerEmail(
	definition: Partial<
		Omit<DataParserCheckerDefinitionEmail, "regex">
	> = {},
): DataParserCheckerEmail {
	return dataParserCheckerInit<DataParserCheckerEmail>(
		checkerEmailKind,
		{
			definition: {
				...definition,
				regex: emailRegex,
			},
		},
		(data, error, self) => self.definition.regex.test(data)
			? data
			: addIssue(error, "email", data, self.definition.errorMessage),
	);
}

export function email(
	definition?: Partial<
		Omit<DataParserCheckerDefinitionEmail, "regex">
	>,
) {
	return string({
		checkers: [checkerEmail(definition)],
	});
}

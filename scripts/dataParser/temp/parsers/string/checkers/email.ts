import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { string } from "..";
import { createDataParserKind } from "../../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionEmail extends DataParserCheckerDefinition {
	regex: RegExp;
}

export const checkerEmailKind = createDataParserKind("checker-email");

const emailRegex = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;

export class DataParserCheckerEmail extends DataParserCheckerBase.init(
	checkerEmailKind,
)<
		DataParserCheckerDefinitionEmail,
		string
	> {
	public get classConstructor() {
		return DataParserCheckerEmail;
	}

	public isAsynchronous() {
		return false;
	}

	public static execCheck(
		data: string,
		error: DataParserError,
		self: DataParserCheckerEmail,
		dataParser: DataParser,
	) {
		return self.definition.regex.test(data)
			? data
			: addIssue(
				error,
				"email",
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
	}

	public static create(
		definition: Partial<
			Omit<DataParserCheckerDefinitionEmail, "regex">
		> = {},
	) {
		return new DataParserCheckerEmail({
			...definition,
			regex: emailRegex,
		});
	}
}

export const checkerEmail = DataParserCheckerEmail.create;

export function email(
	definition?: Partial<
		Omit<DataParserCheckerDefinitionEmail, "regex">
	>,
) {
	return string({
		checkers: [checkerEmail(definition)],
	});
}

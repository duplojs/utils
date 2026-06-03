import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionRegex extends DataParserCheckerDefinition {
	regex: RegExp;
}

export const checkerRegexKind = createDataParserKind("checker-regex");

export class DataParserCheckerRegex extends DataParserCheckerBase.init(
	checkerRegexKind,
)<
		DataParserCheckerDefinitionRegex,
		string
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerRegex);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		data: string,
		error: DataParserError,
		self: DataParserCheckerRegex,
		dataParser: DataParser,
	) {
		return self.definition.regex.test(data)
			? data
			: addIssue(
				error,
				`string with pattern ${self.definition.regex.source.toString()}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
	}

	public static override create(
		regex: RegExp,
		definition: Partial<
			Omit<DataParserCheckerDefinitionRegex, "regex">
		> = {},
	) {
		return new DataParserCheckerRegex({
			...definition,
			regex,
		});
	}
}

export const checkerRegex = DataParserCheckerRegex.create;

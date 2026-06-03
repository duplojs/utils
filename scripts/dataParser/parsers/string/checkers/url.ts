import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { string } from "..";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionUrl extends DataParserCheckerDefinition {
	hostname?: RegExp;
	protocol?: RegExp;
	normalize?: boolean;
}

export const checkerUrlKind = createDataParserKind("checker-url");

const regexRemoveDote = /:$/;

export class DataParserCheckerUrl extends DataParserCheckerBase.init(
	checkerUrlKind,
)<
		DataParserCheckerDefinitionUrl,
		string
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerUrl);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		data: string,
		error: DataParserError,
		self: DataParserCheckerUrl,
		dataParser: DataParser,
	) {
		try {
			const url = new URL(data);

			if (self.definition.hostname) {
				self.definition.hostname.lastIndex = 0;
				if (!self.definition.hostname.test(url.hostname)) {
					return addIssue(
						error,
						`URL with hostname matching ${self.definition.hostname.source}`,
						data,
						self.definition.errorMessage ?? dataParser.definition.errorMessage,
					);
				}
			}

			if (self.definition.protocol) {
				self.definition.protocol.lastIndex = 0;
				if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
					return addIssue(
						error,
						`URL with protocol matching ${self.definition.protocol.source}`,
						data,
						self.definition.errorMessage ?? dataParser.definition.errorMessage,
					);
				}
			}
			if (self.definition.normalize) {
				return url.href;
			} else {
				return data;
			}
		} catch {
			return addIssue(
				error,
				"valid URL",
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
		}
	}

	public static override create(
		definition: Partial<DataParserCheckerDefinitionUrl> = {},
	) {
		return new DataParserCheckerUrl(definition);
	}
}

export const checkerUrl = DataParserCheckerUrl.create;

export function url(
	definition?: Partial<DataParserCheckerDefinitionUrl>,
) {
	return string({
		checkers: [checkerUrl(definition)],
	});
}

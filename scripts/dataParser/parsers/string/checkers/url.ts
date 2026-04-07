import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { string } from "..";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionUrl extends DataParserCheckerDefinition {
	hostname?: RegExp;
	protocol?: RegExp;
	normalize?: boolean;
}

export const checkerUrlKind = createDataParserKind("checker-string-url");

type _DataParserCheckerUrl = (
	& Kind<typeof checkerUrlKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionUrl,
		string
	>
);

export interface DataParserCheckerUrl extends _DataParserCheckerUrl {

}

const regexRemoveDote = /:$/;

export function checkerUrl(
	definition: Partial<DataParserCheckerDefinitionUrl> = {},
): DataParserCheckerUrl {
	return dataParserCheckerInit<DataParserCheckerUrl>(
		checkerUrlKind,
		{
			definition: definition,
		},
		(input, error, self) => {
			try {
				const url = new URL(input);

				if (self.definition.hostname) {
					self.definition.hostname.lastIndex = 0;
					if (!self.definition.hostname.test(url.hostname)) {
						return addIssue(error, `URL with hostname matching ${self.definition.hostname.source}`, input, self.definition.errorMessage);
					}
				}

				if (self.definition.protocol) {
					self.definition.protocol.lastIndex = 0;
					if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
						return addIssue(error, `URL with protocol matching ${self.definition.protocol.source}`, input, self.definition.errorMessage);
					}
				}
				if (self.definition.normalize) {
					return url.href;
				} else {
					return input;
				}
			} catch {
				return addIssue(error, "valid URL", input, self.definition.errorMessage);
			}
		},
	);
}

export function url(
	definition?: Partial<DataParserCheckerDefinitionUrl>,
) {
	return string({
		checkers: [checkerUrl(definition)],
	});
}

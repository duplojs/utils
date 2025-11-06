import { type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
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
		(input, self) => {
			try {
				const url = new URL(input);

				if (self.definition.hostname) {
					self.definition.hostname.lastIndex = 0;
					if (!self.definition.hostname.test(url.hostname)) {
						return SymbolDataParserErrorIssue;
					}
				}

				if (self.definition.protocol) {
					self.definition.protocol.lastIndex = 0;
					if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
						return SymbolDataParserErrorIssue;
					}
				}
				if (self.definition.normalize) {
					return url.href;
				} else {
					return input;
				}
			} catch {
				return SymbolDataParserErrorIssue;
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

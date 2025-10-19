import { createKind, type Kind } from "@scripts/common";
import { type DataParserCheckerDefinition, dataParserCheckerInit, type DataParserChecker } from "@scripts/dataParser/base";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { string } from "..";

export interface DataParserCheckerDefinitionUrl extends DataParserCheckerDefinition {
	hostname?: RegExp;
	protocol?: RegExp;
	normalize?: boolean;
}

export const dataParserCheckerUrlKind = createKind("data-parser-checker-url");

type _DataParserCheckerUrl = (
	& Kind<typeof dataParserCheckerUrlKind.definition>
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
	const { hostname, protocol, normalize } = definition;

	return dataParserCheckerInit<DataParserCheckerUrl>(
		dataParserCheckerUrlKind,
		{
			definition: definition,
		},
		(input) => {
			try {
				const url = new URL(input);

				if (hostname) {
					hostname.lastIndex = 0;
					if (!hostname.test(url.hostname)) {
						return SymbolDataParserErrorIssue;
					}
				}

				if (protocol) {
					protocol.lastIndex = 0;
					if (!protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
						return SymbolDataParserErrorIssue;
					}
				}
				if (normalize) {
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

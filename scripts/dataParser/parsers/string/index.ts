import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserCheckerUrl, type DataParserCheckerEmail } from "./checkers";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export * from "./checkers";

export type DataParserStringCheckers = (
	| DataParserCheckerUrl
	| DataParserCheckerEmail
);

export interface DataParserDefinitionString extends DataParserDefinition<
	DataParserStringCheckers
> {
	coerce: boolean;
}

export const dataParserStringKind = createKind("data-parser-string");

type _DataParserString<
	GenericDefinition extends DataParserDefinitionString,
> = (
	& DataParser<
		GenericDefinition,
		string,
		string
	>
	& Kind<typeof dataParserStringKind.definition>
);

export interface DataParserString<
	GenericDefinition extends DataParserDefinitionString = DataParserDefinitionString,
> extends _DataParserString<GenericDefinition> {
	addChecker<
		GenericChecker extends [DataParserStringCheckers, ...DataParserStringCheckers[]],
	>(
		...args: GenericChecker
	): DataParserString<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

}

export function string<
	const GenericDefinition extends Partial<DataParserDefinitionString> = never,
>(
	definition?: GenericDefinition,
): DataParserString<
		MergeDefinition<
			DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserInit<DataParserString>(
		dataParserStringKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			if (self.definition.coerce) {
				try {
					// eslint-disable-next-line no-param-reassign
					data = String(data);
				} catch {}
			}

			if (typeof data === "string") {
				return data;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}

import { createKind, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export interface DataParserDefinitionEmpty extends DataParserDefinition<never> {
	coerce: boolean;
}

export const dataParserEmptyKind = createKind("data-parser-empty");

type _DataParserEmpty<
	GenericDefinition extends DataParserDefinitionEmpty,
> = (
	& DataParser<
		GenericDefinition,
		undefined,
		undefined
	>
	& Kind<typeof dataParserEmptyKind.definition>
);

export interface DataParserEmpty<
	GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty,
> extends _DataParserEmpty<GenericDefinition> {

}

export function empty<
	const GenericDefinition extends Partial<DataParserDefinitionEmpty> = DataParserDefinitionEmpty,
>(
	definition?: GenericDefinition,
): DataParserEmpty<
		MergeDefinition<
			DataParserDefinitionEmpty,
			GenericDefinition
		>
	> {
	return dataParserInit<DataParserEmpty>(
		dataParserEmptyKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			if (data === undefined) {
				return data;
			} else if (self.definition.coerce && data === "undefined") {
				return undefined;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}

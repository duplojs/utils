import { type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export interface DataParserDefinitionEmpty extends DataParserDefinition<never> {
	readonly coerce: boolean;
}

export const dataParserEmptyKind = createDataParserKind("empty");

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
	const GenericDefinition extends Partial<DataParserDefinitionEmpty> = never,
>(
	definition?: GenericDefinition,
): DataParserEmpty<
		MergeDefinition<
			DataParserDefinitionEmpty,
			NeverCoalescing<GenericDefinition, {}>
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

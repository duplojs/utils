import { type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export interface DataParserDefinitionNil extends DataParserDefinition<never> {
	readonly coerce: boolean;
}

export const nilKind = createDataParserKind("nil");

type _DataParserNil<
	GenericDefinition extends DataParserDefinitionNil,
> = (
	& DataParser<
		GenericDefinition,
		null,
		null
	>
	& Kind<typeof nilKind.definition>
);

export interface DataParserNil<
	GenericDefinition extends DataParserDefinitionNil = DataParserDefinitionNil,
> extends _DataParserNil<GenericDefinition> {

}

export function nil<
	const GenericDefinition extends Partial<DataParserDefinitionNil> = never,
>(
	definition?: GenericDefinition,
): DataParserNil<
		MergeDefinition<
			DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserInit<DataParserNil>(
		nilKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			if (data === null) {
				return data;
			} else if (self.definition.coerce && data === "null") {
				return null;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}

import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import * as DArray from "@scripts/array";

export type LiteralValue = string | number | bigint | undefined | null | boolean;

export interface DataParserDefinitionLiteral extends DataParserDefinition<never> {
	value: LiteralValue[];
}

export const dataParserLiteralKind = createKind("data-parser-literal");

type _DataParserLiteral<
	GenericDefinition extends DataParserDefinitionLiteral,
> = (
	& DataParser<
		GenericDefinition,
		GenericDefinition["value"][number],
		GenericDefinition["value"][number]
	>
	& Kind<typeof dataParserLiteralKind.definition>
);

export interface DataParserLiteral<
	GenericDefinition extends DataParserDefinitionLiteral = DataParserDefinitionLiteral,
> extends _DataParserLiteral<GenericDefinition> {

}

export function literal<
	const GenericValue extends LiteralValue,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionLiteral, "value">
	> = never,
>(
	value: GenericValue | GenericValue[],
	definition?: GenericDefinition,
): DataParserLiteral<
		MergeDefinition<
			DataParserDefinitionLiteral,
			NeverCoalescing<GenericDefinition, {}> & { value: GenericValue[] }
		>
	> {
	const formattedValue = DArray.coalescing(value);

	return dataParserInit<DataParserLiteral>(
		dataParserLiteralKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				value: formattedValue,
			},
		},
		(data) => {
			if (formattedValue.includes(data as never)) {
				return data as never;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}

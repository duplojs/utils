import { type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import * as DArray from "@scripts/array";
import { createDataParserKind } from "../kind";

export type LiteralValue = string | number | bigint | undefined | null | boolean;

export interface DataParserDefinitionLiteral extends DataParserDefinition<never> {
	readonly value: LiteralValue[];
}

export const literalKind = createDataParserKind("literal");

type _DataParserLiteral<
	GenericDefinition extends DataParserDefinitionLiteral,
> = (
	& DataParser<
		GenericDefinition,
		GenericDefinition["value"][number],
		GenericDefinition["value"][number]
	>
	& Kind<typeof literalKind.definition>
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
	return dataParserInit<DataParserLiteral>(
		literalKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				value: DArray.coalescing(value),
			},
		},
		(data, _error, self) => {
			if (self.definition.value.includes(data as never)) {
				return data as never;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}

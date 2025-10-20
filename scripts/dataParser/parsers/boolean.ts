import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";

export interface DataParserDefinitionBoolean extends DataParserDefinition<never> {
	coerce: boolean;
}

export const dataParserBooleanKind = createKind("data-parser-boolean");

type _DataParserBoolean<
	GenericDefinition extends DataParserDefinitionBoolean,
> = (
	& DataParser<
		GenericDefinition,
		boolean,
		boolean
	>
	& Kind<typeof dataParserBooleanKind.definition>
);

export interface DataParserBoolean<
	GenericDefinition extends DataParserDefinitionBoolean = DataParserDefinitionBoolean,
> extends _DataParserBoolean<GenericDefinition> {

}

export function boolean<
	const GenericDefinition extends Partial<DataParserDefinitionBoolean> = never,
>(
	definition?: GenericDefinition,
): DataParserBoolean<
		MergeDefinition<
			DataParserDefinitionBoolean,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const coerce = definition?.coerce ?? false;

	return dataParserInit<DataParserBoolean>(
		dataParserBooleanKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce,
			},
		},
		(data) => {
			if (typeof data === "boolean") {
				return data;
			} else if (coerce) {
				if (typeof data === "string") {
					const lower = data.trim().toLowerCase();
					if (lower === "true" || lower === "false") {
						return lower === "true";
					} else {
						return SymbolDataParserErrorIssue;
					}
				} else if (
					typeof data === "number"
					&& (
						data === 0
						|| data === 1
					)
				) {
					return data === 1;
				}
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}

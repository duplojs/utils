import { type NeverCoalescing, type Kind, type MergeKind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export interface DataParserDefinitionBoolean extends DataParserDefinition<never> {
	readonly coerce: boolean;
}

export const dataParserBooleanKind = createDataParserKind("boolean");

export interface DataParserBoolean<
	GenericDefinition extends DataParserDefinitionBoolean = DataParserDefinitionBoolean,
> extends MergeKind<
		Kind<typeof dataParserBooleanKind.definition>,
		DataParser<
			GenericDefinition,
			boolean,
			boolean
		>
	> {

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
	return dataParserInit<DataParserBoolean>(
		dataParserBooleanKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			if (typeof data === "boolean") {
				return data;
			} else if (self.definition.coerce) {
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

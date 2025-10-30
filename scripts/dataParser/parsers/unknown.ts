import { type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";

export interface DataParserDefinitionUnknown extends DataParserDefinition<never> {
}

export const unknownKind = createDataParserKind("unknown");

type _DataParserUnknown<
	GenericDefinition extends DataParserDefinitionUnknown,
> = (
	& DataParser<
		GenericDefinition,
		unknown,
		unknown
	>
	& Kind<typeof unknownKind.definition>
);

export interface DataParserUnknown<
	GenericDefinition extends DataParserDefinitionUnknown = DataParserDefinitionUnknown,
> extends _DataParserUnknown<GenericDefinition> {

}

export function unknown<
	const GenericDefinition extends Partial<DataParserDefinitionUnknown> = never,
>(
	definition?: GenericDefinition,
): DataParserUnknown<
		MergeDefinition<
			DataParserDefinitionUnknown,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserInit<DataParserUnknown>(
		unknownKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
			},
		},
		(data) => data,
	) as never;
}

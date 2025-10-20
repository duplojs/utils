import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input } from "../base";
import { type DataParsers, type MergeDefinition } from "@scripts/dataParser/types";

export interface DataParserDefinitionOptional extends DataParserDefinition<never> {
	inner: DataParsers;
}

export const dataParserOptionalKind = createKind("data-parser-optional");

type _DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional,
> = (
	& DataParser<
		GenericDefinition,
		Output<GenericDefinition["inner"]> | undefined,
		Input<GenericDefinition["inner"]> | undefined
	>
	& Kind<typeof dataParserOptionalKind.definition>
);

export interface DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional,
> extends _DataParserOptional<GenericDefinition> {

}

export function optional<
	GenericDataParser extends DataParsers,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionOptional, "inner">
	> = never,
>(
	inner: GenericDataParser,
	definition?: GenericDefinition,
): DataParserOptional<
		MergeDefinition<
			DataParserDefinitionOptional,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	return dataParserInit<DataParserOptional>(
		dataParserOptionalKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				inner,
			},
		},
		{
			sync: (data, error, self) => {
				if (data === undefined) {
					return data;
				}

				return self.definition.inner.exec(data, error);
			},
			async: async(data, error, self) => {
				if (data === undefined) {
					return data;
				}

				return self.definition.inner.asyncExec(data, error);
			},
		},
	) as never;
}

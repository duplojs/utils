import { type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";

export interface DataParserDefinitionOptional extends DataParserDefinition<never> {
	readonly inner: DataParser;
}

export const optionalKind = createDataParserKind("optional");

type _DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional,
> = (
	& DataParser<
		GenericDefinition,
		Output<GenericDefinition["inner"]> | undefined,
		Input<GenericDefinition["inner"]> | undefined
	>
	& Kind<typeof optionalKind.definition>
);

export interface DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional,
> extends _DataParserOptional<GenericDefinition> {

}

export function optional<
	GenericDataParser extends DataParser,
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
		optionalKind,
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

import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input } from "../base";
import { type DataParsers, type MergeDefinition } from "@scripts/dataParser/types";

export interface DataParserDefinitionLazy extends DataParserDefinition<never> {
	getter(): DataParsers;
}

export const dataParserLazyKind = createKind("data-parser-lazy");

type _DataParserLazy<
	GenericDefinition extends DataParserDefinitionLazy,
> = (
	& DataParser<
		GenericDefinition,
		Output<ReturnType<GenericDefinition["getter"]>>,
		Input<ReturnType<GenericDefinition["getter"]>>
	>
	& Kind<typeof dataParserLazyKind.definition>
);

export interface DataParserLazy<
	GenericDefinition extends DataParserDefinitionLazy = DataParserDefinitionLazy,
> extends _DataParserLazy<GenericDefinition> {

}

export function lazy<
	GenericDataParser extends DataParsers,
	const GenericDefinition extends Partial<DataParserDefinitionLazy> = never,
>(
	getter: () => GenericDataParser,
	definition?: GenericDefinition,
): DataParserLazy<
		MergeDefinition<
			DataParserDefinitionLazy,
			NeverCoalescing<GenericDefinition, {}> & {
				getter(): GenericDataParser;
			}
		>
	> {
	return dataParserInit<DataParserLazy>(
		dataParserLazyKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				getter,
			},
		},
		{
			sync: (data, _error, self) => self.definition.getter().exec(data, _error),
			async: (data, _error, self) => self.definition.getter().asyncExec(data, _error),
		},
	) as never;
}

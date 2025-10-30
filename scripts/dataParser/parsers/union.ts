import { type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export type UnionOptions = readonly [DataParser, ...DataParser[]];

export interface DataParserDefinitionUnion extends DataParserDefinition<never> {
	readonly options: UnionOptions;
}

export const unionKind = createDataParserKind("union");

type _DataParserUnion<
	GenericDefinition extends DataParserDefinitionUnion,
> = (
	& DataParser<
		GenericDefinition,
		Output<GenericDefinition["options"][number]>,
		Input<GenericDefinition["options"][number]>
	>
	& Kind<typeof unionKind.definition>
);

export interface DataParserUnion<
	GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion,
> extends _DataParserUnion<GenericDefinition> {

}

export function union<
	GenericOptions extends UnionOptions,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionUnion, "options">
	> = never,
>(
	options: GenericOptions,
	definition?: GenericDefinition,
): DataParserUnion<
		MergeDefinition<
			DataParserDefinitionUnion,
			NeverCoalescing<GenericDefinition, {}> & { options: GenericOptions }
		>
	> {
	return dataParserInit<DataParserUnion>(
		unionKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				options,
			},
		},
		{
			sync: (data, error, self) => {
				for (const dataParser of self.definition.options) {
					const result = dataParser.exec(data, error);

					if (result !== SymbolDataParserError) {
						return result;
					}
				}

				return SymbolDataParserErrorIssue;
			},
			async: async(data, error, self) => {
				for (const dataParser of self.definition.options) {
					const result = await dataParser.asyncExec(data, error);

					if (result !== SymbolDataParserError) {
						return result;
					}
				}

				return SymbolDataParserErrorIssue;
			},
		},
	) as never;
}

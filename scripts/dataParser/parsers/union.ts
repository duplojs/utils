import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";

export type UnionOptions = readonly [DataParser, ...DataParser[]];

export type DataParserUnionCheckers<
	GenericInput extends unknown = unknown,
> = (
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionUnion extends DataParserDefinition<DataParserUnionCheckers> {
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
	addChecker<
		GenericChecker extends readonly [
			DataParserUnionCheckers<Output<this>>,
			...DataParserUnionCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserUnionCheckers<Output<this>>,
				...DataParserUnionCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserUnion<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
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

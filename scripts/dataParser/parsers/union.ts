import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export type UnionOptions = readonly [DataParser, ...DataParser[]];

export interface DataParserUnionCheckerCustom<
	GenericInput extends unknown = unknown,
> {}

export type DataParserUnionCheckers<
	GenericInput extends unknown = unknown,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserUnionCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserUnionCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionUnion extends DataParserDefinition<
	DataParserUnionCheckers
> {
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

/**
 * {@include dataParser/classic/union/index.md}
 */
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
	const self = dataParserInit<DataParserUnion>(
		unionKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			options,
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
		union.overrideHandler,
	) as never;

	return self as never;
}

union.overrideHandler = createOverride<DataParserUnion>("@duplojs/utils/data-parser/union");

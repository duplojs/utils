import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";

type _DataParserUnionExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnion,
> = (
	& Kind<typeof dataParsers.unionKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<dataParsers.DataParserUnion<GenericDefinition>>,
		Input<dataParsers.DataParserUnion<GenericDefinition>>
	>
);

export interface DataParserUnionExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion,
> extends _DataParserUnionExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserUnionCheckers<Output<this>>,
			...dataParsers.DataParserUnionCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserUnionCheckers<Output<this>>,
				...dataParsers.DataParserUnionCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserUnionExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserUnionExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/union/index.md}
 */
export function union<
	GenericOptions extends dataParsers.UnionOptions,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionUnion, "options">
	> = never,
>(
	options: GenericOptions,
	definition?: GenericDefinition,
): DataParserUnionExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionUnion,
			NeverCoalescing<GenericDefinition, {}> & { options: GenericOptions }
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserUnion,
		DataParserUnionExtended
	>(
		dataParsers.union(options, definition),
		{},
		union.overrideHandler,
	);

	return self as never;
}

union.overrideHandler = createOverride<DataParserUnionExtended>("@duplojs/utils/data-parser-extended/union");

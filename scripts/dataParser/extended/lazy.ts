import { type Kind, type Memoized, type FixDeepFunctionInfer, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";

type _DataParserLazyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLazy,
> = (
	& Kind<typeof dataParsers.lazyKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<GenericDefinition["getter"]["value"]>,
		Input<GenericDefinition["getter"]["value"]>
	>
);

export interface DataParserLazyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLazy = dataParsers.DataParserDefinitionLazy,
> extends _DataParserLazyExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserLazyCheckers<Output<this>>,
			...dataParsers.DataParserLazyCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserLazyCheckers<Output<this>>,
				...dataParsers.DataParserLazyCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserLazyExtended<
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
	): DataParserLazyExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/lazy/index.md}
 */
export function lazy<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionLazy> = never,
>(
	getter: () => GenericDataParser,
	definition?: GenericDefinition,
): DataParserLazyExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionLazy,
			NeverCoalescing<GenericDefinition, {}> & {
				getter: Memoized<GenericDataParser>;
			}
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserLazy,
		DataParserLazyExtended
	>(
		dataParsers.lazy(getter, definition),
		{},
		lazy.overrideHandler,
	);

	return self as never;
}

lazy.overrideHandler = createOverride<DataParserLazyExtended>("@duplojs/utils/data-parser-extended/lazy");

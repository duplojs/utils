import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type Memoized, memo, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, type DataParserChecker, type DataParserCheckerDefinition, type DataParser } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";

export type DataParserLazyCheckers<
	GenericInput extends unknown = unknown,
> = DataParserChecker<
	DataParserCheckerDefinition,
	GenericInput
>;

export interface DataParserDefinitionLazy<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserLazyCheckers<GenericInput>
	> {
	getter: Memoized<DataParser>;
}

export const lazyKind = createDataParserKind("lazy");

type _DataParserLazy<
	GenericDefinition extends DataParserDefinitionLazy,
> = (
	& DataParserBase<
		GenericDefinition,
		Output<GenericDefinition["getter"]["value"]>,
		Input<GenericDefinition["getter"]["value"]>
	>
	& Kind<typeof lazyKind.definition>
);

export interface DataParserLazy<
	GenericDefinition extends DataParserDefinitionLazy = DataParserDefinitionLazy,
> extends _DataParserLazy<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserLazyCheckers<Output<this>>,
			...DataParserLazyCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserLazyCheckers<Output<this>>,
				...DataParserLazyCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserLazy<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/lazy/index.md}
 */
export function lazy<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		DataParserDefinitionLazy<
			Output<GenericDataParser>
		>
	> = never,
>(
	getter: () => GenericDataParser,
	definition?: GenericDefinition,
): DataParserLazy<
		MergeDefinition<
			DataParserDefinitionLazy,
			NeverCoalescing<GenericDefinition, {}> & {
				getter: Memoized<GenericDataParser>;
			}
		>
	> {
	const self = dataParserBaseInit<DataParserLazy>(
		lazyKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			getter: memo(getter),
		},
		{
			sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
			async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
			isAsynchronous: (self) => self.definition.getter.value.isAsynchronous(),
		},
		lazy.overrideHandler,
	) as never;

	return self as never;
}

lazy.overrideHandler = createOverride<DataParserLazy>("@duplojs/utils/data-parser/lazy");

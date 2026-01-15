import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type Memoized, memo, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserLazyCheckerCustom<
	GenericInput extends unknown = unknown,
> {}

export type DataParserLazyCheckers<
	GenericInput extends unknown = unknown,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserLazyCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserLazyCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionLazy extends DataParserDefinition<
	DataParserLazyCheckers
> {
	getter: Memoized<DataParser>;
}

export const lazyKind = createDataParserKind("lazy");

type _DataParserLazy<
	GenericDefinition extends DataParserDefinitionLazy,
> = (
	& DataParser<
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
	const GenericDefinition extends Partial<DataParserDefinitionLazy> = never,
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
	const self = dataParserInit<DataParserLazy>(
		lazyKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			getter: memo(getter),
		},
		{
			sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
			async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
		},
		lazy.overrideHandler,
	) as never;

	return self as never;
}

lazy.overrideHandler = createOverride<DataParserLazy>("@duplojs/utils/data-parser/lazy");

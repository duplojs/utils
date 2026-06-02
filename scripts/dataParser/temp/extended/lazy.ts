import { type FixDeepFunctionInfer, type Memoized, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";

export class DataParserLazyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLazy = dataParsers.DataParserDefinitionLazy,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserLazy)<
		GenericDefinition,
		Output<dataParsers.DataParserLazy<GenericDefinition>>,
		Input<dataParsers.DataParserLazy<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserLazyExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserLazyExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserLazyExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public static create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionLazy<
				Output<GenericDataParser>
			>,
			"getter"
		> = never,
	>(
		getter: () => GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionLazy<
					Output<GenericDataParser>
				>,
				"getter"
			>,
			GenericDefinition
		>,
	): DataParserLazyExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionLazy,
			NeverCoalescing<GenericDefinition, {}> & {
				getter: Memoized<GenericDataParser>;
			}
			>
		> {
		return new DataParserLazyExtended(this.prepareDefinition(getter, definition)) as never;
	}
}

export const lazy = DataParserLazyExtended.create;

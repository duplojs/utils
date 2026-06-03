
import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserDateExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionDate = dataParsers.DataParserDefinitionDate,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserDate)<
		GenericDefinition,
		Output<dataParsers.DataParserDate<GenericDefinition>>,
		Input<dataParsers.DataParserDate<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserDateExtended);
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
	) => DataParserDateExtended<
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
	) => DataParserDateExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/date/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate>,
			GenericDefinition
		>,
	): DataParserDateExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionDate,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserDateExtended(this.prepareDefinition(definition)) as never;
	}
}

export const date = detachObjectMethod(DataParserDateExtended, "create");

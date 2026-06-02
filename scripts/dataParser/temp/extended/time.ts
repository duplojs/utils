import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
import { type TheTime } from "@scripts/date";

export class DataParserTimeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTime = dataParsers.DataParserDefinitionTime,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserTime)<
		GenericDefinition,
		Output<dataParsers.DataParserTime<GenericDefinition>>,
		Input<dataParsers.DataParserTime<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTimeExtended);
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
	) => DataParserTimeExtended<
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
	) => DataParserTimeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public min(
		min: TheTime,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionTimeMin, "min">
		>,
	): DataParserTimeExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerTimeMin]
			>
		> {
		return this.addChecker(dataParsers.checkerTimeMin(min, definition)) as never;
	}

	public max(
		max: TheTime,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionTimeMax, "max">
		>,
	): DataParserTimeExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerTimeMax]
			>
		> {
		return this.addChecker(dataParsers.checkerTimeMax(max, definition)) as never;
	}

	public static create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionTime> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionTime>,
			GenericDefinition
		>,
	): DataParserTimeExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionTime,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserTimeExtended(this.prepareDefinition(definition)) as never;
	}
}

export const time = DataParserTimeExtended.create;

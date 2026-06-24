import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "./base";
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

	/**
	 * {@include dataParser/extended/time/min/index.md}
	 */
	public min(
		min: TheTime,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionTimeMin, "min">
		>,
	) {
		return this.addChecker(dataParsers.checkerTimeMin(min, definition));
	}

	/**
	 * {@include dataParser/extended/time/max/index.md}
	 */
	public max(
		max: TheTime,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionTimeMax, "max">
		>,
	) {
		return this.addChecker(dataParsers.checkerTimeMax(max, definition));
	}

	/**
	 * {@include dataParser/extended/time/index.md}
	 */
	public static override create<
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

/**
 * {@include dataParser/extended/time/index.md}
 */
export const time = detachObjectMethod(DataParserTimeExtended, "create");

import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserBigIntExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBigInt = dataParsers.DataParserDefinitionBigInt,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserBigInt)<
		GenericDefinition,
		Output<dataParsers.DataParserBigInt<GenericDefinition>>,
		Input<dataParsers.DataParserBigInt<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserBigIntExtended);
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
	) => DataParserBigIntExtended<
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
	) => DataParserBigIntExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/bigint/min/index.md}
	 */
	public min(
		min: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMin, "min">
		>,
	) {
		return this.addChecker(dataParsers.checkerBigIntMin(min, definition));
	}

	/**
	 * {@include dataParser/extended/bigint/max/index.md}
	 */
	public max(
		max: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMax, "max">
		>,
	) {
		return this.addChecker(dataParsers.checkerBigIntMax(max, definition));
	}

	/**
	 * {@include dataParser/extended/bigint/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBigInt> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionBigInt>,
			GenericDefinition
		>,
	): DataParserBigIntExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionBigInt,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserBigIntExtended(this.prepareDefinition(definition)) as never;
	}
}

export const bigint = DataParserBigIntExtended.create;

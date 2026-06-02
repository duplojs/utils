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

	public min(
		min: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMin, "min">
		>,
	): DataParserBigIntExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerBigIntMin]
			>
		> {
		return this.addChecker(dataParsers.checkerBigIntMin(min, definition)) as never;
	}

	public max(
		max: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMax, "max">
		>,
	): DataParserBigIntExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerBigIntMax]
			>
		> {
		return this.addChecker(dataParsers.checkerBigIntMax(max, definition)) as never;
	}

	public static create<
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
		return new DataParserBigIntExtended(dataParsers.bigint(definition).definition) as never;
	}
}

export const bigint = DataParserBigIntExtended.create;

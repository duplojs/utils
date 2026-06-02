import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserNumberExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNumber = dataParsers.DataParserDefinitionNumber,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserNumber)<
		GenericDefinition,
		Output<dataParsers.DataParserNumber<GenericDefinition>>,
		Input<dataParsers.DataParserNumber<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserNumberExtended);
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
	) => DataParserNumberExtended<
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
	) => DataParserNumberExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionNumberMin, "min">
		>,
	): DataParserNumberExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerNumberMin]
			>
		> {
		return this.addChecker(dataParsers.checkerNumberMin(min, definition)) as never;
	}

	public max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionNumberMax, "max">
		>,
	): DataParserNumberExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerNumberMax]
			>
		> {
		return this.addChecker(dataParsers.checkerNumberMax(max, definition)) as never;
	}

	public int(
		definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>,
	): DataParserNumberExtended<AddCheckersToDefinition<
			GenericDefinition, readonly [dataParsers.DataParserCheckerInt]>
		> {
		return this.addChecker(dataParsers.checkerInt(definition)) as never;
	}

	public static create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber>,
			GenericDefinition
		>,
	): DataParserNumberExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionNumber,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserNumberExtended(dataParsers.number(definition).definition) as never;
	}
}

export const number = DataParserNumberExtended.create;

export function int(definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>) {
	return number({ checkers: [dataParsers.checkerInt(definition)] });
}

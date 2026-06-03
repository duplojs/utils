
import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserNilExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserNil)<
		GenericDefinition,
		Output<dataParsers.DataParserNil<GenericDefinition>>,
		Input<dataParsers.DataParserNil<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserNilExtended);
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
	) => DataParserNilExtended<
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
	) => DataParserNilExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/nil/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil>,
			GenericDefinition
		>,
	): DataParserNilExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionNil,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserNilExtended(this.prepareDefinition(definition)) as never;
	}
}

export const nil = DataParserNilExtended.create;

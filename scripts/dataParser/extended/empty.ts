
import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserEmptyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionEmpty = dataParsers.DataParserDefinitionEmpty,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserEmpty)<
		GenericDefinition,
		Output<dataParsers.DataParserEmpty<GenericDefinition>>,
		Input<dataParsers.DataParserEmpty<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserEmptyExtended);
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
	) => DataParserEmptyExtended<
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
	) => DataParserEmptyExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/empty/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty>,
			GenericDefinition
		>,
	): DataParserEmptyExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionEmpty,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserEmptyExtended(this.prepareDefinition(definition)) as never;
	}
}

export const empty = detachObjectMethod(DataParserEmptyExtended, "create");

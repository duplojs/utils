
import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "./base";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserBooleanExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBoolean = dataParsers.DataParserDefinitionBoolean,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserBoolean)<
		GenericDefinition,
		Output<dataParsers.DataParserBoolean<GenericDefinition>>,
		Input<dataParsers.DataParserBoolean<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserBooleanExtended);
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
	) => DataParserBooleanExtended<
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
	) => DataParserBooleanExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/boolean/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean>,
			GenericDefinition
		>,
	): DataParserBooleanExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionBoolean,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserBooleanExtended(this.prepareDefinition(definition)) as never;
	}
}

export const boolean = detachObjectMethod(DataParserBooleanExtended, "create");

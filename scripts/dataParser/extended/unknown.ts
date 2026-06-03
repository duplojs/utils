
import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserUnknownExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnknown = dataParsers.DataParserDefinitionUnknown,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserUnknown)<
		GenericDefinition,
		Output<dataParsers.DataParserUnknown<GenericDefinition>>,
		Input<dataParsers.DataParserUnknown<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserUnknownExtended);
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
	) => DataParserUnknownExtended<
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
	) => DataParserUnknownExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/unknown/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnknown> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnknown>,
			GenericDefinition
		>,
	): DataParserUnknownExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionUnknown,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserUnknownExtended(this.prepareDefinition(definition)) as never;
	}
}

export const unknown = detachObjectMethod(DataParserUnknownExtended, "create");

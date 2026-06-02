import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserUnionExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserUnion)<
		GenericDefinition,
		Output<dataParsers.DataParserUnion<GenericDefinition>>,
		Input<dataParsers.DataParserUnion<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserUnionExtended);
	}

	public declare addChecker: <
		const GenericChecker extends readonly [
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
	) => DataParserUnionExtended<
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
	) => DataParserUnionExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public static create<
		const GenericOptions extends dataParsers.UnionOptions,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionUnion<
				Output<GenericOptions[number]>
			>,
			"options"
		> = never,
	>(
		options: GenericOptions,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionUnion<
					Output<GenericOptions[number]>
				>,
				"options"
			>,
			GenericDefinition
		>,
	): DataParserUnionExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionUnion,
			NeverCoalescing<GenericDefinition, {}> & {
				options: GenericOptions;
			}
			>
		> {
		return new DataParserUnionExtended(dataParsers.union(options, definition).definition) as never;
	}
}

export const union = DataParserUnionExtended.create;

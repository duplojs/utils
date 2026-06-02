import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";
import { type DataParserError } from "@scripts/dataParser/error";

export class DataParserTransformExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTransform = dataParsers.DataParserDefinitionTransform,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserTransform)<
		GenericDefinition,
		Output<dataParsers.DataParserTransform<GenericDefinition>>,
		Input<dataParsers.DataParserTransform<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTransformExtended);
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
	) => DataParserTransformExtended<
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
	) => DataParserTransformExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public static create<
		GenericDataParser extends DataParser,
		GenericOutput extends unknown,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionTransform<
				dataParsers.DataParserTransformOutput<() => GenericOutput>
			>,
			"inner" | "theFunction"
		> = never,
	>(
		inner: GenericDataParser,
		theFunction: (
			input: Output<GenericDataParser>,
			error: DataParserError
		) => GenericOutput,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionTransform<
					dataParsers.DataParserTransformOutput<() => GenericOutput>
				>,
				"inner" | "theFunction"
			>,
			GenericDefinition
		>,
	): DataParserTransformExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionTransform,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				theFunction(input: Output<GenericDataParser>): GenericOutput;
			}
			>
		> {
		return new DataParserTransformExtended(this.prepareDefinition(inner, theFunction, definition)) as never;
	}
}

export const transform = DataParserTransformExtended.create;

import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";

export class DataParserPipeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionPipe = dataParsers.DataParserDefinitionPipe,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserPipe)<
		GenericDefinition,
		Output<dataParsers.DataParserPipe<GenericDefinition>>,
		Input<dataParsers.DataParserPipe<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserPipeExtended);
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
	) => DataParserPipeExtended<
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
	) => DataParserPipeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/pipe/index.md}
	 */
	public static override create<
		GenericInput extends DataParser,
		GenericOutput extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionPipe<
				Output<GenericOutput>
			>,
			"input" | "output"
		> = never,
	>(
		input: GenericInput,
		output: GenericOutput,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionPipe<
					Output<GenericOutput>
				>,
				"input" | "output"
			>,
			GenericDefinition
		>,
	): DataParserPipeExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionPipe,
			NeverCoalescing<GenericDefinition, {}> & {
				input: GenericInput;
				output: GenericOutput;
			}
			>
		> {
		return new DataParserPipeExtended(this.prepareDefinition(input, output, definition)) as never;
	}
}

export const pipe = DataParserPipeExtended.create;

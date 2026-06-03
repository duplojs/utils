import { detachObjectMethod, callThen, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { popErrorPath, setErrorPath, type DataParserError, SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserPipeCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionPipe<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserPipeCheckers<GenericInput>
	> {
	readonly input: DataParser;
	readonly output: DataParser;
}

export const pipeKind = createDataParserKind("pipe");

export class DataParserPipe<
	GenericDefinition extends DataParserDefinitionPipe = DataParserDefinitionPipe,
> extends DataParserBase.init(
		pipeKind,
	)<
		GenericDefinition,
		Output<GenericDefinition["output"]>,
		Input<GenericDefinition["input"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserPipe);
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
	) => DataParserPipe<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserPipe,
		data: unknown,
		error: DataParserError,
	) {
		const currentIndexPath = error.currentPath.length;

		setErrorPath(error, "(pipeIn)", currentIndexPath);
		return callThen(
			self.definition.input.exec(data, error),
			(resultIn) => {
				if (resultIn === SymbolDataParserError) {
					popErrorPath(error);
					return SymbolDataParserError;
				}

				setErrorPath(error, "(pipeOut)", currentIndexPath);
				return callThen(
					self.definition.output.exec(resultIn, error),
					(resultOut) => {
						popErrorPath(error);
						return resultOut;
					},
				);
			},
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserPipe) {
		return self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous();
	}

	public static override prepareDefinition(
		input: DataParser,
		output: DataParser,
		definition?: Partial<Omit<DataParserDefinitionPipe, "input" | "output">>,
	): DataParserDefinitionPipe {
		return {
			...definition,
			input,
			output,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/pipe/index.md}
	 */
	public static override create<
		GenericInput extends DataParser,
		GenericOutput extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionPipe<
				Output<GenericOutput>
			>,
			"input" | "output"
		> = never,
	>(
		input: GenericInput,
		output: GenericOutput,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionPipe<
					Output<GenericOutput>
				>,
				"input" | "output"
			>,
			GenericDefinition
		>,
	): DataParserPipe<
			MergeDefinition<
				DataParserDefinitionPipe,
				NeverCoalescing<GenericDefinition, {}> & {
					input: GenericInput;
					output: GenericOutput;
				}
			>
		> {
		return new DataParserPipe(this.prepareDefinition(input, output, definition)) as never;
	}
}

export const pipe = detachObjectMethod(DataParserPipe, "create");

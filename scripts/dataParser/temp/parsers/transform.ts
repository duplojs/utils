import { callThen, forward, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { addIssue, type DataParserError, SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserTransformCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionTransform<
	GenericOutput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserTransformCheckers<GenericOutput>
	> {
	readonly inner: DataParser;
	theFunction(input: any, error: DataParserError): GenericOutput;
}

export const transformKind = createDataParserKind("transform");

export type DataParserTransformOutput<
	GenericTheFunction extends DataParserDefinitionTransform["theFunction"],
> = Exclude<
	Awaited<ReturnType<GenericTheFunction>>,
	| typeof SymbolDataParserError
>;

export class DataParserTransform<
	GenericDefinition extends DataParserDefinitionTransform = DataParserDefinitionTransform,
> extends DataParserBase.init(
		transformKind,
	)<
		GenericDefinition,
		DataParserTransformOutput<GenericDefinition["theFunction"]>,
		Input<GenericDefinition["inner"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTransform);
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
	) => DataParserTransform<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserTransform,
		data: unknown,
		error: DataParserError,
	) {
		return callThen(
			self.definition.inner.exec(data, error),
			(innerResult) => {
				if (innerResult === SymbolDataParserError) {
					return SymbolDataParserError;
				}

				return callThen(
					self.definition.theFunction(innerResult, error),
					forward,
					(catchError) => addIssue(
						error,
						"successful transform result",
						catchError,
						self.definition.errorMessage,
					),
				);
			},
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserTransform) {
		return self.definition.inner.isAsynchronous()
			|| self.definition.theFunction.constructor.name === "AsyncFunction";
	}

	public static override create<
		GenericDataParser extends DataParser,
		GenericOutput extends unknown,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionTransform<
				DataParserTransformOutput<() => GenericOutput>
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
				DataParserDefinitionTransform<
					DataParserTransformOutput<() => GenericOutput>
				>,
				"inner" | "theFunction"
			>,
			GenericDefinition
		>,
	): DataParserTransform<
			MergeDefinition<
				DataParserDefinitionTransform,
				NeverCoalescing<GenericDefinition, {}> & {
					inner: GenericDataParser;
					theFunction(input: Output<GenericDataParser>, error: DataParserError): GenericOutput;
				}
			>
		> {
		return new DataParserTransform({
			...definition,
			inner,
			theFunction,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const transform = DataParserTransform.create;

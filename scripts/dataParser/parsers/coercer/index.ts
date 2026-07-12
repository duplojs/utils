import { detachObjectMethod, type FixDeepFunctionInfer, type Memoized, memo, type NeverCoalescing, type KindHandler, type AnyFunction, callThen, forward } from "@scripts/common";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../../base";
import { createDataParserKind } from "../../kind";
import { addIssue, type DataParserError } from "../../error";
import type { DataParserChecker } from "../../baseChecker";
import type { ApplyRefinementOfDefinition, AddCheckersToDefinition, GetEligibleChecker, Input, MergeDefinition, Output, PrepareDataParserDefinition } from "../../types";
import * as coercerTransformers from "./transformers";
import * as dataParsers from "..";

export interface ComputeInputDataParserCoercer<
	GenericDataParser extends DataParser,
> {
	bigint: GenericDataParser extends dataParsers.DataParserBigInt
		? string | number | boolean
		: never;
	boolean: GenericDataParser extends dataParsers.DataParserBoolean
		? string | number
		: never;
	empty: GenericDataParser extends dataParsers.DataParserEmpty
		? "undefined"
		: never;
	nil: GenericDataParser extends dataParsers.DataParserNil
		? "null"
		: never;
	number: GenericDataParser extends dataParsers.DataParserNumber
		? string | bigint | boolean | null
		: never;
	string: GenericDataParser extends dataParsers.DataParserString
		? number | bigint | boolean | symbol | null | undefined
		: never;
	date: GenericDataParser extends dataParsers.DataParserDate
		? string | number
		: never;
	time: GenericDataParser extends dataParsers.DataParserTime
		? string
		: never;
	templateLiteral: GenericDataParser extends dataParsers.DataParserTemplateLiteral
		? number | bigint | boolean
		: never;
}

export type DataParserCoercerInput<
	GenericDataParser extends DataParser,
> = ComputeInputDataParserCoercer<GenericDataParser> extends infer InferredCoercer
	? (
		| Input<GenericDataParser>
		| InferredCoercer[keyof InferredCoercer]
	)
	: never;

export type DataParserCoercerCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionCoercer<
	GenericOutput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserCoercerCheckers<GenericOutput>
	> {
	readonly inner: DataParser;
	readonly transformer: Memoized<AnyFunction | undefined>;
}

export const coercerKind = createDataParserKind("coercer");

export class DataParserCoercer<
	GenericDefinition extends DataParserDefinitionCoercer = DataParserDefinitionCoercer,
> extends DataParserBase.init(
		coercerKind,
	)<
		GenericDefinition,
		ApplyRefinementOfDefinition<
			Output<GenericDefinition["inner"]>,
			GenericDefinition
		>,
		DataParserCoercerInput<GenericDefinition["inner"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCoercer);
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
	) => DataParserCoercer<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserCoercer,
		data: unknown,
		error: DataParserError,
	): unknown {
		try {
			const transformedData = self.definition.transformer.value
				? self.definition.transformer.value(data)
				: data;

			return callThen(
				self.definition.inner.exec(transformedData, error),
				forward,
				(catchError) => addIssue(
					error,
					"successful coerce result",
					catchError,
					self.definition.errorMessage,
					self,
				),
			);
		} catch (catchError) {
			return addIssue(
				error,
				"successful coerce result",
				catchError,
				self.definition.errorMessage,
				self,
			);
		}
	}

	public static override dataParserIsAsynchronous(self: DataParserCoercer) {
		return self.definition.inner.isAsynchronous();
	}

	/**
	 * {@include dataParser/classic/coercer/transformers/index.md}
	 */
	public static transformers = new Map<KindHandler, AnyFunction>([
		[dataParsers.numberKind, coercerTransformers.numberTransformer],
		[dataParsers.stringKind, coercerTransformers.stringTransformer],
		[dataParsers.booleanKind, coercerTransformers.booleanTransformer],
		[dataParsers.dateKind, coercerTransformers.dateTransformer],
		[dataParsers.timeKind, coercerTransformers.timeTransformer],
		[dataParsers.bigIntKind, coercerTransformers.bigintTransformer],
		[dataParsers.emptyKind, coercerTransformers.emptyTransformer],
		[dataParsers.nilKind, coercerTransformers.nilTransformer],
		[dataParsers.templateLiteralKind, coercerTransformers.templateLiteralTransformer],
	]);

	public static override prepareDefinition(
		inner: DataParser,
		definition?: Partial<Omit<DataParserDefinitionCoercer, "inner">>,
	): DataParserDefinitionCoercer {
		return {
			...definition,
			inner,
			transformer: memo(
				() => DataParserCoercer.transformers.get(
					inner.classConstructor.specificKindHandler,
				),
			),
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/coercer/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionCoercer<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionCoercer<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserCoercer<
			MergeDefinition<
				DataParserDefinitionCoercer,
				NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
			>
		> {
		return new DataParserCoercer(this.prepareDefinition(inner, definition)) as never;
	}
}

/**
 * {@include dataParser/classic/coercer/index.md}
 */
export const coercer = detachObjectMethod(DataParserCoercer, "create");

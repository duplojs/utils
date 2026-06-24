import { detachObjectMethod, callThen, type Adaptor, type FixDeepFunctionInfer, type IsEqual, type MaybePromise, type NeverCoalescing, type Or, type UnionContain } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { addIssue, popErrorPath, setErrorPath, type DataParserError, SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type TupleShape = readonly [DataParser, ...DataParser[]];

export type DataParserTupleShapeOutput<
	GenericShape extends TupleShape,
	GenericRest extends DataParser | undefined,
> = IsEqual<GenericShape, TupleShape> extends true
	? unknown[]
	: GenericShape extends readonly [
		infer InferredFirst extends DataParser,
		...infer InferredRest extends DataParser[],
	]
		? [
			Output<InferredFirst>,
			...(
				Exclude<InferredRest, TupleShape> extends infer InferredShapeRest extends readonly any[]
					? IsEqual<InferredShapeRest[number], never> extends true
						? []
						: Output<InferredShapeRest[number]>[]
					: []
			),
			...(
				InferredRest extends TupleShape
					? DataParserTupleShapeOutput<
						InferredRest,
						GenericRest
					>
					: Or<[
						UnionContain<GenericRest, undefined>,
						IsEqual<GenericRest, never>,
					]> extends true
						? []
						: Output<Adaptor<GenericRest, DataParser>>[]
			),
		]
		: never;

export type DataParserTupleShapeInput<
	GenericShape extends TupleShape,
	GenericRest extends DataParser | undefined,
> = IsEqual<GenericShape, TupleShape> extends true
	? unknown[]
	: GenericShape extends readonly [
		infer InferredFirst extends DataParser,
		...infer InferredRest extends DataParser[],
	]
		? [
			Input<InferredFirst>,
			...(
				Exclude<InferredRest, TupleShape> extends infer InferredShapeRest extends readonly any[]
					? IsEqual<InferredShapeRest[number], never> extends true
						? []
						: Input<InferredShapeRest[number]>[]
					: []
			),
			...(
				InferredRest extends TupleShape
					? DataParserTupleShapeInput<
						InferredRest,
						GenericRest
					>
					: Or<[
						UnionContain<GenericRest, undefined>,
						IsEqual<GenericRest, never>,
					]> extends true
						? []
						: Input<Adaptor<GenericRest, DataParser>>[]
			),
		]
		: never;

export type DataParserTupleCheckers<
	GenericInput extends unknown[] = unknown[],
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionTuple<
	GenericInput extends unknown[] = unknown[],
> extends DataParserDefinition<
		DataParserTupleCheckers<GenericInput>
	> {
	readonly shape: TupleShape;
	readonly rest: DataParser | undefined;
}

export const tupleKind = createDataParserKind("tuple");

export class DataParserTuple<
	GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple,
> extends DataParserBase.init(
		tupleKind,
	)<
		GenericDefinition,
		DataParserTupleShapeOutput<
			GenericDefinition["shape"],
			GenericDefinition["rest"]
		>,
		DataParserTupleShapeInput<
			GenericDefinition["shape"],
			GenericDefinition["rest"]
		>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTuple);
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
	) => DataParserTuple<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserTuple,
		data: unknown,
		error: DataParserError,
	): MaybePromise<unknown[] | SymbolDataParserError> {
		if (!(data instanceof Array)) {
			return addIssue(error, "tuple array", data, self.definition.errorMessage, self);
		}

		const currentIndexPath = error.currentPath.length;

		const output = data.reduce<
			MaybePromise<unknown[] | SymbolDataParserError>
		>(
			(accumulator, value, index) => callThen(
				accumulator,
				(awaitedAccumulator) => {
					const dataParser = self.definition.shape[index] ?? self.definition.rest;
					setErrorPath(
						error,
						dataParser === self.definition.rest
							? `[tupleRest: ${index}]`
							: `[tuple: ${index}]`,
						currentIndexPath,
					);
					if (!dataParser) {
						addIssue(error, "empty", data, self.definition.errorMessage, self);
						return SymbolDataParserError;
					}

					return callThen(
						dataParser.exec(value, error),
						(result) => {
							if (
								result === SymbolDataParserError
								|| awaitedAccumulator === SymbolDataParserError
							) {
								return SymbolDataParserError;
							}

							awaitedAccumulator.push(result);
							return awaitedAccumulator;
						},
					);
				},
			),
			[],
		);

		void (currentIndexPath !== error.currentPath.length && popErrorPath(error));

		return output;
	}

	public static override dataParserIsAsynchronous(self: DataParserTuple) {
		return self.definition.shape.some(
			(element) => element.isAsynchronous(),
		) || !!self.definition.rest?.isAsynchronous();
	}

	public static override prepareDefinition(
		shape: TupleShape,
		definition?: Partial<Omit<DataParserDefinitionTuple, "shape">>,
	): DataParserDefinitionTuple {
		return {
			...definition,
			shape,
			rest: definition?.rest,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/tuple/index.md}
	 */
	public static override create<
		const GenericShape extends TupleShape,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionTuple<
				DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>
			>,
			"shape"
		> = never,
	>(
		shape: GenericShape,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionTuple<
					DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>
				>,
				"shape"
			>,
			GenericDefinition
		>,
	): DataParserTuple<
			MergeDefinition<
				DataParserDefinitionTuple,
				& NeverCoalescing<GenericDefinition, {}>
				& {
					readonly shape: GenericShape;
					readonly rest: Or<[
						IsEqual<GenericDefinition["rest"], unknown>,
						IsEqual<GenericDefinition, never>,
					]> extends true
						? undefined
						: GenericDefinition["rest"];
				}
			>
		> {
		return new DataParserTuple(this.prepareDefinition(shape, definition)) as never;
	}
}

/**
 * {@include dataParser/classic/tuple/index.md}
 */
export const tuple = detachObjectMethod(DataParserTuple, "create");

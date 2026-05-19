import { type UnionContain, type IsEqual, type Kind, type Adaptor, type NeverCoalescing, type FixDeepFunctionInfer, createOverride, type Or } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, SymbolDataParserError, type DataParser, type DataParserChecker } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { addIssue, popErrorPath, setErrorPath } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import * as DArray from "@scripts/array";

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

type _DataParserTuple<
	GenericDefinition extends DataParserDefinitionTuple,
> = (
	& DataParserBase<
		GenericDefinition,
		DataParserTupleShapeOutput<
			GenericDefinition["shape"],
			GenericDefinition["rest"]
		>,
		DataParserTupleShapeInput<
			GenericDefinition["shape"],
			GenericDefinition["rest"]
		>
	>
	& Kind<typeof tupleKind.definition>
);

export interface DataParserTuple<
	GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple,
> extends _DataParserTuple<GenericDefinition> {
	addChecker<
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
	): DataParserTuple<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/tuple/index.md}
 */
export function tuple<
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
	const self = dataParserBaseInit<DataParserTuple>(
		tupleKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			rest: definition?.rest,
			shape,
		},
		{
			sync: (data, error, self) => {
				if (!(data instanceof Array)) {
					return addIssue(error, "tuple array", data, self.definition.errorMessage);
				}

				let output: SymbolDataParserError | unknown[] = [];
				const currentIndexPath = error.currentPath.length;

				for (let index = 0; index < self.definition.shape.length; index++) {
					setErrorPath(error, `[${index}]`, currentIndexPath);

					const result = self.definition.shape[index]?.exec(data[index], error);

					if (result === SymbolDataParserError) {
						output = SymbolDataParserError;
					} else if (output !== SymbolDataParserError) {
						output.push(result);
					}
				}

				if (self.definition.rest) {
					for (let index = self.definition.shape.length; index < data.length; index++) {
						setErrorPath(error, `[${index}]`, currentIndexPath);

						const result = self.definition.rest.exec(data[index], error);

						if (result === SymbolDataParserError) {
							output = SymbolDataParserError;
						} else if (output !== SymbolDataParserError) {
							output.push(result);
						}
					}
				}

				void (self.definition.shape.length && popErrorPath(error));

				return output as never;
			},
			async: async(data, error, self) => {
				if (!(data instanceof Array)) {
					return addIssue(error, "tuple array", data, self.definition.errorMessage);
				}

				let output: SymbolDataParserError | unknown[] = [];
				const currentIndexPath = error.currentPath.length;

				for (let index = 0; index < self.definition.shape.length; index++) {
					setErrorPath(error, `[${index}]`, currentIndexPath);

					const result = await self.definition.shape[index]?.asyncExec(data[index], error);

					if (result === SymbolDataParserError) {
						output = SymbolDataParserError;
					} else if (output !== SymbolDataParserError) {
						output.push(result);
					}
				}

				if (self.definition?.rest) {
					for (let index = self.definition.shape.length; index < data.length; index++) {
						setErrorPath(error, `[${index}]`, currentIndexPath);

						const result = await self.definition.rest.asyncExec(data[index], error);

						if (result === SymbolDataParserError) {
							output = SymbolDataParserError;
						} else if (output !== SymbolDataParserError) {
							output.push(result);
						}
					}
				}

				void (self.definition.shape.length && popErrorPath(error));

				return output as never;
			},
			isAsynchronous: (self) => DArray.some(
				self.definition.shape,
				(element) => element.isAsynchronous(),
			) || !!self.definition.rest?.isAsynchronous(),
		},
		tuple.overrideHandler,
	) as never;

	return self as never;
}

tuple.overrideHandler = createOverride<DataParserTuple>("@duplojs/utils/data-parser/tuple");

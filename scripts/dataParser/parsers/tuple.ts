import { type UnionContain, type IsEqual, type Kind, type Adaptor, type NeverCoalescing, type FixDeepFunctionInfer, type AnyTuple, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { popErrorPath, setErrorPath, SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerArrayMax, type DataParserCheckerArrayMin } from "./array";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export type TupleShape = readonly [DataParser, ...DataParser[]];

export type DataParserTupleShapeOutput<
	GenericShape extends TupleShape,
	GenericRest extends DataParser | undefined,
> = IsEqual<GenericShape, TupleShape> extends true
	? TupleShape
	: GenericShape extends [
		infer InferredFirst extends DataParser,
		...infer InferredRest extends DataParser[],
	]
		? [
			Output<InferredFirst>,
			...(
				InferredRest extends TupleShape
					? DataParserTupleShapeOutput<
						InferredRest,
						GenericRest
					>
					: UnionContain<GenericRest, undefined> extends true
						? []
						: Output<Adaptor<GenericRest, DataParser>>[]
			),
		]
		: never;

export type DataParserTupleShapeInput<
	GenericShape extends TupleShape,
	GenericRest extends DataParser | undefined,
> = IsEqual<GenericShape, TupleShape> extends true
	? TupleShape
	: GenericShape extends [
		infer InferredFirst extends DataParser,
		...infer InferredRest extends DataParser[],
	]
		? [
			Input<InferredFirst>,
			...(
				InferredRest extends TupleShape
					? DataParserTupleShapeOutput<
						InferredRest,
						GenericRest
					>
					: UnionContain<GenericRest, undefined> extends true
						? []
						: Input<Adaptor<GenericRest, DataParser>>[]
			),
		]
		: never;

export interface DataParserTupleCheckerCustom<
	GenericInput extends AnyTuple<unknown> = AnyTuple<unknown>,
> {}

export type DataParserTupleCheckers<
	GenericInput extends AnyTuple<unknown> = AnyTuple<unknown>,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserTupleCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserTupleCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| DataParserCheckerArrayMin
	| DataParserCheckerArrayMax
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionTuple extends DataParserDefinition<
	DataParserTupleCheckers
> {
	readonly shape: TupleShape;
	readonly rest?: DataParser;
}

export const tupleKind = createDataParserKind("tuple");

type _DataParserTuple<
	GenericDefinition extends DataParserDefinitionTuple,
> = (
	& DataParser<
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
			DataParserTupleCheckers<Output<this>>,
			...DataParserTupleCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserTupleCheckers<Output<this>>,
				...DataParserTupleCheckers<Output<this>>[],
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
	GenericShape extends TupleShape,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionTuple, "shape">
	> = never,
>(
	shape: GenericShape,
	definition?: GenericDefinition,
): DataParserTuple<
		MergeDefinition<
			DataParserDefinitionTuple,
			NeverCoalescing<GenericDefinition, {}> & { shape: GenericShape }
		>
	> {
	const self = dataParserInit<DataParserTuple>(
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
					return SymbolDataParserErrorIssue;
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
					return SymbolDataParserErrorIssue;
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
		},
		tuple.overrideHandler,
	) as never;

	return self as never;
}

tuple.overrideHandler = createOverride<DataParserTuple>("@duplojs/utils/data-parser/tuple");

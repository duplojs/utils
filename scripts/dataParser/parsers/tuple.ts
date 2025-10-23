import { createKind, type UnionContain, type IsEqual, type Kind, type Adaptor, type NeverCoalescing } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError } from "../base";
import { type AddCheckersToDefinition, type DataParsers, type MergeDefinition } from "@scripts/dataParser/types";
import { popErrorPath, setErrorPath, SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerArrayMax, type DataParserCheckerArrayMin } from "./array";

export type TupleShape = readonly [DataParsers, ...DataParsers[]];

export type DataParserTupleShapeOutput<
	GenericShape extends TupleShape,
	GenericRest extends DataParsers | undefined,
> = IsEqual<GenericShape, TupleShape> extends true
	? TupleShape
	: GenericShape extends [
		infer InferredFirst extends DataParsers,
		...infer InferredRest extends DataParsers[],
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
	GenericRest extends DataParsers | undefined,
> = IsEqual<GenericShape, TupleShape> extends true
	? TupleShape
	: GenericShape extends [
		infer InferredFirst extends DataParsers,
		...infer InferredRest extends DataParsers[],
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

export type DataParserTupleCheckers = (
	| DataParserCheckerArrayMin
	| DataParserCheckerArrayMax
);

export interface DataParserDefinitionTuple extends DataParserDefinition<DataParserTupleCheckers> {
	readonly shape: TupleShape;
	readonly rest?: DataParsers;
}

export const dataParserTupleKind = createKind("data-parser-tuple");

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
	& Kind<typeof dataParserTupleKind.definition>
);

export interface DataParserTuple<
	GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple,
> extends _DataParserTuple<GenericDefinition> {
	addChecker<
		GenericChecker extends [DataParserTupleCheckers, ...DataParserTupleCheckers[]],
	>(
		...args: GenericChecker
	): DataParserTuple<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

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
	return dataParserInit<DataParserTuple>(
		dataParserTupleKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				rest: definition?.rest,
				shape,
			},
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

				popErrorPath(error);

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

				popErrorPath(error);

				return output as never;
			},
		},
	) as never;
}

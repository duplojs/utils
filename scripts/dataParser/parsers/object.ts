import { createKind, type Kind, pipe, type IsEqual, forward, type AnyValue, memo, type NeverCoalescing, type Memoized } from "@scripts/common";
import { dataParserInit, dataParserKind, type Input, type Output, type DataParser, type DataParserDefinition, SymbolDataParserError } from "../base";
import { type MergeDefinition, type DataParsers } from "../types";
import { popErrorPath, setErrorPath, SymbolDataParserErrorIssue } from "../error";
import * as DArray from "@scripts/array";
import * as DObject from "@scripts/object";

export type DataParserObjectShape = Readonly<Record<string, DataParsers>>;

export type DataParserObjectShapeOutput<
	GenericShape extends DataParserObjectShape,
> = IsEqual<GenericShape, DataParserObjectShape> extends true
	? DataParserObjectShape
	: {
		-readonly [
		Prop in keyof GenericShape as GenericShape[Prop] extends Kind<typeof dataParserKind.definition>
			? Prop
			: never
		]: Output<GenericShape[Prop]>
	} extends infer InferredResult extends object
		? DObject.PartialKeys<
			InferredResult,
			DObject.GetPropsWithValueExtends<
				InferredResult,
				undefined
			>
		>
		: never;

export type DataParserObjectShapeInput<
	GenericShape extends DataParserObjectShape,
> = IsEqual<GenericShape, DataParserObjectShape> extends true
	? DataParserObjectShape
	: {
		-readonly [
		Prop in keyof GenericShape as GenericShape[Prop] extends Kind<typeof dataParserKind.definition>
			? Prop
			: never
		]: Input<GenericShape[Prop]>
	} extends infer InferredResult extends object
		? DObject.PartialKeys<
			InferredResult,
			DObject.GetPropsWithValueExtends<
				InferredResult,
				undefined
			>
		>
		: never;

export interface DataParserDefinitionObject extends DataParserDefinition<never> {
	shape: DataParserObjectShape;
	optimizedShape: Memoized<{
		key: string;
		schema: DataParsers;
	}[]>;
}

export const dataParserObjectKind = createKind("data-parser-object");

type _DataParserObject<
	GenericDefinition extends DataParserDefinitionObject,
> = (
	& DataParser<
		GenericDefinition,
		DataParserObjectShapeOutput<GenericDefinition["shape"]>,
		DataParserObjectShapeInput<GenericDefinition["shape"]>
	>
	& Kind<typeof dataParserObjectKind.definition>
);

export interface DataParserObject<
	GenericDefinition extends DataParserDefinitionObject
	= Omit<DataParserDefinitionObject, "shape"> & { shape: DataParserObjectShape },
> extends _DataParserObject<GenericDefinition> {

}

export function object<
	const GenericShape extends DataParserObjectShape,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionObject, "shape">
	> = never,
>(
	shape: GenericShape,
	definition?: GenericDefinition,
): DataParserObject<
		MergeDefinition<
			DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & { shape: GenericShape }
		>
	> {
	return dataParserInit<DataParserObject>(
		dataParserObjectKind,
		{
			definition: {
				shape,
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				optimizedShape: memo(
					() => pipe(
						forward<DataParserObjectShape>(shape),
						DObject.entries,
						DArray.filter((entry) => dataParserKind.has(entry[1])),
						DArray.map(([key, value]) => ({
							key,
							schema: value,
						})),
					),
				),
			},
		},
		{
			sync: (data, error, self) => {
				if (
					!data
					|| typeof data !== "object"
					|| data instanceof Array
				) {
					return SymbolDataParserErrorIssue;
				}

				let output = {};
				const currentIndexPath = error.currentPath.length;

				for (const entry of self.definition.optimizedShape.value) {
					setErrorPath(error, entry.key, currentIndexPath);

					const result = entry.schema.exec(
						data[entry.key as never],
						error,
					) as AnyValue;

					if (result === SymbolDataParserError) {
						output = SymbolDataParserError;
					} else if (
						output !== SymbolDataParserError
						&& result !== undefined
					) {
						(output as Record<string, any>)[entry.key] = result;
					}
				}

				popErrorPath(error);

				return output;
			},
			async: async(data, error, self) => {
				if (
					!data
					|| typeof data !== "object"
					|| data instanceof Array
				) {
					return SymbolDataParserErrorIssue;
				}

				let output = {};
				const currentIndexPath = error.currentPath.length;

				for (const entry of self.definition.optimizedShape.value) {
					setErrorPath(error, entry.key, currentIndexPath);

					const result = await entry.schema.asyncExec(
						data[entry.key as never],
						error,
					) as AnyValue;

					if (result === SymbolDataParserError) {
						output = SymbolDataParserError;
					} else if (
						output !== SymbolDataParserError
					&& result !== undefined
					) {
						(output as Record<string, any>)[entry.key] = result;
					}
				}

				popErrorPath(error);

				return output;
			},
		},
	) as never;
}

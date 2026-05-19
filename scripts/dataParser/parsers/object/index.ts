import { type Kind, pipe, forward, type AnyValue, memo, type NeverCoalescing, type Memoized, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { dataParserBaseInit, dataParserKind, type Input, type Output, type DataParserBase, type DataParserDefinition, SymbolDataParserError, type DataParser, type DataParserChecker } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import { addIssue, popErrorPath, setErrorPath } from "../../error";
import * as DArray from "@scripts/array";
import * as DObject from "@scripts/object";
import { createDataParserKind } from "../../kind";

export * from "./omit";
export * from "./pick";
export * from "./partial";
export * from "./required";
export * from "./extends";

export type DataParserObjectShape = Readonly<Record<string, DataParser>>;

export type DataParserObjectShapeOutput<
	GenericShape extends DataParserObjectShape,
> = {
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
> = {
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

export type DataParserObjectCheckers<
	GenericInput extends object = object,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionObject<
	GenericInput extends Record<string | number, unknown> = Record<string | number, unknown>,
> extends DataParserDefinition<
		DataParserObjectCheckers<GenericInput>
	> {
	readonly shape: DataParserObjectShape;
	readonly optimizedShape: Memoized<{
		readonly key: string;
		readonly value: DataParser;
	}[]>;
}

export const objectKind = createDataParserKind("object");

type _DataParserObject<
	GenericDefinition extends DataParserDefinitionObject,
> = (
	& DataParserBase<
		GenericDefinition,
		DataParserObjectShapeOutput<GenericDefinition["shape"]>,
		DataParserObjectShapeInput<GenericDefinition["shape"]>
	>
	& Kind<typeof objectKind.definition>
);

export interface DataParserObject<
	GenericDefinition extends DataParserDefinitionObject = DataParserDefinitionObject,
> extends _DataParserObject<GenericDefinition> {
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
	): DataParserObject<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/object/index.md}
 */
export function object<
	const GenericShape extends DataParserObjectShape,
	const GenericDefinition extends PrepareDataParserDefinition<
		DataParserDefinitionObject<
			DataParserObjectShapeOutput<GenericShape>
		>,
		"shape" | "optimizedShape"
	> = never,
>(
	shape: GenericShape,
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			DataParserDefinitionObject<
				DataParserObjectShapeOutput<GenericShape>
			>,
			"shape" | "optimizedShape"
		>,
		GenericDefinition
	>,
): DataParserObject<
		MergeDefinition<
			DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly shape: GenericShape;
			}
		>
	> {
	const self = dataParserBaseInit<DataParserObject>(
		objectKind,
		{
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
						value,
					})),
				),
			),
		},
		{
			sync: (data, error, self) => {
				if (
					!data
					|| typeof data !== "object"
					|| data instanceof Array
				) {
					return addIssue(error, "object", data, self.definition.errorMessage);
				}

				let output = {};
				const currentIndexPath = error.currentPath.length;

				for (const entry of self.definition.optimizedShape.value) {
					setErrorPath(error, entry.key, currentIndexPath);

					const result = entry.value.exec(
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

				void (self.definition.optimizedShape.value.length && popErrorPath(error));

				return output;
			},
			async: async(data, error, self) => {
				if (
					!data
					|| typeof data !== "object"
					|| data instanceof Array
				) {
					return addIssue(error, "object", data, self.definition.errorMessage);
				}

				let output = {};
				const currentIndexPath = error.currentPath.length;

				for (const entry of self.definition.optimizedShape.value) {
					setErrorPath(error, entry.key, currentIndexPath);

					const result = await entry.value.asyncExec(
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

				void (self.definition.optimizedShape.value.length && popErrorPath(error));

				return output;
			},
			isAsynchronous: (self) => DArray.some(
				self.definition.optimizedShape.value,
				(element) => element.value.isAsynchronous(),
			),
		},
		object.overrideHandler,
	) as never;

	return self as never;
}

object.overrideHandler = createOverride<DataParserObject>("@duplojs/utils/data-parser/object");

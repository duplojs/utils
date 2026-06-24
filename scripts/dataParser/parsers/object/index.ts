import { detachObjectMethod, type FixDeepFunctionInfer, type Kind, type MaybePromise, type Memoized, type NeverCoalescing, callThen, forward, memo, pipe } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, dataParserKind, type DataParser, type DataParserDefinition } from "../../base";
import { addIssue, popErrorPath, setErrorPath, type DataParserError, SymbolDataParserError, type SymbolDataParserError as SymbolDataParserErrorType } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
import * as DArray from "@scripts/array";
import * as DObject from "@scripts/object";

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

export interface DataParserObjectShapeEntry {
	readonly key: string;
	readonly value: DataParser;
}

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

export class DataParserObject<
	GenericDefinition extends DataParserDefinitionObject = DataParserDefinitionObject,
> extends DataParserBase.init(
		objectKind,
	)<
		GenericDefinition,
		DataParserObjectShapeOutput<GenericDefinition["shape"]>,
		DataParserObjectShapeInput<GenericDefinition["shape"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserObject);
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
	) => DataParserObject<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserObject,
		data: unknown,
		error: DataParserError,
	): MaybePromise<Record<string, unknown> | typeof SymbolDataParserError> {
		if (
			!data
			|| typeof data !== "object"
			|| data instanceof Array
		) {
			return addIssue(error, "object", data, self.definition.errorMessage, self);
		}

		const currentIndexPath = error.currentPath.length;

		const output = self.definition.optimizedShape.value.reduce<
			MaybePromise<Record<string, unknown> | SymbolDataParserErrorType>
		>(
			(accumulator, entry) => callThen(
				accumulator,
				(awaitedAccumulator) => {
					setErrorPath(error, entry.key, currentIndexPath);
					return callThen(
						entry.value.exec((data as Record<string, unknown>)[entry.key], error),
						(awaitedResult) => {
							if (
								awaitedResult === SymbolDataParserError
								|| awaitedAccumulator === SymbolDataParserError
							) {
								return SymbolDataParserError;
							}

							if (awaitedResult !== undefined) {
								awaitedAccumulator[entry.key] = awaitedResult;
							}

							return awaitedAccumulator;
						},
					);
				},
			),
			{},
		);

		void (currentIndexPath !== error.currentPath.length && popErrorPath(error));

		return output;
	}

	public static override dataParserIsAsynchronous(self: DataParserObject) {
		return self.definition.optimizedShape.value.some(
			(entry) => entry.value.isAsynchronous(),
		);
	}

	public static override prepareDefinition(
		shape: DataParserObjectShape,
		definition?: Partial<
			Omit<DataParserDefinitionObject, "shape" | "optimizedShape">
		>,
	): DataParserDefinitionObject {
		return {
			...definition,
			shape,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
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
		};
	}

	/**
	 * {@include dataParser/classic/object/index.md}
	 */
	public static override create<
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
		return new DataParserObject(this.prepareDefinition(shape, definition)) as never;
	}
}

/**
 * {@include dataParser/classic/object/index.md}
 */
export const object = detachObjectMethod(DataParserObject, "create");

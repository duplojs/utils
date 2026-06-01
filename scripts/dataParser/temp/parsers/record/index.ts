import { type FixDeepFunctionInfer, type IsEqual, type NeverCoalescing, pipe, kindClass } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../../base";
import { addIssue, popErrorPath, setErrorPath, type DataParserError, SymbolDataParserError, type SymbolDataParserError as SymbolDataParserErrorType } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";

import * as DArray from "@scripts/array";
import * as DObject from "@scripts/object";
import { findRecordRequiredKey } from "./findRecordRequiredKey";
import { type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserString } from "../string";

export * from "./findRecordRequiredKey";

export type DataParserRecordKey = (
	| DataParserString
	| DataParserNumber<
		& Omit<DataParserDefinitionNumber, "coerce">
		& {
			readonly coerce: true;
		}
	>
);

export type DataParserRecordCheckers<
	GenericInput extends Record<string, unknown> = Record<string, unknown>,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionRecord<
	GenericInput extends Record<string, unknown> = Record<string, unknown>,
> extends DataParserDefinition<
		DataParserRecordCheckers<GenericInput>
	> {
	readonly key: DataParserRecordKey;
	readonly value: DataParser;
	readonly baseData: Partial<Record<string, undefined>>;
}

export const recordKind = createDataParserKind("record");

export type DataParserRecordShapeOutput<
	GenericDataParserKey extends DataParserRecordKey,
	GenericDataParserValue extends DataParser,
> = Extract<
	Record<
		Output<GenericDataParserKey> extends infer InferredKey extends string | number
			? `${InferredKey}`
			: never,
		Output<GenericDataParserValue> extends infer InferredValue
			? InferredValue
			: never
	> extends infer InferredResult extends Record<string, unknown>
		? IsEqual<Extract<InferredResult[keyof InferredResult], undefined>, never> extends true
			? InferredResult
			: Partial<InferredResult>
		: never,
	any
>;

export type DataParserRecordShapeInput<
	GenericDataParserKey extends DataParserRecordKey,
	GenericDataParserValue extends DataParser,
> = Extract<
	Record<
		Input<GenericDataParserKey> extends infer InferredKey extends string | number
			? `${InferredKey}`
			: never,
		Input<GenericDataParserValue> extends infer InferredValue
			? InferredValue
			: never
	> extends infer InferredResult extends Record<string, unknown>
		? IsEqual<Extract<InferredResult[keyof InferredResult], undefined>, never> extends true
			? InferredResult
			: Partial<InferredResult>
		: never,
	any
>;

export class DataParserRecord<
	GenericDefinition extends DataParserDefinitionRecord = DataParserDefinitionRecord,
> extends kindClass(
		recordKind,
		DataParserBase,
	)<
		DataParserBase<
			GenericDefinition,
			DataParserRecordShapeOutput<GenericDefinition["key"], GenericDefinition["value"]>,
			DataParserRecordShapeInput<GenericDefinition["key"], GenericDefinition["value"]>
		>
	> {
	public constructor(definition: GenericDefinition) {
		super(null as never, definition);
	}

	public get classConstructor() {
		return DataParserRecord;
	}

	protected dataParserIsAsynchronous() {
		return this.definition.key.isAsynchronous() || this.definition.value.isAsynchronous();
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
	) => DataParserRecord<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static execParse(
		self: DataParserRecord,
		data: unknown,
		error: DataParserError,
	): (
			| Record<string, unknown>
			| SymbolDataParserErrorType
			| Promise<
				| Record<string, unknown>
				| SymbolDataParserErrorType
			>
		) {
		if (!data || typeof data !== "object" || data instanceof Array) {
			return addIssue(error, "record object", data, self.definition.errorMessage);
		}

		const fromData = {
			...self.definition.baseData,
			...(data as Record<string, unknown>),
		};
		const entries = Object.entries(fromData);
		const currentIndexPath = error.currentPath.length;
		let output: Record<string, unknown> | SymbolDataParserErrorType = {};

		for (let index = 0; index < entries.length; index++) {
			const [key, value] = entries[index];
			setErrorPath(error, `(recordKey: ${key})`, currentIndexPath);
			const resultKey = self.definition.key.exec(key, error);
			setErrorPath(error, key, currentIndexPath);
			const resultValue = self.definition.value.exec(value, error);

			if (resultKey instanceof Promise || resultValue instanceof Promise) {
				return (async() => {
					let asyncOutput: Record<string, unknown> | SymbolDataParserErrorType = output;
					const resolvedKey = resultKey instanceof Promise ? await resultKey : resultKey;
					const resolvedValue = resultValue instanceof Promise ? await resultValue : resultValue;

					if (resolvedKey === SymbolDataParserError || resolvedValue === SymbolDataParserError) {
						asyncOutput = SymbolDataParserError;
					} else if (asyncOutput !== SymbolDataParserError) {
						asyncOutput[resolvedKey as never] = resolvedValue;
					}

					for (let nextIndex = index + 1; nextIndex < entries.length; nextIndex++) {
						const [nextKey, nextValue] = entries[nextIndex];
						setErrorPath(error, `(recordKey: ${nextKey})`, currentIndexPath);
						const nextResultKey = await self.definition.key.exec(nextKey, error);
						setErrorPath(error, nextKey, currentIndexPath);
						const nextResultValue = await self.definition.value.exec(nextValue, error);

						if (nextResultKey === SymbolDataParserError || nextResultValue === SymbolDataParserError) {
							asyncOutput = SymbolDataParserError;
						} else if (asyncOutput !== SymbolDataParserError) {
							asyncOutput[nextResultKey as never] = nextResultValue;
						}
					}

					void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
					return asyncOutput;
				})();
			}

			if (resultKey === SymbolDataParserError || resultValue === SymbolDataParserError) {
				output = SymbolDataParserError;
			} else if (output !== SymbolDataParserError) {
				output[resultKey as never] = resultValue;
			}
		}

		void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
		return output;
	}

	public static create<
		GenericDataParserKey extends DataParserRecordKey,
		GenericDataParserValue extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionRecord<
				Record<
					Extract<Output<GenericDataParserKey>, string | number>,
					Output<GenericDataParserValue>
				>
			>,
			"key" | "value" | "baseData"
		> = never,
	>(
		key: GenericDataParserKey,
		value: GenericDataParserValue,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionRecord<
					Record<
						Extract<Output<GenericDataParserKey>, string | number>,
						Output<GenericDataParserValue>
					>
				>,
				"key" | "value" | "baseData"
			>,
			GenericDefinition
		>,
	): DataParserRecord<
			MergeDefinition<
				DataParserDefinitionRecord,
				NeverCoalescing<GenericDefinition, {}> & {
					key: GenericDataParserKey;
					value: GenericDataParserValue;
				}
			>
		> {
		const requireKey = findRecordRequiredKey(key);

		return new DataParserRecord({
			...definition,
			key,
			value,
			baseData: pipe(
				requireKey,
				DArray.map((key) => DObject.entry(key, undefined)),
				DObject.fromEntries,
			),
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const record = DataParserRecord.create;

import { callThen, type FixDeepFunctionInfer, type IsEqual, type MaybePromise, type NeverCoalescing, pipe } from "@scripts/common";
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
import { type DataParserTemplateLiteral } from "../templateLiteral";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";

export * from "./findRecordRequiredKey";

export type DataParserRecordKey = (
	| DataParserString
	| DataParserTemplateLiteral
	| DataParserLiteral<
		& Omit<DataParserDefinitionLiteral, "value">
		& {
			readonly value: readonly string[];
		}
	>
	| DataParserNumber<
		& Omit<DataParserDefinitionNumber, "coerce">
		& {
			readonly coerce: true;
		}
	>
	| DataParserUnion<
		& Omit<DataParserDefinitionUnion, "options">
		& {
			readonly options: readonly [DataParserRecordKey, ...DataParserRecordKey[]];
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
> extends DataParserBase.init(
		recordKind,
	)<
		GenericDefinition,
		DataParserRecordShapeOutput<GenericDefinition["key"], GenericDefinition["value"]>,
		DataParserRecordShapeInput<GenericDefinition["key"], GenericDefinition["value"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserRecord);
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

	public static override execParse(
		self: DataParserRecord,
		data: unknown,
		error: DataParserError,
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
		const output = entries.reduce<
			MaybePromise<Record<string, unknown> | SymbolDataParserErrorType>
		>(
			(accumulator, entry) => callThen(
				accumulator,
				(awaitedAccumulator) => {
					setErrorPath(error, `(recordKey: ${entry[0]})`, currentIndexPath);
					return callThen(
						self.definition.key.exec(entry[0], error),
						(awaitedKeyResult) => {
							setErrorPath(error, `(recordValue: ${entry[0]})`, currentIndexPath);
							return callThen(
								self.definition.value.exec(entry[1], error),
								(awaitedValueResult) => {
									if (
										awaitedAccumulator === SymbolDataParserError
										|| awaitedKeyResult === SymbolDataParserError
										|| awaitedValueResult === SymbolDataParserError
									) {
										return SymbolDataParserError;
									}
									awaitedAccumulator[awaitedKeyResult as string] = awaitedValueResult;
									return awaitedAccumulator;
								},
							);
						},
					);
				},
			),
			{},
		);

		void (currentIndexPath !== error.currentPath.length && popErrorPath(error));

		return output;
	}

	public static override dataParserIsAsynchronous(self: DataParserRecord) {
		return self.definition.key.isAsynchronous() || self.definition.value.isAsynchronous();
	}

	public static override prepareDefinition(
		key: DataParserRecordKey,
		value: DataParser,
		definition?: Partial<
			Omit<DataParserDefinitionRecord, "key" | "value" | "baseData">
		>,
	): DataParserDefinitionRecord {
		const requireKey = findRecordRequiredKey(key);

		return {
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
		};
	}

	/**
	 * {@include dataParser/classic/record/index.md}
	 */
	public static override create<
		GenericDataParserKey extends DataParserRecordKey,
		GenericDataParserValue extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionRecord<
				DataParserRecordShapeOutput<
					GenericDataParserKey,
					GenericDataParserValue
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
					DataParserRecordShapeOutput<
						GenericDataParserKey,
						GenericDataParserValue
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
		return new DataParserRecord(this.prepareDefinition(key, value, definition)) as never;
	}
}

export const record = DataParserRecord.create;

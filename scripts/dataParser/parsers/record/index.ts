
import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride, type IsEqual, pipe } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, SymbolDataParserError, type DataParser } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue, popErrorPath, setErrorPath } from "@scripts/dataParser/error";
import { type DataParserString } from "../string";
import { type DataParserTemplateLiteral } from "../templateLiteral";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
import { createDataParserKind } from "../../kind";
import { findRecordRequiredKey } from "./findRecordRequiredKey";
import * as DArray from "@scripts/array";
import * as DObject from "@scripts/object";

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

	/**
	 * @deprecated replaced by baseData
	 */
	readonly requireKey: readonly string[];
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
		? IsEqual<
			Extract<InferredResult[keyof InferredResult], undefined>,
			never
		> extends true
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
		? IsEqual<
			Extract<InferredResult[keyof InferredResult], undefined>,
			never
		> extends true
			? InferredResult
			: Partial<InferredResult>
		: never,
	any
>;

type _DataParserRecord<
	GenericDefinition extends DataParserDefinitionRecord,
> = (
	& DataParserBase<
		GenericDefinition,
		DataParserRecordShapeOutput<
			GenericDefinition["key"],
			GenericDefinition["value"]
		>,
		DataParserRecordShapeInput<
			GenericDefinition["key"],
			GenericDefinition["value"]
		>
	>
	& Kind<typeof recordKind.definition>
);

export interface DataParserRecord<
	GenericDefinition extends DataParserDefinitionRecord = DataParserDefinitionRecord,
> extends _DataParserRecord<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserRecordCheckers<Output<this>>,
			...DataParserRecordCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserRecordCheckers<Output<this>>,
				...DataParserRecordCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserRecord<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/record/index.md}
 */
export function record<
	GenericDataParserKey extends DataParserRecordKey,
	GenericDataParserValue extends DataParser,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionRecord<
				Record<
					Extract<Output<GenericDataParserKey>, string | number>,
					Output<GenericDataParserValue>
				>
			>,
			"key" | "value" | "baseData" | "requireKey"
		>
	> = never,
>(
	key: GenericDataParserKey,
	value: GenericDataParserValue,
	definition?: GenericDefinition,
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

	const self = dataParserBaseInit<DataParserRecord>(
		recordKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			key,
			value,
			requireKey,
			baseData: pipe(
				requireKey,
				DArray.map(
					(key) => DObject.entry(
						key,
						undefined,
					),
				),
				DObject.fromEntries,
			),
		},
		{
			sync: (data, error, self) => {
				if (
					!data
					|| typeof data !== "object"
					|| data instanceof Array
				) {
					return addIssue(error, "record object", data, self.definition.errorMessage);
				}

				let output = {};
				const fromData = {
					...self.definition.baseData,
					...data,
				};
				const currentIndexPath = error.currentPath.length;

				for (const key in fromData) {
					setErrorPath(error, `(recordKey: ${key})`, currentIndexPath);

					const resultKey = self
						.definition
						.key
						.exec(key, error);

					if (resultKey === SymbolDataParserError) {
						output = SymbolDataParserError;
					}

					setErrorPath(error, key, currentIndexPath);

					const resultValue = self
						.definition
						.value
						.exec(fromData[key as never], error);

					if (resultValue === SymbolDataParserError) {
						output = SymbolDataParserError;
					}

					if (output !== SymbolDataParserError) {
						(output as Record<string, any>)[resultKey as never] = resultValue;
					}
				}

				void (currentIndexPath !== error.currentPath.length && popErrorPath(error));

				if (output === SymbolDataParserError) {
					return output;
				}

				return output;
			},
			async: async(data, error, self) => {
				if (
					!data
					|| typeof data !== "object"
					|| data instanceof Array
				) {
					return addIssue(error, "record object", data, self.definition.errorMessage);
				}

				let output = {};
				const fromData = {
					...self.definition.baseData,
					...data,
				};
				const currentIndexPath = error.currentPath.length;

				for (const key in fromData) {
					setErrorPath(error, `(recordKey: ${key})`, currentIndexPath);

					const resultKey = await self
						.definition
						.key
						.asyncExec(key, error);

					if (resultKey === SymbolDataParserError) {
						output = SymbolDataParserError;
					}

					setErrorPath(error, key, currentIndexPath);

					const resultValue = await self
						.definition
						.value
						.asyncExec(fromData[key as never], error);

					if (resultValue === SymbolDataParserError) {
						output = SymbolDataParserError;
					}

					if (output !== SymbolDataParserError) {
						(output as Record<string, any>)[resultKey as never] = resultValue;
					}
				}

				void (currentIndexPath !== error.currentPath.length && popErrorPath(error));

				if (output === SymbolDataParserError) {
					return output;
				}

				return output;
			},
			isAsynchronous: (self) => self.definition.value.isAsynchronous(),
		},
		record.overrideHandler,
	) as never;

	return self as never;
}

record.overrideHandler = createOverride<DataParserRecord>("@duplojs/utils/data-parser/record");

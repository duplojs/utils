import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type Adaptor, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { popErrorPath, setErrorPath, SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserString } from "../string";
import { type DataParserTemplateLiteral } from "../templateLiteral";
import { type DataParserLiteral } from "../literal";
import { type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { findRecordRequiredKey } from "./findRecordRequiredKey";
import { type TemplateLiteralContainLargeType } from "@scripts/string";
import { type GetPropsWithValueExtends } from "@scripts/object";

export * from "./findRecordRequiredKey";

export type DataParserRecordKey = (
	| DataParserString
	| DataParserTemplateLiteral
	| DataParserLiteral
	| DataParserNumber<
		& DataParserDefinitionNumber
		& {
			coerce: true;
		}
	>
	| DataParserUnion<
		& DataParserDefinitionUnion
		& {
			options: DataParserRecordKey[];
		}
	>
);

export interface DataParserRecordCheckerCustom<
	GenericInput extends Record<string, unknown> = Record<string, unknown>,
> {}

export type DataParserRecordCheckers<
	GenericInput extends Record<string, unknown> = Record<string, unknown>,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserRecordCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserRecordCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionRecord extends DataParserDefinition<DataParserRecordCheckers> {
	readonly key: DataParserRecordKey;
	readonly value: DataParser;
	readonly requireKey: string[] | null;
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
	>,
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
	>,
	any
>;

type _DataParserRecord<
	GenericDefinition extends DataParserDefinitionRecord,
> = (
	& DataParser<
		GenericDefinition,
		DataParserRecordShapeOutput<
			GenericDefinition["key"],
			GenericDefinition["value"]
		> extends infer InferredOutput extends Record<string, unknown>
			? TemplateLiteralContainLargeType<
				Adaptor<keyof InferredOutput, string>
			> extends true
				? Partial<InferredOutput>
				: InferredOutput
			: never,
		DataParserRecordShapeInput<
			GenericDefinition["key"],
			GenericDefinition["value"]
		> extends infer InferredInput extends Record<string, unknown>
			? TemplateLiteralContainLargeType<
				Adaptor<keyof InferredInput, string>
			> extends true
				? Partial<InferredInput>
				: InferredInput
			: never
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

export function record<
	GenericDataParserKey extends DataParserRecordKey,
	GenericDataParserValue extends DataParser,
	const GenericDefinition extends Partial<DataParserDefinitionRecord> = never,
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
	const self = dataParserInit<DataParserRecord>(
		recordKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				key,
				value,
				requireKey: findRecordRequiredKey(key),
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

				for (const key in data) {
					setErrorPath(error, key, currentIndexPath);

					const resultKey = self
						.definition
						.key
						.exec(key, error);

					if (resultKey === SymbolDataParserError) {
						output = SymbolDataParserError;
					}

					const resultValue = self
						.definition
						.value
						.exec(data[key as never], error);

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

				if (
					self.definition.requireKey
					&& self.definition.requireKey.length !== Object.keys(output).length
				) {
					return SymbolDataParserErrorIssue;
				}

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

				for (const key in data) {
					setErrorPath(error, key, currentIndexPath);

					const resultKey = await self
						.definition
						.key
						.asyncExec(key, error);

					if (resultKey === SymbolDataParserError) {
						output = SymbolDataParserError;
					}

					const resultValue = await self
						.definition
						.value
						.asyncExec(data[key as never], error);

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

				if (
					self.definition.requireKey
					&& self.definition.requireKey.length !== Object.keys(output).length
				) {
					return SymbolDataParserErrorIssue;
				}

				return output;
			},
		},
	) as never;

	return record.overrideHandler.apply(self) as never;
}

record.overrideHandler = createOverride<DataParserRecord>("@duplojs/utils/data-parser/record");

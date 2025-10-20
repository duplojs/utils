import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError } from "../base";
import { type DataParsers, type MergeDefinition } from "@scripts/dataParser/types";
import { popErrorPath, setErrorPath, SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserString } from "./string";
import { type DataParserTemplateLiteral } from "./templateLiteral";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "./literal";
import { type DataParserDefinitionNumber, type DataParserNumber } from "./number";
import { type DataParserDefinitionUnion, type DataParserUnion } from "./union";

type DataParserRecordKey = (
	| DataParserString
	| DataParserTemplateLiteral
	| DataParserLiteral<
		& DataParserDefinitionLiteral
		& {
			value: string[];
		}
	>
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

export interface DataParserDefinitionRecord extends DataParserDefinition<never> {
	key: DataParserRecordKey;
	value: DataParsers;
}

export const dataParserRecordKind = createKind("data-parser-record");

export type DataParserRecordShapeOutput<
	GenericDataParserKey extends DataParserRecordKey,
	GenericDataParserValue extends DataParsers,
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
	GenericDataParserValue extends DataParsers,
> = Extract<
	Record<
		Input<GenericDataParserKey> extends infer InferredKey extends string | number
			? InferredKey
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
		> extends infer InferredOutput
			? InferredOutput
			: never,
		DataParserRecordShapeInput<
			GenericDefinition["key"],
			GenericDefinition["value"]
		>
	>
	& Kind<typeof dataParserRecordKind.definition>
);

export interface DataParserRecord<
	GenericDefinition extends DataParserDefinitionRecord = DataParserDefinitionRecord,
> extends _DataParserRecord<GenericDefinition> {

}

export function record<
	GenericDataParserKey extends DataParserRecordKey,
	GenericDataParserValue extends DataParsers,
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
	return dataParserInit<DataParserRecord>(
		dataParserRecordKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				key,
				value,
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

				popErrorPath(error);

				return output;
			},
		},
	) as never;
}

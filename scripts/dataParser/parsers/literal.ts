import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import * as DArray from "@scripts/array";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export type LiteralValue = string | number | bigint | undefined | null | boolean;

export interface DataParserLiteralCheckerCustom<
	GenericInput extends LiteralValue = LiteralValue,
> {}

export type DataParserLiteralCheckers<
	GenericInput extends LiteralValue = LiteralValue,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserLiteralCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserLiteralCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionLiteral extends DataParserDefinition<
	DataParserLiteralCheckers
> {
	readonly value: readonly LiteralValue[];
}

export const literalKind = createDataParserKind("literal");

type _DataParserLiteral<
	GenericDefinition extends DataParserDefinitionLiteral,
> = (
	& DataParser<
		GenericDefinition,
		GenericDefinition["value"][number],
		GenericDefinition["value"][number]
	>
	& Kind<typeof literalKind.definition>
);

export interface DataParserLiteral<
	GenericDefinition extends DataParserDefinitionLiteral = DataParserDefinitionLiteral,
> extends _DataParserLiteral<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserLiteralCheckers<Output<this>>,
			...DataParserLiteralCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserLiteralCheckers<Output<this>>,
				...DataParserLiteralCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserLiteral<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends DataParserDefinitionLiteral,
	>(
		definition: GenericDefinition
	): DataParserLiteral<
		MergeDefinition<
			DataParserDefinitionLiteral,
			GenericDefinition
		>
	>;
}

export function literal<
	const GenericValue extends LiteralValue,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionLiteral, "value">
	> = never,
>(
	value: GenericValue | readonly GenericValue[],
	definition?: GenericDefinition,
): DataParserLiteral<
		MergeDefinition<
			DataParserDefinitionLiteral,
			NeverCoalescing<GenericDefinition, {}> & { value: readonly GenericValue[] }
		>
	> {
	const self = dataParserInit<DataParserLiteral>(
		literalKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			value: DArray.coalescing(value),
		},
		(data, _error, self) => {
			if (self.definition.value.includes(data as never)) {
				return data as never;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;

	return literal.overrideHandler.apply(self) as never;
}

literal.overrideHandler = createOverride<DataParserLiteral>("@duplojs/utils/data-parser/literal");

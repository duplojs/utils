import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import * as DArray from "@scripts/array";
import { createDataParserKind } from "../kind";

export type LiteralValue = string | number | bigint | undefined | null | boolean;

export type DataParserLiteralCheckers<
	GenericInput extends LiteralValue = LiteralValue,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionLiteral<
	GenericInput extends LiteralValue = LiteralValue,
> extends DataParserDefinition<
		DataParserLiteralCheckers<GenericInput>
	> {
	readonly value: readonly LiteralValue[];
}

export const literalKind = createDataParserKind("literal");

type _DataParserLiteral<
	GenericDefinition extends DataParserDefinitionLiteral,
> = (
	& DataParserBase<
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
		const GenericChecker extends readonly [
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
}

/**
 * {@include dataParser/classic/literal/index.md}
 */
export function literal<
	const GenericValue extends LiteralValue,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionLiteral<GenericValue>,
			"value"
		>
	> = never,
>(
	value: GenericValue | readonly GenericValue[],
	definition?: GenericDefinition,
): DataParserLiteral<
		MergeDefinition<
			DataParserDefinitionLiteral,
			NeverCoalescing<GenericDefinition, {}> & { readonly value: readonly GenericValue[] }
		>
	> {
	const self = dataParserBaseInit<DataParserLiteral>(
		literalKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			value: DArray.coalescing(value),
		},
		(data, error, self) => {
			if (self.definition.value.includes(data as never)) {
				return data as never;
			}

			return addIssue(
				error,
				`one of ${self.definition.value.map((value) => String(value)).join(", ")}`,
				data,
				self.definition.errorMessage,
			);
		},
		literal.overrideHandler,
	) as never;

	return self as never;
}

literal.overrideHandler = createOverride<DataParserLiteral>("@duplojs/utils/data-parser/literal");

import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";

type _DataParserLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLiteral,
> = (
	& Kind<typeof dataParsers.literalKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<dataParsers.DataParserLiteral<GenericDefinition>>,
		Input<dataParsers.DataParserLiteral<GenericDefinition>>
	>
);

export interface DataParserLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLiteral = dataParsers.DataParserDefinitionLiteral,
> extends _DataParserLiteralExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserLiteralCheckers<Output<this>>,
			...dataParsers.DataParserLiteralCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserLiteralCheckers<Output<this>>,
				...dataParsers.DataParserLiteralCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserLiteralExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserLiteralExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/literal/index.md}
 */
export function literal<
	const GenericValue extends dataParsers.LiteralValue,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionLiteral, "value">
	> = never,
>(
	value: GenericValue | GenericValue[],
	definition?: GenericDefinition,
): DataParserLiteralExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionLiteral,
			NeverCoalescing<GenericDefinition, {}> & { value: GenericValue[] }
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserLiteral,
		DataParserLiteralExtended
	>(
		dataParsers.literal(value, definition),
		{},
		literal.overrideHandler,
	);

	return self as never;
}

literal.overrideHandler = createOverride<DataParserLiteralExtended>("@duplojs/utils/data-parser-extended/literal");

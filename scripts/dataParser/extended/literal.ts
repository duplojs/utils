import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLiteral,
> = (
	& Kind<typeof dataParsers.literalKind.definition>
	& DataParserExtended<
		GenericDefinition,
		GenericDefinition["value"][number],
		GenericDefinition["value"][number]
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

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionLiteral,
	>(
		definition: GenericDefinition
	): DataParserLiteralExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionLiteral,
			GenericDefinition
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
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

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
	) as never;

	return literal.overrideHandler.apply(self) as never;
}

literal.overrideHandler = createOverride<DataParserLiteralExtended>("@duplojs/utils/data-parser-extended/literal");

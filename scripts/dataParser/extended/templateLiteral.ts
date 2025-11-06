import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserTemplateLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral,
> = (
	& dataParsers.DataParserTemplateLiteral<GenericDefinition>
	& DataParserExtended
);

export interface DataParserTemplateLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral
	= dataParsers.DataParserDefinitionTemplateLiteral,
> extends _DataParserTemplateLiteralExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserTemplateLiteralCheckers<Output<this>>,
			...dataParsers.DataParserTemplateLiteralCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserTemplateLiteralCheckers<Output<this>>,
				...dataParsers.DataParserTemplateLiteralCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserTemplateLiteralExtended<
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
	): DataParserTemplateLiteralExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function templateLiteral<
	const GenericTemplate extends dataParsers.TemplateLiteralShape,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionTemplateLiteral, "template" | "pattern">
	> = never,
>(
	template: GenericTemplate,
	definition?: GenericDefinition,
): DataParserTemplateLiteralExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTemplateLiteral,
			NeverCoalescing<GenericDefinition, {}> & { template: GenericTemplate }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserTemplateLiteral,
		DataParserTemplateLiteralExtended
	>(
		dataParsers.templateLiteral(template, definition),
		{},
	) as never;
}

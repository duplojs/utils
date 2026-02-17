import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";

type _DataParserTemplateLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral,
> = (
	& Kind<typeof dataParsers.templateLiteralKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<dataParsers.DataParserTemplateLiteral<GenericDefinition>>,
		Input<dataParsers.DataParserTemplateLiteral<GenericDefinition>>
	>
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
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/templateLiteral/index.md}
 */
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
	const self = dataParserExtendedInit<
		dataParsers.DataParserTemplateLiteral,
		DataParserTemplateLiteralExtended
	>(
		dataParsers.templateLiteral(template, definition),
		{},
		templateLiteral.overrideHandler,
	);

	return self as never;
}

templateLiteral.overrideHandler = createOverride<DataParserTemplateLiteralExtended>("@duplojs/utils/data-parser-extended/templateLiteral");

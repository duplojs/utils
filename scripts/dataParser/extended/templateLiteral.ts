import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserTemplateLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral,
> = (
	& Kind<typeof dataParsers.templateLiteralKind.definition>
	& DataParserExtended<
		GenericDefinition,
		dataParsers.TemplateLiteralShapeOutput<GenericDefinition["template"]>,
		dataParsers.TemplateLiteralShapeInput<GenericDefinition["template"]>
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

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral,
	>(
		definition: GenericDefinition
	): DataParserTemplateLiteralExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTemplateLiteral,
			GenericDefinition
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
	const self = dataParserExtendedInit<
		dataParsers.DataParserTemplateLiteral,
		DataParserTemplateLiteralExtended
	>(
		dataParsers.templateLiteral(template, definition),
		{},
	) as never;

	return templateLiteral.overrideHandler.apply(self) as never;
}

templateLiteral.overrideHandler = createOverride<DataParserTemplateLiteralExtended>("@duplojs/utils/data-parser-extended/templateLiteral");

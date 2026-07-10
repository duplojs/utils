import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import * as dataParsers from "..";

export function templateLiteral<
	const GenericTemplate extends dataParsers.TemplateLiteralShape,
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionTemplateLiteral<
			dataParsers.TemplateLiteralShapeOutput<GenericTemplate>
		>,
		"template" | "pattern"
	> = never,
>(
	template: GenericTemplate,
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionTemplateLiteral<
				dataParsers.TemplateLiteralShapeOutput<GenericTemplate>
			>,
			"template" | "pattern"
		>,
		GenericDefinition
	>,
): dataParsers.DataParserCoercer<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer<
				dataParsers.TemplateLiteralShapeOutput<GenericTemplate>
			>,
			{
				inner: dataParsers.DataParserTemplateLiteral<
					MergeDefinition<
						dataParsers.DataParserDefinitionTemplateLiteral,
						NeverCoalescing<GenericDefinition, {}> & { template: GenericTemplate }
					>
				>;
			}
		>
	> {
	return dataParsers.coercer(dataParsers.templateLiteral(template, definition));
}

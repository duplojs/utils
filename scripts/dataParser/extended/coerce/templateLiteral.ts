import type { FixDeepFunctionInfer, NeverCoalescing } from "@scripts/common";
import type { MergeDefinition, PrepareDataParserDefinition } from "@scripts/dataParser/types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";

/**
 * @deprecated Use `dataParsersExtended.templateLiteral(...).coerce()` instead.
 */
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
): dataParsersExtended.DataParserCoercerExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionCoercer<
				dataParsers.TemplateLiteralShapeOutput<GenericTemplate>
			>,
			{
				inner: dataParsersExtended.DataParserTemplateLiteralExtended<
					MergeDefinition<
						dataParsers.DataParserDefinitionTemplateLiteral,
						NeverCoalescing<GenericDefinition, {}> & { template: GenericTemplate }
					>
				>;
			}
		>
	> {
	return dataParsersExtended.coercer(dataParsersExtended.templateLiteral(template, definition));
}

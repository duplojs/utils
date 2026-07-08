import type { FixDeepFunctionInfer } from "@scripts/common";
import type { PrepareDataParserDefinition } from "@scripts/dataParser/types";
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
) {
	return dataParsers.coercer(dataParsers.templateLiteral(template, definition));
}

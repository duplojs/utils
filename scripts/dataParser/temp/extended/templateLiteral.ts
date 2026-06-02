import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserTemplateLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral
	= dataParsers.DataParserDefinitionTemplateLiteral,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserTemplateLiteral)<
		GenericDefinition,
		Output<dataParsers.DataParserTemplateLiteral<GenericDefinition>>,
		Input<dataParsers.DataParserTemplateLiteral<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTemplateLiteralExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserTemplateLiteralExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserTemplateLiteralExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public static create<
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
	): DataParserTemplateLiteralExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionTemplateLiteral,
			NeverCoalescing<GenericDefinition, {}> & {
				template: GenericTemplate;
			}
			>
		> {
		return new DataParserTemplateLiteralExtended(dataParsers.templateLiteral(template, definition).definition) as never;
	}
}

export const templateLiteral = DataParserTemplateLiteralExtended.create;

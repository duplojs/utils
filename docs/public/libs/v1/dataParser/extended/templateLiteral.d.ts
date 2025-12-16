import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserTemplateLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral> = (Kind<typeof dataParsers.templateLiteralKind.definition> & DataParserExtended<GenericDefinition, dataParsers.TemplateLiteralShapeOutput<GenericDefinition["template"]>, dataParsers.TemplateLiteralShapeInput<GenericDefinition["template"]>>);
export interface DataParserTemplateLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral = dataParsers.DataParserDefinitionTemplateLiteral> extends _DataParserTemplateLiteralExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTemplateLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserTemplateLiteralCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTemplateLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserTemplateLiteralCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTemplateLiteralExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral>(definition: GenericDefinition): DataParserTemplateLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionTemplateLiteral, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTemplateLiteralExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function templateLiteral<const GenericTemplate extends dataParsers.TemplateLiteralShape, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTemplateLiteral, "template" | "pattern">> = never>(template: GenericTemplate, definition?: GenericDefinition): DataParserTemplateLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionTemplateLiteral, NeverCoalescing<GenericDefinition, {}> & {
    template: GenericTemplate;
}>>;
export declare namespace templateLiteral {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTemplateLiteralExtended<dataParsers.DataParserDefinitionTemplateLiteral>>;
}
export {};

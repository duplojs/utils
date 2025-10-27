import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserTemplateLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral> = (dataParsers.DataParserTemplateLiteral<GenericDefinition> & DataParserExtended);
export interface DataParserTemplateLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral = dataParsers.DataParserDefinitionTemplateLiteral> extends _DataParserTemplateLiteralExtended<GenericDefinition> {
}
export declare function templateLiteral<const GenericTemplate extends dataParsers.TemplateLiteralShape, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTemplateLiteral, "template" | "pattern">> = never>(template: GenericTemplate, definition?: GenericDefinition): DataParserTemplateLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionTemplateLiteral, NeverCoalescing<GenericDefinition, {}> & {
    template: GenericTemplate;
}>>;
export {};

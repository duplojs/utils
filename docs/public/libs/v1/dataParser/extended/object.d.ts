import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserObjectExtended<GenericDefinition extends dataParsers.DataParserDefinitionObject> = (dataParsers.DataParserObject<GenericDefinition> & DataParserExtended);
export interface DataParserObjectExtended<GenericDefinition extends dataParsers.DataParserDefinitionObject = dataParsers.DataParserDefinitionObject> extends _DataParserObjectExtended<GenericDefinition> {
}
export declare function object<const GenericShape extends dataParsers.DataParserObjectShape, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionObject, "shape">> = never>(shape: GenericShape, definition?: GenericDefinition): DataParserObjectExtended<MergeDefinition<dataParsers.DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    shape: GenericShape;
}>>;
export {};

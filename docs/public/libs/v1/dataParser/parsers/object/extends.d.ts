import { type MergeDefinition } from "../../../dataParser/types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type NeverCoalescing } from "../../../common";
import { type AssignObjects } from "../../../object";
export declare function extendsShape(shape: DataParserObjectShape, extension: DataParserObjectShape): DataParserObjectShape;
declare function extend<GenericDataParserObject extends DataParserObject, const GenericExtension extends DataParserObjectShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, extension: GenericExtension, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: AssignObjects<GenericDataParserObject["definition"]["shape"], GenericExtension>;
}>>;
export { extend as extends };

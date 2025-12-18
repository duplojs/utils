import { type MergeDefinition } from "../../types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type NeverCoalescing, type SimplifyTopLevel } from "../../../common";
import { type DataParserOptional } from "../optional";
export type RequireDataParserObject<GenericShape extends DataParserObjectShape> = SimplifyTopLevel<{
    [Prop in keyof GenericShape]: GenericShape[Prop] extends DataParserOptional<any> ? GenericShape[Prop]["definition"]["inner"] : GenericShape[Prop];
}>;
export declare function requiredShape(shape: DataParserObjectShape): DataParserObjectShape;
export declare function required<GenericDataParserObject extends DataParserObject, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: RequireDataParserObject<GenericDataParserObject["definition"]["shape"]>;
}>>;

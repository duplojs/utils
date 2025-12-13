import { type MergeDefinition } from "../../types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type NeverCoalescing, type SimplifyTopLevel } from "../../../common";
import { type DataParserOptionalCheckers, type DataParserOptional } from "../optional";
export type PartialDataParserObject<GenericShape extends DataParserObjectShape> = SimplifyTopLevel<{
    [Prop in keyof GenericShape]: GenericShape[Prop] extends DataParserOptional<any> ? GenericShape[Prop] : DataParserOptional<{
        inner: GenericShape[Prop];
        checkers: DataParserOptionalCheckers[];
        coalescingValue: unknown;
    }>;
}>;
export declare function partial<GenericDataParserObject extends DataParserObject, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: PartialDataParserObject<GenericDataParserObject["definition"]["shape"]>;
}>>;

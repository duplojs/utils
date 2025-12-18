import { type MergeDefinition } from "../../../dataParser/types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type SimplifyTopLevel, type NeverCoalescing, type Adaptor } from "../../../common";
export declare function pickShape(shape: DataParserObjectShape, pickObject: Partial<Record<string, true>>): DataParserObjectShape;
export declare function pick<GenericDataParserObject extends DataParserObject, const GenericOmitObject extends Partial<Record<keyof GenericDataParserObject["definition"]["shape"], true>>, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, pickObject: GenericOmitObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: SimplifyTopLevel<Pick<GenericDataParserObject["definition"]["shape"], Adaptor<keyof GenericOmitObject, keyof GenericDataParserObject["definition"]["shape"]>>>;
}>>;

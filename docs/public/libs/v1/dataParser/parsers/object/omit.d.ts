import { type MergeDefinition } from "../../types";
import { type DataParserDefinitionObject, type DataParserObject } from ".";
import { type SimplifyTopLevel, type NeverCoalescing } from "../../../common";
export declare function omit<GenericDataParserObject extends DataParserObject, const GenericOmitObject extends Partial<Record<keyof GenericDataParserObject["definition"]["shape"], true>>, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, omitObject: GenericOmitObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: SimplifyTopLevel<Omit<GenericDataParserObject["definition"]["shape"], keyof GenericOmitObject>>;
}>>;

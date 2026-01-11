import { type MergeDefinition } from "../../types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type SimplifyTopLevel, type NeverCoalescing, type Adaptor } from "../../../common";
export declare function pickShape(shape: DataParserObjectShape, pickObject: Partial<Record<string, true>>): DataParserObjectShape;
/**
 * Creates a new object parser by selecting a subset of keys.
 * 
 * **Supported call styles:**
 * - Classic: `DP.pick(objectParser, pickObject, definition?)` -> returns an object parser
 * - Curried: not available
 * 
 * Builds a new object parser using only the selected keys from the original shape.
 * 
 * ```ts
 * const userParser = DP.object({
 * 	id: DP.number(),
 * 	name: DP.string(),
 * 	email: DP.string(),
 * });
 * 
 * const picked = DP.pick(userParser, {
 * 	id: true,
 * 	name: true,
 * });
 * const result = picked.parse({
 * 	id: 1,
 * 	name: "Alex",
 * });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: { id: number; name: string }
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
 * 
 * @namespace DP
 * 
 */
export declare function pick<GenericDataParserObject extends DataParserObject, const GenericOmitObject extends Partial<Record<keyof GenericDataParserObject["definition"]["shape"], true>>, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, pickObject: GenericOmitObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: SimplifyTopLevel<Pick<GenericDataParserObject["definition"]["shape"], Adaptor<keyof GenericOmitObject, keyof GenericDataParserObject["definition"]["shape"]>>>;
}>>;

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
export declare function partialShape(shape: DataParserObjectShape): DataParserObjectShape;
/**
 * Creates a new object parser where all properties become optional.
 * 
 * **Supported call styles:**
 * - Classic: `DP.partial(objectParser, definition?)` -> returns an object parser
 * - Curried: not available
 * 
 * Wraps each property of the object shape in optional(), allowing missing keys.
 * 
 * ```ts
 * const userParser = DP.object({
 * 	id: DP.number(),
 * 	name: DP.string(),
 * });
 * 
 * const partialUser = DP.partial(userParser);
 * const result = partialUser.parse({ name: "Alex" });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: { id?: number; name?: string }
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
 * 
 * @namespace DP
 * 
 */
export declare function partial<GenericDataParserObject extends DataParserObject, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: PartialDataParserObject<GenericDataParserObject["definition"]["shape"]>;
}>>;

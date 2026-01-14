import { type MergeDefinition } from "../../../dataParser/types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type NeverCoalescing, type SimplifyTopLevel } from "../../../common";
import { type DataParserOptional } from "../optional";
export type RequireDataParserObject<GenericShape extends DataParserObjectShape> = SimplifyTopLevel<{
    [Prop in keyof GenericShape]: GenericShape[Prop] extends DataParserOptional<any> ? GenericShape[Prop]["definition"]["inner"] : GenericShape[Prop];
}>;
export declare function requiredShape(shape: DataParserObjectShape): DataParserObjectShape;
/**
 * Creates a new object parser where optional properties become required.
 * 
 * **Supported call styles:**
 * - Classic: `DP.required(objectParser, definition?)` -> returns an object parser
 * - Curried: not available
 * 
 * Unwraps optional properties in the object shape so all keys are required.
 * 
 * ```ts
 * const userParser = DP.object({
 * 	id: DP.number(),
 * 	name: DP.string(),
 * });
 * 
 * const partialUser = DP.partial(userParser);
 * const requiredUser = DP.required(partialUser);
 * const result = requiredUser.parse({
 * 	id: 1,
 * 	name: "Alex",
 * });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: { id: number; name: string }
 * }
 * 
 * const fromOptional = DP.required(DP.object({
 * 	name: DP.optional(DP.string()),
 * }));
 * const requiredResult = fromOptional.parse({ name: "Alex" });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
 * 
 * @namespace DP
 * 
 */
export declare function required<GenericDataParserObject extends DataParserObject, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: RequireDataParserObject<GenericDataParserObject["definition"]["shape"]>;
}>>;

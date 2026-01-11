import { type MergeDefinition } from "../../types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type SimplifyTopLevel, type NeverCoalescing } from "../../../common";
export declare function omitShape(shape: DataParserObjectShape, omitObject: Partial<Record<string, true>>): DataParserObjectShape;
/**
 * Creates a new object parser by omitting keys from a shape.
 * 
 * **Supported call styles:**
 * - Classic: `DP.omit(objectParser, omitObject, definition?)` -> returns an object parser
 * - Curried: not available
 * 
 * Builds a new object parser without the omitted keys from the original shape.
 * 
 * ```ts
 * const userParser = DP.object({
 * 	id: DP.number(),
 * 	name: DP.string(),
 * 	email: DP.string(),
 * });
 * 
 * const withoutEmail = DP.omit(userParser, { email: true });
 * const result = withoutEmail.parse({
 * 	id: 1,
 * 	name: "Alex",
 * });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: { id: number; name: string }
 * }
 * 
 * const omitMultiple = DP.omit(userParser, {
 * 	id: true,
 * 	email: true,
 * });
 * const omitResult = omitMultiple.parse({ name: "Alex" });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
 * 
 * @namespace DP
 * 
 */
export declare function omit<GenericDataParserObject extends DataParserObject, const GenericOmitObject extends Partial<Record<keyof GenericDataParserObject["definition"]["shape"], true>>, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, omitObject: GenericOmitObject, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: SimplifyTopLevel<Omit<GenericDataParserObject["definition"]["shape"], keyof GenericOmitObject>>;
}>>;

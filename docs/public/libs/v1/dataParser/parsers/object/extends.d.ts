import { type MergeDefinition } from "../../types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type NeverCoalescing } from "../../../common";
import { type AssignObjects } from "../../../object";
export declare function extendsShape(shape: DataParserObjectShape, extension: DataParserObjectShape): DataParserObjectShape;
/**
 * Creates a new object parser by extending the shape with additional properties.
 * 
 * **Supported call styles:**
 * - Classic: `DP.extends(objectParser, extension, definition?)` -> returns an object parser
 * - Curried: not available
 * 
 * Builds a new object parser by merging the existing shape with the extension.
 * 
 * ```ts
 * const base = DP.object({
 * 	id: DP.number(),
 * });
 * 
 * const extended = DP.extends(base, {
 * 	name: DP.string(),
 * });
 * 
 * const result = extended.parse({
 * 	id: 1,
 * 	name: "Alex",
 * });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: { id: number; name: string }
 * }
 * 
 * const withMore = DP.extends(base, {
 * 	active: DP.boolean(),
 * });
 * const withMoreResult = withMore.parse({
 * 	id: 2,
 * 	active: true,
 * });
 * 
 * const nested = DP.extends(
 * 	DP.object({ id: DP.number() }),
 * 	{ meta: DP.object({ tag: DP.string() }) },
 * );
 * const nestedResult = nested.parse({
 * 	id: 3,
 * 	meta: { tag: "dev" },
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
 * 
 * @namespace DP
 * 
 */
declare function extend<GenericDataParserObject extends DataParserObject, const GenericExtension extends DataParserObjectShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">> = never>(dataParser: GenericDataParserObject, extension: GenericExtension, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: AssignObjects<GenericDataParserObject["definition"]["shape"], GenericExtension>;
}>>;
export { extend as extends };

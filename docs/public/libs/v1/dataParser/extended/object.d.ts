import { type Adaptor, type FixDeepFunctionInfer, type NeverCoalescing, type SimplifyTopLevel } from "../../common";
import { type AssignObjects } from "../../object";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserObjectExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserObject>;
export declare class DataParserObjectExtended<GenericDefinition extends dataParsers.DataParserDefinitionObject = dataParsers.DataParserDefinitionObject> extends DataParserObjectExtended_base<GenericDefinition, Output<dataParsers.DataParserObject<GenericDefinition>>, Input<dataParsers.DataParserObject<GenericDefinition>>> {
    get classConstructor(): typeof DataParserObjectExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserObjectExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserObjectExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates a new object parser by omitting keys from the current shape.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.omit(omitObject, definition?)` -> returns an object parser
     * 
     * Builds a new object parser without the omitted keys.
     * 
     * ```ts
     * const parser = DPE.object({
     * 	id: DPE.number(),
     * 	name: DPE.string(),
     * 	email: DPE.string(),
     * });
     * 
     * const omitted = parser.omit({ email: true });
     * const result = omitted.parse({
     * 	id: 1,
     * 	name: "Alex",
     * });
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: { id: number; name: string }
     * }
     * 
     * const omitId = parser.omit({ id: true });
     * const omitIdResult = omitId.parse({
     * 	name: "Alex",
     * 	email: "a@b.com",
     * });
     * 
     * const omitName = parser.omit({ name: true });
     * const omitNameResult = omitName.parse({
     * 	id: 1,
     * 	email: "a@b.com",
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
     * 
     * @namespace DPE
     * 
     */
    omit<const GenericOmitObject extends Partial<Record<keyof GenericDefinition["shape"], true>>, const GenericSubDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<SimplifyTopLevel<Omit<GenericDefinition["shape"], keyof GenericOmitObject>>>>, "shape" | "optimizedShape" | "checkers"> = never>(omitObject: GenericOmitObject, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<SimplifyTopLevel<Omit<GenericDefinition["shape"], keyof GenericOmitObject>>>>, "shape" | "optimizedShape" | "checkers">, GenericSubDefinition>): DataParserObjectExtended<MergeDefinition<dataParsers.DataParserDefinitionObject, NeverCoalescing<GenericSubDefinition, {}> & {
        readonly shape: SimplifyTopLevel<Omit<GenericDefinition["shape"], keyof GenericOmitObject>>;
    }>>;
    /**
     * Creates a new object parser by selecting keys from the current shape.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.pick(pickObject, definition?)` -> returns an object parser
     * 
     * Builds a new object parser using only the selected keys.
     * 
     * ```ts
     * const parser = DPE.object({
     * 	id: DPE.number(),
     * 	name: DPE.string(),
     * 	email: DPE.string(),
     * });
     * 
     * const picked = parser.pick({
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
     * 
     * const pickEmail = parser.pick({ email: true });
     * const emailResult = pickEmail.parse({ email: "a@b.com" });
     * 
     * const pickId = parser.pick({ id: true });
     * const idResult = pickId.parse({ id: 1 });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
     * 
     * @namespace DPE
     * 
     */
    pick<const GenericPickObject extends Partial<Record<keyof GenericDefinition["shape"], true>>, const GenericSubDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<SimplifyTopLevel<Pick<GenericDefinition["shape"], Adaptor<keyof GenericPickObject, keyof GenericDefinition["shape"]>>>>>, "shape" | "optimizedShape" | "checkers"> = never>(pickObject: GenericPickObject, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<SimplifyTopLevel<Pick<GenericDefinition["shape"], Adaptor<keyof GenericPickObject, keyof GenericDefinition["shape"]>>>>>, "shape" | "optimizedShape" | "checkers">, GenericSubDefinition>): DataParserObjectExtended<MergeDefinition<dataParsers.DataParserDefinitionObject, NeverCoalescing<GenericSubDefinition, {}> & {
        readonly shape: SimplifyTopLevel<Pick<GenericDefinition["shape"], Adaptor<keyof GenericPickObject, keyof GenericDefinition["shape"]>>>;
    }>>;
    /**
     * Extends an object parser with additional properties.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.extends(extension, definition?)` -> returns an object parser
     * 
     * Merges the current object shape with the extension and returns a new parser.
     * 
     * ```ts
     * const base = DPE.object({
     * 	id: DPE.number(),
     * });
     * 
     * const extended = base.extends({
     * 	name: DPE.string(),
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
     * const withMore = base.extends({
     * 	active: DPE.boolean(),
     * });
     * const withMoreResult = withMore.parse({
     * 	id: 2,
     * 	active: true,
     * });
     * 
     * const chained = DPE.object({ id: DPE.number() })
     * 	.extends({ name: DPE.string() })
     * 	.partial();
     * const chainedResult = chained.parse({});
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
     * 
     * @namespace DPE
     * 
     */
    extends<const GenericExtension extends dataParsers.DataParserObjectShape, const GenericSubDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<AssignObjects<GenericDefinition["shape"], GenericExtension>>>, "shape" | "optimizedShape" | "checkers"> = never>(extension: GenericExtension, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<AssignObjects<GenericDefinition["shape"], GenericExtension>>>, "shape" | "optimizedShape" | "checkers">, GenericSubDefinition>): DataParserObjectExtended<MergeDefinition<dataParsers.DataParserDefinitionObject, NeverCoalescing<GenericSubDefinition, {}> & {
        readonly shape: AssignObjects<GenericDefinition["shape"], GenericExtension>;
    }>>;
    /**
     * Makes all object properties optional.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.partial(definition?)` -> returns an object parser
     * 
     * Wraps each property of the object shape in optional().
     * 
     * ```ts
     * const parser = DPE.object({
     * 	id: DPE.number(),
     * 	name: DPE.string(),
     * });
     * 
     * const partialUser = parser.partial();
     * const result = partialUser.parse({ name: "Alex" });
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: { id?: number; name?: string }
     * }
     * 
     * const emptyUser = partialUser.parse({});
     * 
     * const nested = DPE.object({ profile: parser }).partial();
     * const nestedResult = nested.parse({});
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
     * 
     * @namespace DPE
     * 
     */
    partial<const GenericSubDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<dataParsers.PartialDataParserObject<GenericDefinition["shape"]>>>, "shape" | "optimizedShape" | "checkers"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<dataParsers.PartialDataParserObject<GenericDefinition["shape"]>>>, "shape" | "optimizedShape" | "checkers">, GenericSubDefinition>): DataParserObjectExtended<MergeDefinition<dataParsers.DataParserDefinitionObject, NeverCoalescing<GenericSubDefinition, {}> & {
        readonly shape: dataParsers.PartialDataParserObject<GenericDefinition["shape"]>;
    }>>;
    /**
     * Makes optional object properties required.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.required(definition?)` -> returns an object parser
     * 
     * Unwraps optional properties so all keys are required.
     * 
     * ```ts
     * const parser = DPE.object({
     * 	id: DPE.number(),
     * 	name: DPE.string(),
     * });
     * 
     * const partialUser = parser.partial();
     * const requiredUser = partialUser.required();
     * const result = requiredUser.parse({
     * 	id: 1,
     * 	name: "Alex",
     * });
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: { id: number; name: string }
     * }
     * 
     * const fromOptional = DPE.object({ name: DPE.optional(DPE.string()) }).required();
     * const optionalResult = fromOptional.parse({ name: "Alex" });
     * 
     * const strict = parser.required();
     * const strictResult = strict.parse({
     * 	id: 1,
     * 	name: "Alex",
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
     * 
     * @namespace DPE
     * 
     */
    required<const GenericSubDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<dataParsers.RequireDataParserObject<GenericDefinition["shape"]>>>, "shape" | "optimizedShape" | "checkers"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<dataParsers.RequireDataParserObject<GenericDefinition["shape"]>>>, "shape" | "optimizedShape" | "checkers">, GenericSubDefinition>): DataParserObjectExtended<MergeDefinition<dataParsers.DataParserDefinitionObject, NeverCoalescing<GenericSubDefinition, {}> & {
        readonly shape: dataParsers.RequireDataParserObject<GenericDefinition["shape"]>;
    }>>;
    /**
     * Creates an extended data parser for objects with a defined shape.
     * 
     * **Supported call styles:**
     * - Method: `DPE.object(shape, definition?)` -> returns an object parser
     * 
     * Validates objects and exposes object-specific helpers like pick, omit, partial, and required.
     * 
     * ```ts
     * const userParser = DPE.object({
     * 	id: DPE.number(),
     * 	name: DPE.string(),
     * 	email: DPE.string(),
     * });
     * 
     * const picked = userParser.pick({
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
     * 
     * const omitted = userParser.omit({ email: true });
     * const omitResult = omitted.parse({
     * 	id: 1,
     * 	name: "Alex",
     * });
     * 
     * const partialUser = userParser.partial();
     * const partialResult = partialUser.parse({ name: "Alex" });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
     * 
     * @namespace DPE
     * 
     */
    static create<const GenericShape extends dataParsers.DataParserObjectShape, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<GenericShape>>, "shape" | "optimizedShape"> = never>(shape: GenericShape, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionObject<dataParsers.DataParserObjectShapeOutput<GenericShape>>, "shape" | "optimizedShape">, GenericDefinition>): DataParserObjectExtended<MergeDefinition<dataParsers.DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
        readonly shape: GenericShape;
    }>>;
}
/**
 * Creates an extended data parser for objects with a defined shape.
 * 
 * **Supported call styles:**
 * - Method: `DPE.object(shape, definition?)` -> returns an object parser
 * 
 * Validates objects and exposes object-specific helpers like pick, omit, partial, and required.
 * 
 * ```ts
 * const userParser = DPE.object({
 * 	id: DPE.number(),
 * 	name: DPE.string(),
 * 	email: DPE.string(),
 * });
 * 
 * const picked = userParser.pick({
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
 * 
 * const omitted = userParser.omit({ email: true });
 * const omitResult = omitted.parse({
 * 	id: 1,
 * 	name: "Alex",
 * });
 * 
 * const partialUser = userParser.partial();
 * const partialResult = partialUser.parse({ name: "Alex" });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
 * 
 * @namespace DPE
 * 
 */
export declare const object: typeof DataParserObjectExtended.create;
export {};

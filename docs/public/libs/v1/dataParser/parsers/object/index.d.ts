import { type FixDeepFunctionInfer, type Kind, type MaybePromise, type Memoized, type NeverCoalescing } from "../../../common";
import { dataParserKind, type DataParser, type DataParserDefinition } from "../../base";
import { type DataParserError, SymbolDataParserError } from "../../../dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
import * as DObject from "../../../object";
export * from "./omit";
export * from "./pick";
export * from "./partial";
export * from "./required";
export * from "./extends";
export type DataParserObjectShape = Readonly<Record<string, DataParser>>;
export type DataParserObjectShapeOutput<GenericShape extends DataParserObjectShape> = {
    -readonly [Prop in keyof GenericShape as GenericShape[Prop] extends Kind<typeof dataParserKind.definition> ? Prop : never]: Output<GenericShape[Prop]>;
} extends infer InferredResult extends object ? DObject.PartialKeys<InferredResult, DObject.GetPropsWithValueExtends<InferredResult, undefined>> : never;
export type DataParserObjectShapeInput<GenericShape extends DataParserObjectShape> = {
    -readonly [Prop in keyof GenericShape as GenericShape[Prop] extends Kind<typeof dataParserKind.definition> ? Prop : never]: Input<GenericShape[Prop]>;
} extends infer InferredResult extends object ? DObject.PartialKeys<InferredResult, DObject.GetPropsWithValueExtends<InferredResult, undefined>> : never;
export type DataParserObjectCheckers<GenericInput extends object = object> = GetEligibleChecker<GenericInput>;
export interface DataParserObjectShapeEntry {
    readonly key: string;
    readonly value: DataParser;
}
export interface DataParserDefinitionObject<GenericInput extends Record<string | number, unknown> = Record<string | number, unknown>> extends DataParserDefinition<DataParserObjectCheckers<GenericInput>> {
    readonly shape: DataParserObjectShape;
    readonly optimizedShape: Memoized<{
        readonly key: string;
        readonly value: DataParser;
    }[]>;
}
export declare const objectKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/object", unknown>>;
declare const DataParserObject_base: import("../..").DataParserBaseInit<import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/object", unknown>>>;
export declare class DataParserObject<GenericDefinition extends DataParserDefinitionObject = DataParserDefinitionObject> extends DataParserObject_base<GenericDefinition, ApplyRefinementOfDefinition<DataParserObjectShapeOutput<GenericDefinition["shape"]>, GenericDefinition>, ApplyRefinementOfDefinition<DataParserObjectShapeInput<GenericDefinition["shape"]>, GenericDefinition>> {
    get classConstructor(): typeof DataParserObject & import("../..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserObject<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserObject, data: unknown, error: DataParserError): MaybePromise<Record<string, unknown> | typeof SymbolDataParserError>;
    static dataParserIsAsynchronous(self: DataParserObject): boolean;
    static prepareDefinition(shape: DataParserObjectShape, definition?: Partial<Omit<DataParserDefinitionObject, "shape" | "optimizedShape">>): DataParserDefinitionObject;
    /**
     * Creates a data parser for objects with a defined shape.
     * 
     * **Supported call styles:**
     * - Classic: `DP.object(shape, definition?)` -> returns an object parser
     * - Curried: not available
     * 
     * Validates that the input is an object and parses each property in the provided shape.
     * 
     * ```ts
     * const parser = DP.object({
     * 	name: DP.string(),
     * 	age: DP.number(),
     * });
     * const result = parser.parse({
     * 	name: "Alex",
     * 	age: 32,
     * });
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: { name: string; age: number }
     * }
     * 
     * const partialUser = DP.partial(parser);
     * const partialResult = partialUser.parse({ name: "Alex" });
     * // value: { name?: string | undefined }
     * 
     * const requiredUser = DP.required(partialUser);
     * const requiredResult = requiredUser.parse({
     * 	name: "Alex",
     * 	age: 32,
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
     * 
     * @namespace DP
     * 
     */
    static create<const GenericShape extends DataParserObjectShape, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionObject<DataParserObjectShapeOutput<GenericShape>>, "shape" | "optimizedShape"> = never>(shape: GenericShape, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionObject<DataParserObjectShapeOutput<GenericShape>>, "shape" | "optimizedShape">, GenericDefinition>): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
        readonly shape: GenericShape;
    }>>;
}
/**
 * Creates a data parser for objects with a defined shape.
 * 
 * **Supported call styles:**
 * - Classic: `DP.object(shape, definition?)` -> returns an object parser
 * - Curried: not available
 * 
 * Validates that the input is an object and parses each property in the provided shape.
 * 
 * ```ts
 * const parser = DP.object({
 * 	name: DP.string(),
 * 	age: DP.number(),
 * });
 * const result = parser.parse({
 * 	name: "Alex",
 * 	age: 32,
 * });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: { name: string; age: number }
 * }
 * 
 * const partialUser = DP.partial(parser);
 * const partialResult = partialUser.parse({ name: "Alex" });
 * // value: { name?: string | undefined }
 * 
 * const requiredUser = DP.required(partialUser);
 * const requiredResult = requiredUser.parse({
 * 	name: "Alex",
 * 	age: 32,
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/object
 * 
 * @namespace DP
 * 
 */
export declare const object: typeof DataParserObject.create;

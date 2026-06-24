import { type AnyTuple, type FixDeepFunctionInfer, type NeverCoalescing, type SimplifyTopLevel } from "../../../common";
import { type DataParserDefinition } from "../../base";
import { type DataParserError, type SymbolDataParserError } from "../../../dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
import { type DataParserDefinitionString, type DataParserString } from "../string";
import { type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionBigInt, type DataParserBigInt } from "../bigint";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionEmpty, type DataParserEmpty } from "../empty";
import { type DataParserDefinitionNil, type DataParserNil } from "../nil";
import { type DataParserDefinitionBoolean, type DataParserBoolean } from "../boolean";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
export * from "./createTemplateLiteralPattern";
export type TemplateLiteralPrimitiveParts = (string | number | null | undefined | bigint | boolean);
export type TemplateLiteralParts = (TemplateLiteralPrimitiveParts | DataParserString<SimplifyTopLevel<Omit<DataParserDefinitionString, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserNumber<SimplifyTopLevel<Omit<DataParserDefinitionNumber, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserBigInt<SimplifyTopLevel<Omit<DataParserDefinitionBigInt, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserBoolean<SimplifyTopLevel<Omit<DataParserDefinitionBoolean, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserLiteral<SimplifyTopLevel<Omit<DataParserDefinitionLiteral, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserEmpty<SimplifyTopLevel<Omit<DataParserDefinitionEmpty, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserNil<SimplifyTopLevel<Omit<DataParserDefinitionNil, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserTemplateLiteral<SimplifyTopLevel<Omit<DataParserDefinitionTemplateLiteral, "checkers"> & {
    readonly checkers: readonly [];
}>> | DataParserUnion<SimplifyTopLevel<Omit<DataParserDefinitionUnion, "checkers" | "options"> & {
    readonly options: AnyTuple<Exclude<TemplateLiteralParts, TemplateLiteralPrimitiveParts>>;
    readonly checkers: readonly [];
}>>);
export type TemplateLiteralShape = readonly [TemplateLiteralParts, ...TemplateLiteralParts[]];
export type TemplateLiteralShapeOutput<GenericTemplate extends TemplateLiteralShape, GenericLastResult extends string = ""> = GenericTemplate extends readonly [
    infer InferredFirst extends TemplateLiteralParts,
    ...infer InferredRest extends TemplateLiteralParts[]
] ? (`${GenericLastResult}${(InferredFirst extends TemplateLiteralPrimitiveParts ? InferredFirst : Output<Exclude<InferredFirst, TemplateLiteralPrimitiveParts>>) extends infer InferredPrimitiveResult extends TemplateLiteralPrimitiveParts ? InferredPrimitiveResult extends bigint ? `${InferredPrimitiveResult}n` : InferredPrimitiveResult : never}`) extends infer InferredResult extends string ? InferredRest extends readonly [] ? InferredResult : InferredRest extends TemplateLiteralShape ? TemplateLiteralShapeOutput<InferredRest, InferredResult> : never : never : never;
export type TemplateLiteralShapeInput<GenericTemplate extends TemplateLiteralShape, GenericLastResult extends string = ""> = GenericTemplate extends readonly [
    infer InferredFirst extends TemplateLiteralParts,
    ...infer InferredRest extends TemplateLiteralParts[]
] ? (`${GenericLastResult}${(InferredFirst extends TemplateLiteralPrimitiveParts ? InferredFirst : Input<Exclude<InferredFirst, TemplateLiteralPrimitiveParts>>) extends infer InferredPrimitiveResult extends TemplateLiteralPrimitiveParts ? InferredPrimitiveResult extends bigint ? `${InferredPrimitiveResult}n` : InferredPrimitiveResult : never}`) extends infer InferredResult extends string ? InferredRest extends readonly [] ? InferredResult : InferredRest extends TemplateLiteralShape ? TemplateLiteralShapeInput<InferredRest, InferredResult> : never : never : never;
export type DataParserTemplateLiteralCheckers<GenericInput extends string = string> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionTemplateLiteral<GenericInput extends string = string> extends DataParserDefinition<DataParserTemplateLiteralCheckers<GenericInput>> {
    readonly template: TemplateLiteralShape;
    readonly pattern: RegExp;
}
export declare const templateLiteralKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/template-literal", unknown>>;
declare const DataParserTemplateLiteral_base: import("../..").DataParserBaseInit<import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/template-literal", unknown>>>;
export declare class DataParserTemplateLiteral<GenericDefinition extends DataParserDefinitionTemplateLiteral = DataParserDefinitionTemplateLiteral> extends DataParserTemplateLiteral_base<GenericDefinition, NeverCoalescing<TemplateLiteralShapeOutput<GenericDefinition["template"]>, string>, NeverCoalescing<TemplateLiteralShapeInput<GenericDefinition["template"]>, string>> {
    get classConstructor(): typeof DataParserTemplateLiteral & import("../..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTemplateLiteral<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserTemplateLiteral, data: unknown, error: DataParserError): string | typeof SymbolDataParserError;
    static dataParserIsAsynchronous(self: DataParserTemplateLiteral): boolean;
    static prepareDefinition(template: TemplateLiteralShape, definition?: Partial<Omit<DataParserDefinitionTemplateLiteral, "template" | "pattern">>): DataParserDefinitionTemplateLiteral;
    /**
     * Creates a data parser for deterministic template literal strings.
     * 
     * **Supported call styles:**
     * - Classic: `DP.templateLiteral(template, definition?)` -> returns a template literal parser
     * - Curried: not available
     * 
     * Validates that the input matches the provided template literal shape and pattern. Nested sub-parsers must not include their own checkers; add template-level `checkerRefine` rules when needed.
     * 
     * ```ts
     * const parser = DP.templateLiteral(["user-", DP.number()]);
     * const result = parser.parse("user-42");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * const orderParser = DP.templateLiteral(["order-", DP.literal("vip"), "-", DP.number()]);
     * const orderResult = orderParser.parse("order-vip-12");
     * 
     * const withCheckers = DP.templateLiteral(["id-", DP.number()], {
     * 	checkers: [DP.checkerRefine((value) => value.endsWith("0"))],
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/templateLiteral
     * 
     * @namespace DP
     * 
     */
    static create<const GenericTemplate extends TemplateLiteralShape, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionTemplateLiteral<TemplateLiteralShapeOutput<GenericTemplate>>, "template" | "pattern"> = never>(template: GenericTemplate, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionTemplateLiteral<TemplateLiteralShapeOutput<GenericTemplate>>, "template" | "pattern">, GenericDefinition>): DataParserTemplateLiteral<MergeDefinition<DataParserDefinitionTemplateLiteral, NeverCoalescing<GenericDefinition, {}> & {
        template: GenericTemplate;
    }>>;
}
/**
 * Creates a data parser for deterministic template literal strings.
 * 
 * **Supported call styles:**
 * - Classic: `DP.templateLiteral(template, definition?)` -> returns a template literal parser
 * - Curried: not available
 * 
 * Validates that the input matches the provided template literal shape and pattern. Nested sub-parsers must not include their own checkers; add template-level `checkerRefine` rules when needed.
 * 
 * ```ts
 * const parser = DP.templateLiteral(["user-", DP.number()]);
 * const result = parser.parse("user-42");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string
 * }
 * 
 * const orderParser = DP.templateLiteral(["order-", DP.literal("vip"), "-", DP.number()]);
 * const orderResult = orderParser.parse("order-vip-12");
 * 
 * const withCheckers = DP.templateLiteral(["id-", DP.number()], {
 * 	checkers: [DP.checkerRefine((value) => value.endsWith("0"))],
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/templateLiteral
 * 
 * @namespace DP
 * 
 */
export declare const templateLiteral: typeof DataParserTemplateLiteral.create;

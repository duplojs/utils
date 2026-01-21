import { type Adaptor, type AnyTuple, type FixDeepFunctionInfer, type Kind, type NeverCoalescing, type SimplifyTopLevel } from "../../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../types";
import { type DataParserCheckerStringMax, type DataParserCheckerStringMin, type DataParserCheckerStringRegex, type DataParserCheckerEmail, type DataParserDefinitionString, type DataParserString } from "../string";
import { type DataParserCheckerInt, type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionBigInt, type DataParserBigInt } from "../bigint";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionEmpty, type DataParserEmpty } from "../empty";
import { type DataParserDefinitionNil, type DataParserNil } from "../nil";
import { type DataParserDefinitionBoolean, type DataParserBoolean } from "../boolean";
import { type CheckerRefineImplementation } from "../refine";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
import { type GetPropsWithValueExtends } from "../../../object";
export * from "./createTemplateLiteralPattern";
export type TemplateLiteralPrimitiveParts = (string | number | null | undefined | bigint | boolean);
export type TemplateLiteralParts = (TemplateLiteralPrimitiveParts | DataParserString<SimplifyTopLevel<Omit<DataParserDefinitionString, "checkers"> & {
    readonly checkers: readonly (DataParserCheckerEmail | DataParserCheckerStringMax | DataParserCheckerStringMin | DataParserCheckerStringRegex)[];
}>> | DataParserNumber<SimplifyTopLevel<Omit<DataParserDefinitionNumber, "checkers"> & {
    readonly checkers: readonly DataParserCheckerInt[];
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
type EligibleTemplateLiteral = string | number | bigint | boolean | null | undefined;
export type TemplateLiteralShapeOutput<GenericTemplate extends TemplateLiteralShape, GenericLastResult extends string = ""> = GenericTemplate extends readonly [
    infer InferredFirst extends TemplateLiteralParts,
    ...infer InferredRest extends TemplateLiteralParts[]
] ? (`${GenericLastResult}${InferredFirst extends TemplateLiteralPrimitiveParts ? InferredFirst extends bigint ? `${InferredFirst}n` : InferredFirst : Adaptor<Output<Exclude<InferredFirst, TemplateLiteralPrimitiveParts>>, EligibleTemplateLiteral>}`) extends infer InferredResult extends string ? InferredRest extends readonly [] ? InferredResult : InferredRest extends TemplateLiteralShape ? TemplateLiteralShapeOutput<InferredRest, InferredResult> : TemplateLiteralShapeOutput<[InferredRest[number]], InferredResult> : never : never;
export type TemplateLiteralShapeInput<GenericTemplate extends TemplateLiteralShape, GenericLastResult extends string = ""> = GenericTemplate extends readonly [
    infer InferredFirst extends TemplateLiteralParts,
    ...infer InferredRest extends TemplateLiteralParts[]
] ? (`${GenericLastResult}${InferredFirst extends TemplateLiteralPrimitiveParts ? InferredFirst extends bigint ? `${InferredFirst}n` : InferredFirst : Adaptor<Input<Exclude<InferredFirst, TemplateLiteralPrimitiveParts>>, EligibleTemplateLiteral>}`) extends infer InferredResult extends string ? InferredRest extends readonly [] ? InferredResult : InferredRest extends TemplateLiteralShape ? TemplateLiteralShapeInput<InferredRest, InferredResult> : TemplateLiteralShapeInput<[InferredRest[number]], InferredResult> : never : never;
export interface DataParserTemplateLiteralCheckerCustom<GenericInput extends string = string> {
}
export type DataParserTemplateLiteralCheckers<GenericInput extends string = string> = (DataParserTemplateLiteralCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserTemplateLiteralCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionTemplateLiteral extends DataParserDefinition<DataParserTemplateLiteralCheckers> {
    readonly template: TemplateLiteralShape;
    readonly pattern: RegExp;
}
export declare const templateLiteralKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/template-literal", unknown>>;
type _DataParserTemplateLiteral<GenericDefinition extends DataParserDefinitionTemplateLiteral> = (DataParser<GenericDefinition, TemplateLiteralShapeOutput<GenericDefinition["template"]>, TemplateLiteralShapeInput<GenericDefinition["template"]>> & Kind<typeof templateLiteralKind.definition>);
export interface DataParserTemplateLiteral<GenericDefinition extends DataParserDefinitionTemplateLiteral = DataParserDefinitionTemplateLiteral> extends _DataParserTemplateLiteral<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserTemplateLiteralCheckers<Output<this>>,
        ...DataParserTemplateLiteralCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserTemplateLiteralCheckers<Output<this>>,
        ...DataParserTemplateLiteralCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTemplateLiteral<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for deterministic template literal strings.
 * 
 * **Supported call styles:**
 * - Classic: `DP.templateLiteral(template, definition?)` -> returns a template literal parser
 * - Curried: not available
 * 
 * Validates that the input matches the provided template literal shape and pattern.
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
export declare function templateLiteral<const GenericTemplate extends TemplateLiteralShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionTemplateLiteral, "template" | "pattern">> = never>(template: GenericTemplate, definition?: GenericDefinition): DataParserTemplateLiteral<MergeDefinition<DataParserDefinitionTemplateLiteral, NeverCoalescing<GenericDefinition, {}> & {
    template: GenericTemplate;
}>>;
export declare namespace templateLiteral {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserTemplateLiteral<DataParserDefinitionTemplateLiteral>>;
}

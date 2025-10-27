import { type Adaptor, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type MergeDefinition } from "../types";
import { type DataParserCheckerEmail, type DataParserDefinitionString, type DataParserString } from "./string";
import { type DataParserDefinitionNumber, type DataParserNumber } from "./number";
import { type DataParserDefinitionBigInt, type DataParserBigInt } from "./bigint";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "./literal";
import { type DataParserDefinitionEmpty, type DataParserEmpty } from "./empty";
import { type DataParserDefinitionNil, type DataParserNil } from "./nil";
import { type DataParserDefinitionBoolean, type DataParserBoolean } from "./boolean";
export type DataParsersTemplateLiteral = (string | DataParserString<DataParserDefinitionString & {
    readonly checkers: readonly (DataParserCheckerEmail)[];
}> | DataParserNumber<DataParserDefinitionNumber & {
    readonly checkers: readonly [];
}> | DataParserBigInt<DataParserDefinitionBigInt & {
    readonly checkers: readonly [];
}> | DataParserBoolean<DataParserDefinitionBoolean & {
    readonly checkers: readonly [];
}> | DataParserLiteral<DataParserDefinitionLiteral & {
    readonly checkers: readonly [];
}> | DataParserEmpty<DataParserDefinitionEmpty & {
    readonly checkers: readonly [];
}> | DataParserNil<DataParserDefinitionNil & {
    readonly checkers: readonly [];
}> | DataParserTemplateLiteral<DataParserDefinitionTemplateLiteral & {
    readonly checkers: readonly [];
}>);
export type TemplateLiteralShape = readonly [DataParsersTemplateLiteral, ...DataParsersTemplateLiteral[]];
type EligibleTemplateLiteral = string | number | bigint | boolean | null | undefined;
export type TemplateLiteralShapeOutput<GenericTemplate extends TemplateLiteralShape, GenericLastResult extends string = ""> = GenericTemplate extends readonly [
    infer InferredFirst extends DataParsersTemplateLiteral,
    ...infer InferredRest extends DataParsersTemplateLiteral[]
] ? (`${GenericLastResult}${InferredFirst extends string ? InferredFirst : Adaptor<Output<Exclude<InferredFirst, string>>, EligibleTemplateLiteral>}`) extends infer InferredResult extends string ? InferredRest extends readonly [] ? InferredResult : InferredRest extends TemplateLiteralShape ? TemplateLiteralShapeOutput<InferredRest, InferredResult> : TemplateLiteralShapeOutput<[InferredRest[number]], InferredResult> : never : never;
export type TemplateLiteralShapeInput<GenericTemplate extends TemplateLiteralShape, GenericLastResult extends string = ""> = GenericTemplate extends readonly [
    infer InferredFirst extends DataParsersTemplateLiteral,
    ...infer InferredRest extends DataParsersTemplateLiteral[]
] ? (`${GenericLastResult}${InferredFirst extends string ? InferredFirst : Adaptor<Input<Exclude<InferredFirst, string>>, EligibleTemplateLiteral>}`) extends infer InferredResult extends string ? InferredRest extends readonly [] ? InferredResult : InferredRest extends TemplateLiteralShape ? TemplateLiteralShapeInput<InferredRest, InferredResult> : TemplateLiteralShapeInput<[InferredRest[number]], InferredResult> : never : never;
export interface DataParserDefinitionTemplateLiteral extends DataParserDefinition<never> {
    readonly template: TemplateLiteralShape;
    readonly pattern: RegExp;
}
export declare const dataParserTemplateLiteralKind: import("../../common").KindHandler<import("../../common").KindDefinition<"data-parser-template-literal", unknown>>;
type _DataParserTemplateLiteral<GenericDefinition extends DataParserDefinitionTemplateLiteral> = (DataParser<GenericDefinition, TemplateLiteralShapeOutput<GenericDefinition["template"]>, TemplateLiteralShapeInput<GenericDefinition["template"]>> & Kind<typeof dataParserTemplateLiteralKind.definition>);
export interface DataParserTemplateLiteral<GenericDefinition extends DataParserDefinitionTemplateLiteral = DataParserDefinitionTemplateLiteral> extends _DataParserTemplateLiteral<GenericDefinition> {
}
export declare function templateLiteral<const GenericTemplate extends TemplateLiteralShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionTemplateLiteral, "template" | "pattern">> = never>(template: GenericTemplate, definition?: GenericDefinition): DataParserTemplateLiteral<MergeDefinition<DataParserDefinitionTemplateLiteral, NeverCoalescing<GenericDefinition, {}> & {
    template: GenericTemplate;
}>>;
export {};

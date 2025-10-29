import { type Kind, type NeverCoalescing } from "../../common";
import { type DataParserDefinition, type DataParser, type Input, type Output, SymbolDataParserError } from "../base";
import { type DataParsers, type MergeDefinition } from "../types";
import { type DataParserError, type SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue } from "../error";
export interface DataParserDefinitionTransform extends DataParserDefinition<never> {
    readonly inner: DataParsers;
    theFunction(input: any, error: DataParserError): unknown;
}
export declare const dataParserTransformKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/transform", unknown>>;
type _DataParserTransform<GenericDefinition extends DataParserDefinitionTransform> = (DataParser<GenericDefinition, Exclude<Awaited<ReturnType<GenericDefinition["theFunction"]>>, SymbolDataParserError | SymbolDataParserErrorIssue | SymbolDataParserErrorPromiseIssue>, Input<GenericDefinition["inner"]>> & Kind<typeof dataParserTransformKind.definition>);
export interface DataParserTransform<GenericDefinition extends DataParserDefinitionTransform = DataParserDefinitionTransform> extends _DataParserTransform<GenericDefinition> {
}
export declare function transform<GenericDataParser extends DataParsers, GenericOutput extends unknown, const GenericDefinition extends Partial<Omit<DataParserDefinitionTransform, "inner" | "theFunction">> = never>(inner: GenericDataParser, theFunction: (input: Output<GenericDataParser>, error: DataParserError) => GenericOutput, definition?: GenericDefinition): DataParserTransform<MergeDefinition<DataParserDefinitionTransform, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
    theFunction(input: Output<GenericDataParser>): GenericOutput;
}>>;
export {};

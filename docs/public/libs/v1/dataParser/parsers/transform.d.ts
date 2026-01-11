import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserDefinition, type DataParser, type Input, type Output, SymbolDataParserError, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type DataParserError, type SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue } from "../error";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserTransformCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserTransformCheckers<GenericInput extends unknown = unknown> = (DataParserTransformCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserTransformCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionTransform extends DataParserDefinition<DataParserTransformCheckers> {
    readonly inner: DataParser;
    theFunction(input: any, error: DataParserError): unknown;
}
export declare const transformKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/transform", unknown>>;
type _DataParserTransform<GenericDefinition extends DataParserDefinitionTransform> = (DataParser<GenericDefinition, Exclude<Awaited<ReturnType<GenericDefinition["theFunction"]>>, SymbolDataParserError | SymbolDataParserErrorIssue | SymbolDataParserErrorPromiseIssue>, Input<GenericDefinition["inner"]>> & Kind<typeof transformKind.definition>);
export interface DataParserTransform<GenericDefinition extends DataParserDefinitionTransform = DataParserDefinitionTransform> extends _DataParserTransform<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserTransformCheckers<Output<this>>,
        ...DataParserTransformCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserTransformCheckers<Output<this>>,
        ...DataParserTransformCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTransform<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionTransform>(definition: GenericDefinition): DataParserTransform<MergeDefinition<DataParserDefinitionTransform, GenericDefinition>>;
}
/**
 * Creates a data parser that transforms the output of another parser.
 * 
 * **Supported call styles:**
 * - Classic: `DP.transform(inner, theFunction, definition?)` -> returns a transform parser
 * - Curried: not available
 * 
 * Runs the inner parser and applies a transformation function to its output.
 * 
 * ```ts
 * const parser = DP.transform(DP.string(), (value) => value.length);
 * const result = parser.parse("Duplo");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const toUpper = DP.transform(
 * 	DP.string(),
 * 	S.toUpperCase,
 * );
 * const upperResult = toUpper.parse("duplo");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/transform
 * 
 * @namespace DP
 * 
 */
export declare function transform<GenericDataParser extends DataParser, GenericOutput extends unknown, const GenericDefinition extends Partial<Omit<DataParserDefinitionTransform, "inner" | "theFunction">> = never>(inner: GenericDataParser, theFunction: (input: Output<GenericDataParser>, error: DataParserError) => GenericOutput, definition?: GenericDefinition): DataParserTransform<MergeDefinition<DataParserDefinitionTransform, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
    theFunction(input: Output<GenericDataParser>): GenericOutput;
}>>;
export declare namespace transform {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTransform<DataParserDefinitionTransform>>;
}
export {};

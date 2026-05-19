import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParserChecker } from "../base";
type _DataParserLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionLiteral> = (Kind<typeof dataParsers.literalKind.definition> & DataParserBaseExtended<GenericDefinition, Output<dataParsers.DataParserLiteral<GenericDefinition>>, Input<dataParsers.DataParserLiteral<GenericDefinition>>>);
export interface DataParserLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionLiteral = dataParsers.DataParserDefinitionLiteral> extends _DataParserLiteralExtended<GenericDefinition> {
    addChecker<const GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>): DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended data parser for a literal value.
 * 
 * **Supported call styles:**
 * - Method: `DPE.literal(value)` -> returns a literal parser
 * 
 * Accepts only the provided literal value.
 * 
 * ```ts
 * const parser = DPE.literal("status");
 * const result = parser.parse("status");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: "status"
 * }
 * 
 * const numberLiteral = DPE.literal(42);
 * const numberResult = numberLiteral.parse(42);
 * 
 * const boolLiteral = DPE.literal(true);
 * const boolResult = boolLiteral.parse(true);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/literal
 * 
 * @namespace DPE
 * 
 */
export declare function literal<const GenericValue extends dataParsers.LiteralValue, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionLiteral<GenericValue>, "value"> = never>(value: GenericValue | readonly GenericValue[], definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionLiteral<GenericValue>, "value">, GenericDefinition>): DataParserLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
    readonly value: readonly GenericValue[];
}>>;
export declare namespace literal {
    var overrideHandler: import("../../common").OverrideHandler<DataParserLiteralExtended<dataParsers.DataParserDefinitionLiteral<dataParsers.LiteralValue>>>;
}
export {};

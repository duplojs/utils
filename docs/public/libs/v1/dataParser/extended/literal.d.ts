import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionLiteral> = (Kind<typeof dataParsers.literalKind.definition> & DataParserExtended<GenericDefinition, GenericDefinition["value"][number], GenericDefinition["value"][number]>);
export interface DataParserLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionLiteral = dataParsers.DataParserDefinitionLiteral> extends _DataParserLiteralExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserLiteralCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserLiteralCheckers<Output<this>>[]
    ], GenericChecker>): DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionLiteral>(definition: GenericDefinition): DataParserLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionLiteral, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
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
export declare function literal<const GenericValue extends dataParsers.LiteralValue, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionLiteral, "value">> = never>(value: GenericValue | GenericValue[], definition?: GenericDefinition): DataParserLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
    value: GenericValue[];
}>>;
export declare namespace literal {
    var overrideHandler: import("../../common").OverrideHandler<DataParserLiteralExtended<dataParsers.DataParserDefinitionLiteral>>;
}
export {};

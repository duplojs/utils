import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserLiteralExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserLiteral>;
export declare class DataParserLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionLiteral = dataParsers.DataParserDefinitionLiteral> extends DataParserLiteralExtended_base<GenericDefinition, Output<dataParsers.DataParserLiteral<GenericDefinition>>, Input<dataParsers.DataParserLiteral<GenericDefinition>>> {
    get classConstructor(): typeof DataParserLiteralExtended & import("..").CheckedConstructorKind;
    addChecker: <const GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
    static create<const GenericValue extends dataParsers.LiteralValue, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionLiteral<GenericValue>, "value"> = never>(value: GenericValue | readonly GenericValue[], definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionLiteral<GenericValue>, "value">, GenericDefinition>): DataParserLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
        readonly value: readonly GenericValue[];
    }>>;
}
export declare const literal: typeof DataParserLiteralExtended.create;
export {};

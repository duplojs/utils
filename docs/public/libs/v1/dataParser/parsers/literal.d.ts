import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserDefinition } from "../base";
import { type DataParserError, type SymbolDataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type LiteralValue = string | number | bigint | undefined | null | boolean;
export type DataParserLiteralCheckers<GenericInput extends LiteralValue = LiteralValue> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionLiteral<GenericInput extends LiteralValue = LiteralValue> extends DataParserDefinition<DataParserLiteralCheckers<GenericInput>> {
    readonly value: readonly LiteralValue[];
}
export declare const literalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/literal", unknown>>;
declare const DataParserLiteral_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/literal", unknown>>>;
export declare class DataParserLiteral<GenericDefinition extends DataParserDefinitionLiteral = DataParserDefinitionLiteral> extends DataParserLiteral_base<GenericDefinition, ApplyRefinementOfDefinition<GenericDefinition["value"][number], GenericDefinition>, ApplyRefinementOfDefinition<GenericDefinition["value"][number], GenericDefinition>> {
    get classConstructor(): typeof DataParserLiteral & import("..").CheckedConstructorKind;
    addChecker: <const GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserLiteral<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserLiteral, data: unknown, error: DataParserError): LiteralValue | typeof SymbolDataParserError;
    static dataParserIsAsynchronous(self: DataParserLiteral): boolean;
    static prepareDefinition(value: LiteralValue | readonly LiteralValue[], definition?: Partial<Omit<DataParserDefinitionLiteral, "value">>): DataParserDefinitionLiteral;
    /**
     * Creates a data parser for a literal value.
     * 
     * **Supported call styles:**
     * - Classic: `DP.literal(value)` -> returns a literal parser
     * - Curried: not available
     * 
     * Accepts only the provided literal value and rejects any other input.
     * 
     * ```ts
     * const parser = DP.literal("status");
     * const result = parser.parse("status");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: "status"
     * }
     * 
     * const numberLiteral = DP.literal(42);
     * const numberResult = numberLiteral.parse(42);
     * 
     * const boolLiteral = DP.literal(true);
     * const boolResult = boolLiteral.parse(true);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/literal
     * 
     * @namespace DP
     * 
     */
    static create<const GenericValue extends LiteralValue, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionLiteral<GenericValue>, "value"> = never>(value: GenericValue | readonly GenericValue[], definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionLiteral<GenericValue>, "value">, GenericDefinition>): DataParserLiteral<MergeDefinition<DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
        readonly value: readonly GenericValue[];
    }>>;
}
/**
 * Creates a data parser for a literal value.
 * 
 * **Supported call styles:**
 * - Classic: `DP.literal(value)` -> returns a literal parser
 * - Curried: not available
 * 
 * Accepts only the provided literal value and rejects any other input.
 * 
 * ```ts
 * const parser = DP.literal("status");
 * const result = parser.parse("status");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: "status"
 * }
 * 
 * const numberLiteral = DP.literal(42);
 * const numberResult = numberLiteral.parse(42);
 * 
 * const boolLiteral = DP.literal(true);
 * const boolResult = boolLiteral.parse(true);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/literal
 * 
 * @namespace DP
 * 
 */
export declare const literal: typeof DataParserLiteral.create;
export {};

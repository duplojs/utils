import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserDefinition } from "../base";
import { type DataParserError, type SymbolDataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserNilCheckers = GetEligibleChecker<null>;
export interface DataParserDefinitionNil extends DataParserDefinition<DataParserNilCheckers> {
    readonly coerce: boolean;
}
export declare const nilKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nil", unknown>>;
declare const DataParserNil_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nil", unknown>>>;
export declare class DataParserNil<GenericDefinition extends DataParserDefinitionNil = DataParserDefinitionNil> extends DataParserNil_base<GenericDefinition, ApplyRefinementOfDefinition<null, GenericDefinition>, ApplyRefinementOfDefinition<null, GenericDefinition>> {
    get classConstructor(): typeof DataParserNil & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserNil<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserNil, data: unknown, error: DataParserError): null | typeof SymbolDataParserError;
    static dataParserIsAsynchronous(self: DataParserNil): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionNil>): DataParserDefinitionNil;
    /**
     * Creates a data parser that accepts null.
     * 
     * **Supported call styles:**
     * - Classic: `DP.nil(definition?)` -> returns a nil parser
     * - Curried: not available
     * 
     * Accepts null (or the string "null" when coerce is enabled) and rejects other inputs.
     * 
     * ```ts
     * const parser = DP.nil();
     * const result = parser.parse(null);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: null
     * }
     * 
     * const withCheckers = DP.nil({
     * 	checkers: [DP.checkerRefine((value) => value === null)],
     * });
     * 
     * const coerceParser = DP.coerce.nil();
     * const coerceResult = coerceParser.parse("null");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/nil
     * 
     * @namespace DP
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionNil> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionNil>, GenericDefinition>): DataParserNil<MergeDefinition<DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates a data parser that accepts null.
 * 
 * **Supported call styles:**
 * - Classic: `DP.nil(definition?)` -> returns a nil parser
 * - Curried: not available
 * 
 * Accepts null (or the string "null" when coerce is enabled) and rejects other inputs.
 * 
 * ```ts
 * const parser = DP.nil();
 * const result = parser.parse(null);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: null
 * }
 * 
 * const withCheckers = DP.nil({
 * 	checkers: [DP.checkerRefine((value) => value === null)],
 * });
 * 
 * const coerceParser = DP.coerce.nil();
 * const coerceResult = coerceParser.parse("null");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/nil
 * 
 * @namespace DP
 * 
 */
export declare const nil: typeof DataParserNil.create;
export {};

import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserDefinition } from "../base";
import { type DataParserError, type SymbolDataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserBooleanCheckers = GetEligibleChecker<boolean>;
export interface DataParserDefinitionBoolean extends DataParserDefinition<DataParserBooleanCheckers> {
    readonly coerce: boolean;
}
export declare const booleanKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/boolean", unknown>>;
declare const DataParserBoolean_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/boolean", unknown>>>;
export declare class DataParserBoolean<GenericDefinition extends DataParserDefinitionBoolean = DataParserDefinitionBoolean> extends DataParserBoolean_base<GenericDefinition, boolean, boolean> {
    get classConstructor(): typeof DataParserBoolean & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserBoolean<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserBoolean, data: unknown, error: DataParserError): boolean | typeof SymbolDataParserError;
    static dataParserIsAsynchronous(self: DataParserBoolean): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionBoolean>): DataParserDefinitionBoolean;
    /**
     * Creates a data parser for boolean values.
     * 
     * **Supported call styles:**
     * - Classic: `DP.boolean(definition?)` -> returns a boolean parser
     * - Curried: not available
     * 
     * Validates that the input is a boolean, optionally applies coerce, and runs the configured checkers.
     * 
     * ```ts
     * const parser = DP.boolean();
     * const result = parser.parse(true);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: boolean
     * }
     * 
     * const onlyTrue = DP.boolean({
     * 	checkers: [DP.checkerRefine((value) => value === true)],
     * });
     * 
     * const coerceParser = DP.coerce.boolean();
     * const coerceResult = coerceParser.parse("false");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/boolean
     * 
     * @namespace DP
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionBoolean> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionBoolean>, GenericDefinition>): DataParserBoolean<MergeDefinition<DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates a data parser for boolean values.
 * 
 * **Supported call styles:**
 * - Classic: `DP.boolean(definition?)` -> returns a boolean parser
 * - Curried: not available
 * 
 * Validates that the input is a boolean, optionally applies coerce, and runs the configured checkers.
 * 
 * ```ts
 * const parser = DP.boolean();
 * const result = parser.parse(true);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: boolean
 * }
 * 
 * const onlyTrue = DP.boolean({
 * 	checkers: [DP.checkerRefine((value) => value === true)],
 * });
 * 
 * const coerceParser = DP.coerce.boolean();
 * const coerceResult = coerceParser.parse("false");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/boolean
 * 
 * @namespace DP
 * 
 */
export declare const boolean: typeof DataParserBoolean.create;
export {};

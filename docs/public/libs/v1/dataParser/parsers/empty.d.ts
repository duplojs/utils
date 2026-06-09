import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserDefinition } from "../base";
import { type DataParserError, type SymbolDataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserEmptyCheckers = GetEligibleChecker<undefined>;
export interface DataParserDefinitionEmpty extends DataParserDefinition<DataParserEmptyCheckers> {
    readonly coerce: boolean;
}
export declare const emptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/empty", unknown>>;
declare const DataParserEmpty_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/empty", unknown>>>;
export declare class DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty> extends DataParserEmpty_base<GenericDefinition, undefined, undefined> {
    get classConstructor(): typeof DataParserEmpty & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserEmpty<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserEmpty, data: unknown, error: DataParserError): undefined | typeof SymbolDataParserError;
    static dataParserIsAsynchronous(self: DataParserEmpty): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionEmpty>): DataParserDefinitionEmpty;
    /**
     * Creates a data parser that accepts undefined.
     * 
     * **Supported call styles:**
     * - Classic: `DP.empty(definition?)` -> returns an empty parser
     * - Curried: not available
     * 
     * Accepts undefined (or the string "undefined" when coerce is enabled) and rejects other inputs.
     * 
     * ```ts
     * const parser = DP.empty();
     * const result = parser.parse(undefined);
     * if (E.isRight(result)) {
     * 	// E.Success<undefined>
     * }
     * 
     * const withCheckers = DP.empty({
     * 	checkers: [DP.checkerRefine((value) => value === undefined)],
     * });
     * 
     * const coerceParser = DP.coerce.empty();
     * const coerceResult = coerceParser.parse("undefined");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/empty
     * 
     * @namespace DP
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionEmpty> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionEmpty>, GenericDefinition>): DataParserEmpty<MergeDefinition<DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
}
export declare const empty: typeof DataParserEmpty.create;
export {};

import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserDefinition } from "../base";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
import { type DataParserError } from "../../dataParser/error";
export type DataParserUnknownCheckers = GetEligibleChecker<unknown>;
export interface DataParserDefinitionUnknown extends DataParserDefinition<DataParserUnknownCheckers> {
}
export declare const unknownKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/unknown", unknown>>;
declare const DataParserUnknown_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/unknown", unknown>>>;
export declare class DataParserUnknown<GenericDefinition extends DataParserDefinitionUnknown = DataParserDefinitionUnknown> extends DataParserUnknown_base<GenericDefinition, unknown, unknown> {
    get classConstructor(): typeof DataParserUnknown & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserUnknown<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(_self: DataParserUnknown, data: unknown, _error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserUnknown): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionUnknown>): DataParserDefinitionUnknown;
    /**
     * Creates a data parser that accepts any value.
     * 
     * **Supported call styles:**
     * - Classic: `DP.unknown(definition?)` -> returns an unknown parser
     * - Curried: not available
     * 
     * Always succeeds, unless additional checkers reject the value.
     * 
     * ```ts
     * const parser = DP.unknown();
     * const result = parser.parse({ any: "value" });
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: unknown
     * }
     * 
     * const nonEmptyString = DP.unknown({
     * 	checkers: [DP.checkerRefine((value) => typeof value === "string" && value.length > 0)],
     * });
     * 
     * const numbersOnly = DP.unknown()
     * 	.addChecker(DP.checkerRefine((value) => typeof value === "number"));
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/unknown
     * 
     * @namespace DP
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionUnknown> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionUnknown>, GenericDefinition>): DataParserUnknown<MergeDefinition<DataParserDefinitionUnknown, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates a data parser that accepts any value.
 * 
 * **Supported call styles:**
 * - Classic: `DP.unknown(definition?)` -> returns an unknown parser
 * - Curried: not available
 * 
 * Always succeeds, unless additional checkers reject the value.
 * 
 * ```ts
 * const parser = DP.unknown();
 * const result = parser.parse({ any: "value" });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: unknown
 * }
 * 
 * const nonEmptyString = DP.unknown({
 * 	checkers: [DP.checkerRefine((value) => typeof value === "string" && value.length > 0)],
 * });
 * 
 * const numbersOnly = DP.unknown()
 * 	.addChecker(DP.checkerRefine((value) => typeof value === "number"));
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/unknown
 * 
 * @namespace DP
 * 
 */
export declare const unknown: typeof DataParserUnknown.create;
export {};

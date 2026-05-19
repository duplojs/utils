import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type DataParserChecker } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../../dataParser/types";
export type DataParserEmptyCheckers = GetEligibleChecker<undefined>;
export interface DataParserDefinitionEmpty extends DataParserDefinition<DataParserEmptyCheckers> {
    readonly coerce: boolean;
}
export declare const emptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/empty", unknown>>;
type _DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty> = (DataParserBase<GenericDefinition, undefined, undefined> & Kind<typeof emptyKind.definition>);
export interface DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty> extends _DataParserEmpty<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>): DataParserEmpty<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
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
export declare function empty<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionEmpty> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionEmpty>, GenericDefinition>): DataParserEmpty<MergeDefinition<DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace empty {
    var overrideHandler: import("../../common").OverrideHandler<DataParserEmpty<DataParserDefinitionEmpty>>;
}
export {};

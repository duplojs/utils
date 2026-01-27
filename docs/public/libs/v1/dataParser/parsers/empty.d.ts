import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserEmptyCheckerCustom {
}
export type DataParserEmptyCheckers = (DataParserEmptyCheckerCustom[GetPropsWithValueExtends<DataParserEmptyCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<undefined>);
export interface DataParserDefinitionEmpty extends DataParserDefinition<DataParserEmptyCheckers> {
    readonly coerce: boolean;
}
export declare const emptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/empty", unknown>>;
type _DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty> = (DataParser<GenericDefinition, undefined, undefined> & Kind<typeof emptyKind.definition>);
export interface DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty> extends _DataParserEmpty<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserEmptyCheckers,
        ...DataParserEmptyCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserEmptyCheckers,
        ...DataParserEmptyCheckers[]
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
export declare function empty<const GenericDefinition extends Partial<DataParserDefinitionEmpty> = never>(definition?: GenericDefinition): DataParserEmpty<MergeDefinition<DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace empty {
    var overrideHandler: import("../../common").OverrideHandler<DataParserEmpty<DataParserDefinitionEmpty>>;
}
export {};

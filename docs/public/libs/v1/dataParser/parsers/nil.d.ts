import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserNilCheckerCustom {
}
export type DataParserNilCheckers = (DataParserNilCheckerCustom[GetPropsWithValueExtends<DataParserNilCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<null>);
export interface DataParserDefinitionNil extends DataParserDefinition<DataParserNilCheckers> {
    readonly coerce: boolean;
}
export declare const nilKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nil", unknown>>;
type _DataParserNil<GenericDefinition extends DataParserDefinitionNil> = (DataParser<GenericDefinition, null, null> & Kind<typeof nilKind.definition>);
export interface DataParserNil<GenericDefinition extends DataParserDefinitionNil = DataParserDefinitionNil> extends _DataParserNil<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserNilCheckers,
        ...DataParserNilCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserNilCheckers,
        ...DataParserNilCheckers[]
    ], GenericChecker>): DataParserNil<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionNil>(definition: GenericDefinition): DataParserNil<MergeDefinition<DataParserDefinitionNil, GenericDefinition>>;
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
export declare function nil<const GenericDefinition extends Partial<DataParserDefinitionNil> = never>(definition?: GenericDefinition): DataParserNil<MergeDefinition<DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace nil {
    var overrideHandler: import("../../common").OverrideHandler<DataParserNil<DataParserDefinitionNil>>;
}
export {};

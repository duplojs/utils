import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserBooleanCheckerCustom {
}
export type DataParserBooleanCheckers = (DataParserBooleanCheckerCustom[GetPropsWithValueExtends<DataParserBooleanCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<boolean>);
export interface DataParserDefinitionBoolean extends DataParserDefinition<DataParserBooleanCheckers> {
    readonly coerce: boolean;
}
export declare const booleanKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/boolean", unknown>>;
type _DataParserBoolean<GenericDefinition extends DataParserDefinitionBoolean> = (DataParser<GenericDefinition, boolean, boolean> & Kind<typeof booleanKind.definition>);
export interface DataParserBoolean<GenericDefinition extends DataParserDefinitionBoolean = DataParserDefinitionBoolean> extends _DataParserBoolean<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserBooleanCheckers,
        ...DataParserBooleanCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserBooleanCheckers,
        ...DataParserBooleanCheckers[]
    ], GenericChecker>): DataParserBoolean<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
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
export declare function boolean<const GenericDefinition extends Partial<DataParserDefinitionBoolean> = never>(definition?: GenericDefinition): DataParserBoolean<MergeDefinition<DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace boolean {
    var overrideHandler: import("../../common").OverrideHandler<DataParserBoolean<DataParserDefinitionBoolean>>;
}
export {};

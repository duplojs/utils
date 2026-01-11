import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserRecoverCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserRecoverCheckers<GenericInput extends unknown = unknown> = (DataParserRecoverCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserRecoverCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionRecover extends DataParserDefinition<DataParserRecoverCheckers> {
    readonly inner: DataParser;
    readonly recoveredValue: unknown;
}
export declare const recoverKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/recover", unknown>>;
type _DataParserRecover<GenericDefinition extends DataParserDefinitionRecover> = (DataParser<GenericDefinition, GenericDefinition["recoveredValue"], Input<GenericDefinition["inner"]>> & Kind<typeof recoverKind.definition>);
export interface DataParserRecover<GenericDefinition extends DataParserDefinitionRecover = DataParserDefinitionRecover> extends _DataParserRecover<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserRecoverCheckers<Output<this>>,
        ...DataParserRecoverCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserRecoverCheckers<Output<this>>,
        ...DataParserRecoverCheckers<Output<this>>[]
    ], GenericChecker>): DataParserRecover<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionRecover>(definition: GenericDefinition): DataParserRecover<MergeDefinition<DataParserDefinitionRecover, GenericDefinition>>;
}
/**
 * Creates a data parser that recovers with a fallback value on error.
 * 
 * **Supported call styles:**
 * - Classic: `DP.recover(inner, recoveredValue, definition?)` -> returns a recover parser
 * - Curried: not available
 * 
 * Runs the inner parser and returns the recovered value when parsing fails.
 * 
 * ```ts
 * const parser = DP.recover(DP.number(), 0);
 * const result = parser.parse("not-a-number");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const withString = DP.recover(DP.string(), "fallback");
 * const stringResult = withString.parse(123);
 * 
 * const withCheckers = DP.recover(DP.string(), "fallback", {
 * 	checkers: [DP.checkerRefine((value) => value.length > 0)],
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/recover
 * 
 * @namespace DP
 * 
 */
export declare function recover<GenericDataParser extends DataParser, GenericRecoveredValue extends Output<GenericDataParser>, const GenericDefinition extends Partial<Omit<DataParserDefinitionRecover, "inner" | "recoveredValue">> = never>(inner: GenericDataParser, recoveredValue: GenericRecoveredValue, definition?: GenericDefinition): DataParserRecover<MergeDefinition<DataParserDefinitionRecover, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
    recoveredValue: GenericRecoveredValue;
}>>;
export declare namespace recover {
    var overrideHandler: import("../../common").OverrideHandler<DataParserRecover<DataParserDefinitionRecover>>;
}
export {};

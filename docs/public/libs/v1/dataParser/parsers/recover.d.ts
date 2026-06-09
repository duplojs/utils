import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserRecoverCheckers<GenericInput extends unknown = unknown> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionRecover<GenericInput extends unknown = unknown> extends DataParserDefinition<DataParserRecoverCheckers<GenericInput>> {
    readonly inner: DataParser;
    readonly recoveredValue: unknown;
}
export declare const recoverKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/recover", unknown>>;
declare const DataParserRecover_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/recover", unknown>>>;
export declare class DataParserRecover<GenericDefinition extends DataParserDefinitionRecover = DataParserDefinitionRecover> extends DataParserRecover_base<GenericDefinition, GenericDefinition["recoveredValue"], Input<GenericDefinition["inner"]>> {
    get classConstructor(): typeof DataParserRecover & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserRecover<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserRecover, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserRecover): boolean;
    static prepareDefinition(inner: DataParser, recoveredValue: unknown, definition?: Partial<Omit<DataParserDefinitionRecover, "inner" | "recoveredValue">>): DataParserDefinitionRecover;
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
     * const withCheckers = DP.recover(DP.string(), "fallback")
     * 	.addChecker(DP.checkerRefine((value) => value.length > 0));
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/recover
     * 
     * @namespace DP
     * 
     */
    static create<GenericDataParser extends DataParser, GenericRecoveredValue extends Output<GenericDataParser>, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionRecover<Output<GenericDataParser>>, "inner" | "recoveredValue"> = never>(inner: GenericDataParser, recoveredValue: GenericRecoveredValue, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionRecover<Output<GenericDataParser>>, "inner" | "recoveredValue">, GenericDefinition>): DataParserRecover<MergeDefinition<DataParserDefinitionRecover, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
        recoveredValue: GenericRecoveredValue;
    }>>;
}
export declare const recover: typeof DataParserRecover.create;
export {};

import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserRecoverExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecover> = (Kind<typeof dataParsers.recoverKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserRecover<GenericDefinition>>, Input<dataParsers.DataParserRecover<GenericDefinition>>>);
export interface DataParserRecoverExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecover = dataParsers.DataParserDefinitionRecover> extends _DataParserRecoverExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserRecoverCheckers<Output<this>>,
        ...dataParsers.DataParserRecoverCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserRecoverCheckers<Output<this>>,
        ...dataParsers.DataParserRecoverCheckers<Output<this>>[]
    ], GenericChecker>): DataParserRecoverExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserRecoverExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended data parser that recovers with a fallback value on error.
 * 
 * **Supported call styles:**
 * - Method: `DPE.recover(inner, recoveredValue, definition?)` -> returns a recover parser
 * 
 * Runs the inner parser and returns the recovered value when parsing fails.
 * 
 * ```ts
 * const parser = DPE.recover(DPE.number(), 0);
 * const result = parser.parse("not-a-number");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const withString = DPE.recover(DPE.string(), "fallback");
 * const stringResult = withString.parse(123);
 * 
 * const okResult = parser.parse(10);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/recover
 * 
 * @namespace DPE
 * 
 */
export declare function recover<GenericDataParser extends DataParser, GenericRecoveredValue extends Output<GenericDataParser>, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionRecover, "inner" | "recoveredValue">> = never>(inner: GenericDataParser, recoveredValue: GenericRecoveredValue, definition?: GenericDefinition): DataParserRecoverExtended<MergeDefinition<dataParsers.DataParserDefinitionRecover, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
    recoveredValue: GenericRecoveredValue;
}>>;
export declare namespace recover {
    var overrideHandler: import("../../common").OverrideHandler<DataParserRecoverExtended<dataParsers.DataParserDefinitionRecover>>;
}
export {};

import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
import { type TheDate } from "../../date";
export interface DataParserDateCheckerCustom {
}
export type DataParserDateCheckers = (DataParserDateCheckerCustom[GetPropsWithValueExtends<DataParserDateCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<TheDate>);
export interface DataParserDefinitionDate extends DataParserDefinition<DataParserDateCheckers> {
    readonly coerce: boolean;
}
export declare const dateKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/date", unknown>>;
type _DataParserDate<GenericDefinition extends DataParserDefinitionDate> = (DataParser<GenericDefinition, TheDate, TheDate> & Kind<typeof dateKind.definition>);
export interface DataParserDate<GenericDefinition extends DataParserDefinitionDate = DataParserDefinitionDate> extends _DataParserDate<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserDateCheckers,
        ...DataParserDateCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserDateCheckers,
        ...DataParserDateCheckers[]
    ], GenericChecker>): DataParserDate<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionDate>(definition: GenericDefinition): DataParserDate<MergeDefinition<DataParserDefinitionDate, GenericDefinition>>;
}
/**
 * Creates a data parser for TheDate values.
 * 
 * **Supported call styles:**
 * - Classic: `DP.date(definition?)` -> returns a date parser
 * - Curried: not available
 * 
 * Validates that the input is a TheDate, optionally applies coerce, and runs the configured checkers.
 * 
 * ```ts
 * const parser = DP.date();
 * const result = parser.parse("date0+");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: TheDate
 * }
 * 
 * const withCheckers = DP.date({
 * 	checkers: [DP.checkerRefine((value) => value !== "date0+")],
 * });
 * 
 * const coerceParser = DP.coerce.date();
 * const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/date
 * 
 * @namespace DP
 * 
 */
export declare function date<const GenericDefinition extends Partial<DataParserDefinitionDate> = never>(definition?: GenericDefinition): DataParserDate<MergeDefinition<DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace date {
    var overrideHandler: import("../../common").OverrideHandler<DataParserDate<DataParserDefinitionDate>>;
}
export {};

import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserNullableCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserNullableCheckers<GenericInput extends unknown = unknown> = (DataParserNullableCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserNullableCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionNullable<GenericCoalescingValue extends unknown = unknown> extends DataParserDefinition<DataParserNullableCheckers> {
    readonly inner: DataParser;
    readonly coalescingValue: GenericCoalescingValue;
}
export declare const nullableKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nullable", unknown>>;
type _DataParserNullable<GenericDefinition extends DataParserDefinitionNullable> = (DataParser<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | null : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | null> & Kind<typeof nullableKind.definition>);
export interface DataParserNullable<GenericDefinition extends DataParserDefinitionNullable = DataParserDefinitionNullable> extends _DataParserNullable<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserNullableCheckers<Output<this>>,
        ...DataParserNullableCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserNullableCheckers<Output<this>>,
        ...DataParserNullableCheckers<Output<this>>[]
    ], GenericChecker>): DataParserNullable<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser that accepts null or the inner parser output.
 * 
 * **Supported call styles:**
 * - Classic: `DP.nullable(inner, definition?)` -> returns a nullable parser
 * - Curried: not available
 * 
 * Returns null (or a coalescing value) when input is null, otherwise parses with the inner parser.
 * 
 * ```ts
 * const parser = DP.nullable(DP.string());
 * const result = parser.parse(null);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string | null
 * }
 * 
 * const withCoalescing = DP.nullable(DP.number(), { coalescingValue: 0 });
 * const coalesced = withCoalescing.parse(null);
 * 
 * const withCheckers = DP.nullable(DP.boolean(), {
 * 	checkers: [DP.checkerRefine((value) => value !== null)],
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/nullable
 * 
 * @namespace DP
 * 
 */
export declare function nullable<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionNullable<Output<GenericDataParser> | null>, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserNullable<MergeDefinition<DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export declare namespace nullable {
    var overrideHandler: import("../../common").OverrideHandler<DataParserNullable<DataParserDefinitionNullable<unknown>>>;
}
export {};

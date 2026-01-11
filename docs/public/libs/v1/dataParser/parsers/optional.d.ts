import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserOptionalCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserOptionalCheckers<GenericInput extends unknown = unknown> = (DataParserOptionalCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserOptionalCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionOptional<GenericCoalescingValue extends unknown = unknown> extends DataParserDefinition<DataParserOptionalCheckers> {
    readonly inner: DataParser;
    readonly coalescingValue: GenericCoalescingValue;
}
export declare const optionalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/optional", unknown>>;
type _DataParserOptional<GenericDefinition extends DataParserDefinitionOptional> = (DataParser<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | undefined : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | undefined> & Kind<typeof optionalKind.definition>);
export interface DataParserOptional<GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional> extends _DataParserOptional<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserOptionalCheckers<Output<this>>,
        ...DataParserOptionalCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserOptionalCheckers<Output<this>>,
        ...DataParserOptionalCheckers<Output<this>>[]
    ], GenericChecker>): DataParserOptional<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionOptional>(definition: GenericDefinition): DataParserOptional<MergeDefinition<DataParserDefinitionOptional, GenericDefinition>>;
}
/**
 * Creates a data parser that accepts undefined or the inner parser output.
 * 
 * **Supported call styles:**
 * - Classic: `DP.optional(inner, definition?)` -> returns an optional parser
 * - Curried: not available
 * 
 * Returns undefined (or a coalescing value) when input is undefined, otherwise parses with the inner parser.
 * 
 * ```ts
 * const parser = DP.optional(DP.string());
 * const result = parser.parse(undefined);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string | undefined
 * }
 * 
 * const withCoalescing = DP.optional(DP.number(), { coalescingValue: 0 });
 * const coalesced = withCoalescing.parse(undefined);
 * 
 * const withCheckers = DP.optional(DP.number(), {
 * 	checkers: [DP.checkerRefine((value) => value !== 13)],
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/optional
 * 
 * @namespace DP
 * 
 */
export declare function optional<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionOptional<Output<GenericDataParser> | undefined>, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserOptional<MergeDefinition<DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export declare namespace optional {
    var overrideHandler: import("../../common").OverrideHandler<DataParserOptional<DataParserDefinitionOptional<unknown>>>;
}
export {};

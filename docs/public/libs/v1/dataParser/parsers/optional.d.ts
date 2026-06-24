import { type FixDeepFunctionInfer, type IsEqual, type NeverCoalescing } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserOptionalCheckers<GenericInput extends unknown = unknown> = GetEligibleChecker<GenericInput | undefined>;
export interface DataParserDefinitionOptional<GenericOutput extends unknown = unknown> extends DataParserDefinition<DataParserOptionalCheckers<GenericOutput>> {
    readonly inner: DataParser;
    readonly coalescingValue: GenericOutput;
}
export declare const optionalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/optional", unknown>>;
declare const DataParserOptional_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/optional", unknown>>>;
export declare class DataParserOptional<GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional> extends DataParserOptional_base<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | undefined : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | undefined> {
    get classConstructor(): typeof DataParserOptional & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserOptional<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserOptional, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserOptional): boolean;
    static prepareDefinition(inner: DataParser, definition?: Partial<Omit<DataParserDefinitionOptional, "inner">>): DataParserDefinitionOptional;
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
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionOptional<Output<GenericDataParser>>, "inner"> = never>(inner: GenericDataParser, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionOptional<Output<GenericDataParser>>, "inner">, GenericDefinition>): DataParserOptional<MergeDefinition<DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
    }>>;
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
export declare const optional: typeof DataParserOptional.create;
export {};

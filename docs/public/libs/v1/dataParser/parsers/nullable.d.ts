import { type FixDeepFunctionInfer, type IsEqual, type NeverCoalescing } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserNullableCheckers<GenericInput extends unknown = unknown> = GetEligibleChecker<GenericInput | null>;
export interface DataParserDefinitionNullable<GenericOutput extends unknown = unknown> extends DataParserDefinition<DataParserNullableCheckers<GenericOutput>> {
    readonly inner: DataParser;
    readonly coalescingValue: GenericOutput;
}
export declare const nullableKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nullable", unknown>>;
declare const DataParserNullable_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nullable", unknown>>>;
export declare class DataParserNullable<GenericDefinition extends DataParserDefinitionNullable = DataParserDefinitionNullable> extends DataParserNullable_base<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | null : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | null> {
    get classConstructor(): typeof DataParserNullable & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserNullable<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserNullable, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserNullable): boolean;
    static prepareDefinition(inner: DataParser, definition?: Partial<Omit<DataParserDefinitionNullable, "inner">>): DataParserDefinitionNullable;
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
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionNullable<Output<GenericDataParser>>, "inner"> = never>(inner: GenericDataParser, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionNullable<Output<GenericDataParser>>, "inner">, GenericDefinition>): DataParserNullable<MergeDefinition<DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
    }>>;
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
export declare const nullable: typeof DataParserNullable.create;
export {};

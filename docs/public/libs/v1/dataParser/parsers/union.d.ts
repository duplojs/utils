import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type UnionOptions = readonly [DataParser, ...DataParser[]];
export type DataParserUnionCheckers<GenericInput extends unknown = unknown> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionUnion<GenericInput extends unknown = unknown> extends DataParserDefinition<DataParserUnionCheckers<GenericInput>> {
    readonly options: UnionOptions;
}
export declare const unionKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/union", unknown>>;
declare const DataParserUnion_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/union", unknown>>>;
export declare class DataParserUnion<GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion> extends DataParserUnion_base<GenericDefinition, ApplyRefinementOfDefinition<Output<GenericDefinition["options"][number]>, GenericDefinition>, ApplyRefinementOfDefinition<Input<GenericDefinition["options"][number]>, GenericDefinition>> {
    get classConstructor(): typeof DataParserUnion & import("..").CheckedConstructorKind;
    addChecker: <const GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserUnion<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserUnion, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserUnion): boolean;
    static prepareDefinition(options: UnionOptions, definition?: Partial<Omit<DataParserDefinitionUnion, "options">>): DataParserDefinitionUnion;
    /**
     * Creates a data parser that accepts one of multiple parsers.
     * 
     * **Supported call styles:**
     * - Classic: `DP.union(options, definition?)` -> returns a union parser
     * - Curried: not available
     * 
     * Tries each option in order until one succeeds, then returns its output.
     * 
     * ```ts
     * const parser = DP.union([DP.string(), DP.number()]);
     * const result = parser.parse("hello");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string | number
     * }
     * 
     * const literals = DP.union([DP.literal("on"), DP.literal("off")]);
     * const literalResult = literals.parse("off");
     * 
     * const withCheckers = DP.union(
     * 	[DP.string(), DP.coerce.number()],
     * 	{ checkers: [DP.checkerRefine((value) => value !== "forbidden")] },
     * );
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/union
     * 
     * @namespace DP
     * 
     */
    static create<const GenericOptions extends UnionOptions, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionUnion<Output<GenericOptions[number]>>, "options"> = never>(options: GenericOptions, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionUnion<Output<GenericOptions[number]>>, "options">, GenericDefinition>): DataParserUnion<MergeDefinition<DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
        readonly options: GenericOptions;
    }>>;
}
/**
 * Creates a data parser that accepts one of multiple parsers.
 * 
 * **Supported call styles:**
 * - Classic: `DP.union(options, definition?)` -> returns a union parser
 * - Curried: not available
 * 
 * Tries each option in order until one succeeds, then returns its output.
 * 
 * ```ts
 * const parser = DP.union([DP.string(), DP.number()]);
 * const result = parser.parse("hello");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string | number
 * }
 * 
 * const literals = DP.union([DP.literal("on"), DP.literal("off")]);
 * const literalResult = literals.parse("off");
 * 
 * const withCheckers = DP.union(
 * 	[DP.string(), DP.coerce.number()],
 * 	{ checkers: [DP.checkerRefine((value) => value !== "forbidden")] },
 * );
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/union
 * 
 * @namespace DP
 * 
 */
export declare const union: typeof DataParserUnion.create;
export {};

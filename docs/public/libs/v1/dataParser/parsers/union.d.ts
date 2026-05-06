import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type Input, type DataParserChecker, type DataParserCheckerDefinition, type DataParser } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
export type UnionOptions = readonly [DataParser, ...DataParser[]];
export type DataParserUnionCheckers<GenericInput extends unknown = unknown> = DataParserChecker<DataParserCheckerDefinition, GenericInput>;
export interface DataParserDefinitionUnion<GenericInput extends unknown = unknown> extends DataParserDefinition<DataParserUnionCheckers<GenericInput>> {
    readonly options: UnionOptions;
}
export declare const unionKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/union", unknown>>;
type _DataParserUnion<GenericDefinition extends DataParserDefinitionUnion> = (DataParserBase<GenericDefinition, Output<GenericDefinition["options"][number]>, Input<GenericDefinition["options"][number]>> & Kind<typeof unionKind.definition>);
export interface DataParserUnion<GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion> extends _DataParserUnion<GenericDefinition> {
    addChecker<const GenericChecker extends readonly [
        DataParserUnionCheckers<Output<this>>,
        ...DataParserUnionCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserUnionCheckers<Output<this>>,
        ...DataParserUnionCheckers<Output<this>>[]
    ], GenericChecker>): DataParserUnion<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
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
export declare function union<const GenericOptions extends UnionOptions, const GenericDefinition extends Partial<Omit<DataParserDefinitionUnion<Output<GenericOptions[number]>>, "options">> = never>(options: GenericOptions, definition?: GenericDefinition): DataParserUnion<MergeDefinition<DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
    readonly options: GenericOptions;
}>>;
export declare namespace union {
    var overrideHandler: import("../../common").OverrideHandler<DataParserUnion<DataParserDefinitionUnion<unknown>>>;
}
export {};

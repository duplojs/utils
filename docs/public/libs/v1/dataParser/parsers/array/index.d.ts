import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type Input, type DataParser } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "../../../dataParser/types";
export * from "./checkers";
export type DataParserArrayCheckers<GenericInput extends unknown[] = unknown[]> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionArray<GenericInput extends unknown[] = unknown[]> extends DataParserDefinition<DataParserArrayCheckers<GenericInput>> {
    readonly element: DataParser;
}
export declare const arrayKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/array", unknown>>;
type _DataParserArray<GenericDefinition extends DataParserDefinitionArray> = (DataParserBase<GenericDefinition, Output<GenericDefinition["element"]>[], Input<GenericDefinition["element"]>[]> & Kind<typeof arrayKind.definition>);
export interface DataParserArray<GenericDefinition extends DataParserDefinitionArray = DataParserDefinitionArray> extends _DataParserArray<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserArrayCheckers<Output<this>>,
        ...DataParserArrayCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserArrayCheckers<Output<this>>,
        ...DataParserArrayCheckers<Output<this>>[]
    ], GenericChecker>): DataParserArray<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for arrays of a given element parser.
 * 
 * **Supported call styles:**
 * - Classic: `DP.array(element, definition?)` -> returns an array parser
 * - Curried: not available
 * 
 * Validates that the input is an array and validates each element with the provided parser.
 * 
 * ```ts
 * const parser = DP.array(DP.string());
 * const result = parser.parse(["a", "b"]);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string[]
 * }
 * 
 * const withCheckers = DP.array(DP.number(), {
 * 	checkers: [DP.checkerArrayMin(1), DP.checkerArrayMax(3)],
 * });
 * 
 * const nested = DP.array(DP.array(DP.boolean()));
 * const nestedResult = nested.parse([[true, false]]);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
 * 
 * @namespace DP
 * 
 */
export declare function array<GenericElement extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionArray<Output<GenericElement>[]>, "element">> = never>(element: GenericElement, definition?: GenericDefinition): DataParserArray<MergeDefinition<DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
    readonly element: GenericElement;
}>>;
export declare namespace array {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserArray<DataParserDefinitionArray<unknown[]>>>;
}

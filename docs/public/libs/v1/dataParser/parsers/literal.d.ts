import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type DataParserChecker, type DataParserCheckerDefinition } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
export type LiteralValue = string | number | bigint | undefined | null | boolean;
export type DataParserLiteralCheckers<GenericInput extends LiteralValue = LiteralValue> = DataParserChecker<DataParserCheckerDefinition, GenericInput>;
export interface DataParserDefinitionLiteral<GenericInput extends LiteralValue = LiteralValue> extends DataParserDefinition<DataParserLiteralCheckers<GenericInput>> {
    readonly value: readonly LiteralValue[];
}
export declare const literalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/literal", unknown>>;
type _DataParserLiteral<GenericDefinition extends DataParserDefinitionLiteral> = (DataParserBase<GenericDefinition, GenericDefinition["value"][number], GenericDefinition["value"][number]> & Kind<typeof literalKind.definition>);
export interface DataParserLiteral<GenericDefinition extends DataParserDefinitionLiteral = DataParserDefinitionLiteral> extends _DataParserLiteral<GenericDefinition> {
    addChecker<const GenericChecker extends readonly [
        DataParserLiteralCheckers<Output<this>>,
        ...DataParserLiteralCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserLiteralCheckers<Output<this>>,
        ...DataParserLiteralCheckers<Output<this>>[]
    ], GenericChecker>): DataParserLiteral<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for a literal value.
 * 
 * **Supported call styles:**
 * - Classic: `DP.literal(value)` -> returns a literal parser
 * - Curried: not available
 * 
 * Accepts only the provided literal value and rejects any other input.
 * 
 * ```ts
 * const parser = DP.literal("status");
 * const result = parser.parse("status");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: "status"
 * }
 * 
 * const numberLiteral = DP.literal(42);
 * const numberResult = numberLiteral.parse(42);
 * 
 * const boolLiteral = DP.literal(true);
 * const boolResult = boolLiteral.parse(true);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/literal
 * 
 * @namespace DP
 * 
 */
export declare function literal<const GenericValue extends LiteralValue, const GenericDefinition extends Partial<Omit<DataParserDefinitionLiteral<GenericValue>, "value">> = never>(value: GenericValue | readonly GenericValue[], definition?: GenericDefinition): DataParserLiteral<MergeDefinition<DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
    readonly value: readonly GenericValue[];
}>>;
export declare namespace literal {
    var overrideHandler: import("../../common").OverrideHandler<DataParserLiteral<DataParserDefinitionLiteral<LiteralValue>>>;
}
export {};

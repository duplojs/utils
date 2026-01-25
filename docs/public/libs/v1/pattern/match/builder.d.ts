import { type Builder, type FixDeepFunctionInfer, type IsEqual } from "../../common";
import { type ComplexMatchedValue, type ComplexUnMatchedValue, type Pattern, type PatternValue } from "../types";
export interface BuilderMatcher {
    isMatch(value: unknown): boolean;
    theFunction(value: unknown): unknown;
}
export interface MatchBuilderDefinition {
    input: unknown;
    matchers: BuilderMatcher[];
}
declare const SymbolErrorMatchExhaustive: unique symbol;
export interface MatchBuilder<GenericValue extends unknown = never, GenericResult extends unknown = never> extends Builder<MatchBuilderDefinition> {
    with<const GenericPattern extends Pattern<GenericValue>, GenericOutput extends unknown>(pattern: FixDeepFunctionInfer<Pattern<GenericValue>, GenericPattern>, theFunction: (value: ComplexMatchedValue<GenericValue, PatternValue<GenericPattern>>) => GenericOutput): MatchBuilder<ComplexUnMatchedValue<GenericValue, PatternValue<GenericPattern>>, GenericOutput | GenericResult>;
    when<GenericPredicatedInput extends GenericValue, GenericOutput extends unknown>(predicate: (input: GenericValue) => input is GenericPredicatedInput, theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput): MatchBuilder<Exclude<GenericValue, GenericPredicatedInput>, GenericOutput | GenericResult>;
    when<GenericOutput extends unknown>(predicate: (input: GenericValue) => boolean, theFunction: (predicatedInput: GenericValue) => GenericOutput): MatchBuilder<GenericValue, GenericOutput | GenericResult>;
    exhaustive: IsEqual<GenericValue, never> extends true ? () => GenericResult : {
        [SymbolErrorMatchExhaustive]: "Pattern are not exhaustive.";
        restValue: GenericValue;
    };
    otherwise<GenericOtherwiseResult extends unknown>(theFunction: (value: GenericValue) => GenericOtherwiseResult): GenericResult | GenericOtherwiseResult;
}
declare const InvalidExhaustivePatternError_base: new (params: {
    "@DuplojsUtilsError/invalid-exhaustive-pattern-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../../common").Kind<import("../../common").KindDefinition<"invalid-exhaustive-pattern-error", unknown>, unknown> & import("../../common").Kind<import("../../common").KindDefinition<"@DuplojsUtilsError/invalid-exhaustive-pattern-error", unknown>, unknown>;
export declare class InvalidExhaustivePatternError extends InvalidExhaustivePatternError_base {
    input: unknown;
    constructor(input: unknown);
}
export declare const matchBuilder: import("../../common").BuilderHandler<MatchBuilder<unknown, unknown> & Pick<MatchBuilder<never, unknown>, "exhaustive">>;
export {};

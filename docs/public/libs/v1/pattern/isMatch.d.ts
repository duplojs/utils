import { type ForcePredicate, type AnyValue, type FixDeepFunctionInfer } from "../common";
import { type Pattern, type PatternValue } from "./types/pattern";
import { type ComplexMatchedValue } from "./types";
export declare function isMatch<GenericInput extends AnyValue, const GenericPattern extends Pattern<GenericInput>>(pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>): (input: GenericInput) => input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;
export declare function isMatch<GenericInput extends AnyValue, const GenericPattern extends Pattern<GenericInput>>(input: GenericInput, pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>): input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;

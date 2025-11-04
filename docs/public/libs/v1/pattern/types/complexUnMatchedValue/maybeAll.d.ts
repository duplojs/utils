import { type Unwrap, type IsEqual } from "../../../common";
import { type PatternValueMaybeAll } from "../pattern";
export type ComplexUnMatchedMaybeAll<GenericInput extends unknown, GenericPatternValue extends unknown> = Extract<GenericPatternValue, PatternValueMaybeAll> extends infer InferredPatternValue ? IsEqual<InferredPatternValue, never> extends true ? never : Extract<Unwrap<InferredPatternValue>, GenericInput> : never;

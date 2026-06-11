import { type IsEqual, type NeverCoalescing } from "../../../../common";
export type ResolveConstraintCast<GenericComputedConstraintCast extends unknown, GenericFallbackError> = NeverCoalescing<{
    [Prop in keyof GenericComputedConstraintCast]: true extends GenericComputedConstraintCast[Prop] ? unknown : GenericComputedConstraintCast[Prop];
}[keyof GenericComputedConstraintCast] extends infer InferredResult ? IsEqual<InferredResult, unknown> extends true ? true : InferredResult : never, GenericFallbackError>;

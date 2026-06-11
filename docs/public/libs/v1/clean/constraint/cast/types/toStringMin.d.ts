import { type IsLess } from "../../../../number";
import { type ConstrainedType } from "../../base";
import { type StringMinHandlerInternal } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "../../../../common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";
export interface ComputedErrorStringMinConstraintCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends StringMinHandlerInternal> {
    stringMin: GenericConstrainHandler extends StringMinHandlerInternal<infer InferredConstraintValue> ? ConstraintNumberValue<GenericConstrainedType, "string-min"> extends infer InferredReferenceValue extends number ? InferredReferenceValue extends any ? And<[
        IsLess<InferredConstraintValue, InferredReferenceValue>,
        Not<IsEqual<InferredReferenceValue, number>>
    ]> extends true ? true : CastConstraintError<GenericConstrainHandler, `length constraint ${InferredConstraintValue} is greater than ${InferredReferenceValue}`> : never : never : never;
}
export type ForbiddenBadStringMinCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends StringMinHandlerInternal> = ComputedErrorStringMinConstraintCast<GenericConstrainedType, GenericConstrainHandler> extends infer InferredResult ? ResolveConstraintCast<InferredResult, CastConstraintError<GenericConstrainHandler, "no casting possible with string-min">> : never;

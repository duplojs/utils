import { type IsLess } from "../../../../number";
import { type ConstrainedType } from "../../base";
import { type StrictPositive } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "../../../../common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";
export interface ComputedErrorStrictPositiveConstraintCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends typeof StrictPositive> {
    numberMin: ConstraintNumberValue<GenericConstrainedType, "number-min"> extends infer InferredReferenceValue extends number ? InferredReferenceValue extends any ? And<[
        IsLess<0, InferredReferenceValue>,
        Not<IsEqual<InferredReferenceValue, 0>>,
        Not<IsEqual<InferredReferenceValue, number>>
    ]> extends true ? true : CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is strictly less than zero`> : never : never;
}
export type ForbiddenBadStrictPositiveCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends typeof StrictPositive> = ComputedErrorStrictPositiveConstraintCast<GenericConstrainedType, GenericConstrainHandler> extends infer InferredResult ? ResolveConstraintCast<InferredResult, CastConstraintError<GenericConstrainHandler, "no casting possible with StrictPositive">> : never;

import { type IsLess } from "../../../../number";
import { type ConstrainedType } from "../../base";
import { type Positive, type StrictPositive } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "../../../../common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";
export interface ComputedErrorPositiveConstraintCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends typeof Positive> {
    strictPositive: GenericConstrainedType extends StrictPositive ? true : never;
    numberMin: ConstraintNumberValue<GenericConstrainedType, "number-min"> extends infer InferredReferenceValue extends number ? InferredReferenceValue extends any ? And<[
        IsLess<0, InferredReferenceValue>,
        Not<IsEqual<InferredReferenceValue, number>>
    ]> extends true ? true : CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is less than zero`> : never : never;
}
export type ForbiddenBadPositiveCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends typeof Positive> = ComputedErrorPositiveConstraintCast<GenericConstrainedType, GenericConstrainHandler> extends infer InferredResult ? ResolveConstraintCast<InferredResult, CastConstraintError<GenericConstrainHandler, "no casting possible with Positive">> : never;

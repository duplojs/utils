import { type IsGreater } from "../../../../number";
import { type ConstrainedType } from "../../base";
import { type Negative, type NumberMaxHandlerInternal, type StrictNegative } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "../../../../common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";
export interface ComputedErrorNumberMaxConstraintCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends NumberMaxHandlerInternal> {
    negative: GenericConstrainHandler extends NumberMaxHandlerInternal<infer InferredConstraintValue> ? GenericConstrainedType extends Negative ? IsGreater<InferredConstraintValue, 0> extends true ? true : CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is less than zero`> : never : never;
    strictNegative: GenericConstrainHandler extends NumberMaxHandlerInternal<infer InferredConstraintValue> ? GenericConstrainedType extends StrictNegative ? And<[
        IsGreater<InferredConstraintValue, 0>
    ]> extends true ? true : CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is strictly less than zero`> : never : never;
    numberMax: GenericConstrainHandler extends NumberMaxHandlerInternal<infer InferredConstraintValue> ? ConstraintNumberValue<GenericConstrainedType, "number-max"> extends infer InferredReferenceValue extends number ? InferredReferenceValue extends any ? And<[
        IsGreater<InferredConstraintValue, InferredReferenceValue>,
        Not<IsEqual<InferredReferenceValue, number>>
    ]> extends true ? true : CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is less than ${InferredReferenceValue}`> : never : never : never;
}
export type ForbiddenBadNumberMaxCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends NumberMaxHandlerInternal> = ComputedErrorNumberMaxConstraintCast<GenericConstrainedType, GenericConstrainHandler> extends infer InferredResult ? ResolveConstraintCast<InferredResult, CastConstraintError<GenericConstrainHandler, "no casting possible with number-max">> : never;

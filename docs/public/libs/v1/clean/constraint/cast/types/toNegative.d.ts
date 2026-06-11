import { type IsGreater } from "../../../../number";
import { type ConstrainedType } from "../../base";
import { type Negative, type StrictNegative } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "../../../../common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";
export interface ComputedErrorNegativeConstraintCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends typeof Negative> {
    strictNegative: GenericConstrainedType extends StrictNegative ? true : never;
    numberMax: ConstraintNumberValue<GenericConstrainedType, "number-max"> extends infer InferredReferenceValue extends number ? InferredReferenceValue extends any ? And<[
        IsGreater<0, InferredReferenceValue>,
        Not<IsEqual<InferredReferenceValue, number>>
    ]> extends true ? true : CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is greater than zero`> : never : never;
}
export type ForbiddenBadNegativeCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends typeof Negative> = ComputedErrorNegativeConstraintCast<GenericConstrainedType, GenericConstrainHandler> extends infer InferredResult ? ResolveConstraintCast<InferredResult, CastConstraintError<GenericConstrainHandler, "no casting possible with negative">> : never;

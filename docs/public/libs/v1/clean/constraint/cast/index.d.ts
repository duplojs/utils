import { type UnionToIntersection, type IsEqual, type SimplifyComputedTypeError } from "../../../common";
import { type ConstraintHandler, type ConstrainedType, type GetConstraint } from "../base";
import { type StrictNegative, type StrictPositive, type NumberMaxHandlerInternal, type NumberMinHandlerInternal, type Positive, type StringMaxHandlerInternal, type StringMinHandlerInternal, type Negative } from "../defaultConstraint";
import { type ForbiddenBadNegativeCast, type CastConstraintError, type ForbiddenBadNumberMaxCast, type ForbiddenBadNumberMinCast, type ForbiddenBadPositiveCast, type ForbiddenBadStrictNegativeCast, type ForbiddenBadStrictPositiveCast, type ForbiddenBadStringMaxCast, type ForbiddenBadStringMinCast } from "./types";
export interface ComputedErrorConstraintCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends ConstraintHandler> {
    toNumberMin: (GenericConstrainHandler extends NumberMinHandlerInternal ? ForbiddenBadNumberMinCast<GenericConstrainedType, GenericConstrainHandler> : never);
    toNumberMax: (GenericConstrainHandler extends NumberMaxHandlerInternal ? ForbiddenBadNumberMaxCast<GenericConstrainedType, GenericConstrainHandler> : never);
    toStringMin: (GenericConstrainHandler extends StringMinHandlerInternal ? ForbiddenBadStringMinCast<GenericConstrainedType, GenericConstrainHandler> : never);
    toStringMax: (GenericConstrainHandler extends StringMaxHandlerInternal ? ForbiddenBadStringMaxCast<GenericConstrainedType, GenericConstrainHandler> : never);
    toPositive: (GenericConstrainHandler extends typeof Positive ? ForbiddenBadPositiveCast<GenericConstrainedType, GenericConstrainHandler> : never);
    toStrictPositive: (GenericConstrainHandler extends typeof StrictPositive ? ForbiddenBadStrictPositiveCast<GenericConstrainedType, GenericConstrainHandler> : never);
    toNegative: (GenericConstrainHandler extends typeof Negative ? ForbiddenBadNegativeCast<GenericConstrainedType, GenericConstrainHandler> : never);
    toStrictNegative: (GenericConstrainHandler extends typeof StrictNegative ? ForbiddenBadStrictNegativeCast<GenericConstrainedType, GenericConstrainHandler> : never);
}
export type ForbiddenBadCast<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends ConstraintHandler> = GenericConstrainHandler extends any ? ComputedErrorConstraintCast<GenericConstrainedType, GenericConstrainHandler> extends infer InferredResult ? IsEqual<InferredResult[keyof InferredResult], never> extends true ? CastConstraintError<GenericConstrainHandler, "no casting possible"> : {
    [Prop in keyof InferredResult]: true extends InferredResult[Prop] ? unknown : InferredResult[Prop];
}[keyof InferredResult] : never : never;
export declare function castConstraint<GenericConstrainedType extends ConstrainedType, GenericConstrainHandler extends ConstraintHandler, GenericForbiddenBadCast extends SimplifyComputedTypeError<ForbiddenBadCast<GenericConstrainedType, GenericConstrainHandler>>>(constrainedType: (GenericConstrainedType & NoInfer<GenericForbiddenBadCast>), constraintHandler: GenericConstrainHandler | GenericConstrainHandler[]): (GenericConstrainedType & UnionToIntersection<GenericConstrainHandler extends ConstraintHandler ? GetConstraint<GenericConstrainHandler> : never>);

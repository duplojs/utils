import { type IsLess } from "@scripts/number";
import { type ConstrainedType } from "../../base";
import { type StrictPositive, type NumberMinHandlerInternal, type Positive } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "@scripts/common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";

export interface ComputedErrorNumberMinConstraintCast<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends NumberMinHandlerInternal,
> {
	positive: GenericConstrainHandler extends NumberMinHandlerInternal<infer InferredConstraintValue>
		? GenericConstrainedType extends Positive
			? IsLess<InferredConstraintValue, 0> extends true
				? true
				: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is greater than zero`>
			: never
		: never;
	strictPositive: GenericConstrainHandler extends NumberMinHandlerInternal<infer InferredConstraintValue>
		? GenericConstrainedType extends StrictPositive
			? And<[
				IsLess<InferredConstraintValue, 0>,
			]> extends true
				? true
				: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is strictly greater than zero`>
			: never
		: never;
	numberMin: GenericConstrainHandler extends NumberMinHandlerInternal<infer InferredConstraintValue>
		? ConstraintNumberValue<GenericConstrainedType, "number-min"> extends infer InferredReferenceValue extends number
			? InferredReferenceValue extends any
				? And<[
					IsLess<InferredConstraintValue, InferredReferenceValue>,
					Not<IsEqual<InferredReferenceValue, number>>,
				]> extends true
					? true
					: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is greater than ${InferredReferenceValue}`>
				: never
			: never
		: never;
}

export type ForbiddenBadNumberMinCast<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends NumberMinHandlerInternal,
> = ComputedErrorNumberMinConstraintCast<
	GenericConstrainedType,
	GenericConstrainHandler
> extends infer InferredResult
	? ResolveConstraintCast<
		InferredResult,
		CastConstraintError<GenericConstrainHandler, "no casting possible with number-min">
	>
	: never;

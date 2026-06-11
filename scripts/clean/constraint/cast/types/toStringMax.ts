import { type IsGreater } from "@scripts/number";
import { type ConstrainedType } from "../../base";
import { type StringMaxHandlerInternal } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "@scripts/common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";

export interface ComputedErrorStringMaxConstraintCast<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends StringMaxHandlerInternal,
> {
	stringMax: GenericConstrainHandler extends StringMaxHandlerInternal<infer InferredConstraintValue>
		? ConstraintNumberValue<GenericConstrainedType, "string-max"> extends infer InferredReferenceValue extends number
			? InferredReferenceValue extends any
				? And<[
					IsGreater<InferredConstraintValue, InferredReferenceValue>,
					Not<IsEqual<InferredReferenceValue, number>>,
				]> extends true
					? true
					: CastConstraintError<GenericConstrainHandler, `length constraint ${InferredConstraintValue} is less than ${InferredReferenceValue}`>
				: never
			: never
		: never;
}

export type ForbiddenBadStringMaxCast<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends StringMaxHandlerInternal,
> = ComputedErrorStringMaxConstraintCast<
	GenericConstrainedType,
	GenericConstrainHandler
> extends infer InferredResult
	? ResolveConstraintCast<
		InferredResult,
		CastConstraintError<GenericConstrainHandler, "no casting possible with string-max">
	>
	: never;

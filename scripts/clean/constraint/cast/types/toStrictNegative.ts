import { type IsGreater } from "@scripts/number";
import { type ConstrainedType } from "../../base";
import { type StrictNegative } from "../../defaultConstraint";
import { type CastConstraintError } from "./castConstraintError";
import { type And, type IsEqual, type Not } from "@scripts/common";
import { type ResolveConstraintCast } from "./resolveConstraintCast";
import { type ConstraintNumberValue } from "./constraintValue";

export interface ComputedErrorStrictNegativeConstraintCast<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends typeof StrictNegative,
> {
	numberMax: ConstraintNumberValue<GenericConstrainedType, "number-max"> extends infer InferredReferenceValue extends number
		? InferredReferenceValue extends any
			? And<[
				IsGreater<0, InferredReferenceValue>,
				Not<IsEqual<InferredReferenceValue, 0>>,
				Not<IsEqual<InferredReferenceValue, number>>,
			]> extends true
				? true
				: CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is strictly greater than zero`>
			: never
		: never;
}

export type ForbiddenBadStrictNegativeCast<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends typeof StrictNegative,
> = ComputedErrorStrictNegativeConstraintCast<
	GenericConstrainedType,
	GenericConstrainHandler
> extends infer InferredResult
	? ResolveConstraintCast<
		InferredResult,
		CastConstraintError<GenericConstrainHandler, "no casting possible with strict negative">
	>
	: never;

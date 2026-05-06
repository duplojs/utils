/* eslint-disable @typescript-eslint/prefer-for-of */
import { type UnionToIntersection, type NeverCoalescing, type And, type Not, type IsEqual, type ComputedTypeError } from "@scripts/common";
import { type ConstraintHandler, type ConstrainedType, type GetConstraint, constrainedTypeKind } from "./base";
import { type StrictNegative, type StrictPositive, type Negative, type NumberMaxHandlerInternal, type NumberMaxInternal, type NumberMinHandlerInternal, type NumberMinInternal, type Positive, type StringMaxHandlerInternal, type StringMaxInternal, type StringMinHandlerInternal, type StringMinInternal } from "./defaultConstraint";
import { type IsLess, type IsGreater } from "@scripts/number";
import * as DArray from "@scripts/array";

type CastConstraintError<
	GenericConstrainHandler extends ConstraintHandler,
	GenericReason extends string,
> = ComputedTypeError<`The constraint "${GenericConstrainHandler["name"]}" is not applicable: ${GenericReason}.`>;

type ForbiddenBadCast<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends ConstraintHandler,
> = (
	| (
		GenericConstrainHandler extends NumberMinHandlerInternal<infer InferredConstraintValue extends number>
			? GenericConstrainedType extends Positive
				? IsLess<InferredConstraintValue, 0> extends true
					? never
					: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is greater than zero`>
				: GenericConstrainedType extends StrictPositive
					? And<[
						IsLess<InferredConstraintValue, 0>,
						Not<IsEqual<InferredConstraintValue, 0>>,
					]> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is strictly greater than zero`>
					: GenericConstrainedType extends NumberMinInternal<infer InferredReferenceValue extends number>
						? And<[
							IsLess<InferredConstraintValue, InferredReferenceValue>,
							Not<IsEqual<InferredReferenceValue, number>>,
						]> extends true
							? never
							: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is greater than ${InferredReferenceValue}`>
						: CastConstraintError<GenericConstrainHandler, "no casting possible with number-min">
			: never
		)
		| (
			GenericConstrainHandler extends NumberMaxHandlerInternal<infer InferredConstraintValue extends number>
				? GenericConstrainedType extends Negative
					? IsGreater<InferredConstraintValue, 0> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is less than zero`>
					: GenericConstrainedType extends StrictNegative
						? And<[
							IsGreater<InferredConstraintValue, 0>,
							Not<IsEqual<InferredConstraintValue, 0>>,
						]> extends true
							? never
							: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is strictly less than zero`>

						: GenericConstrainedType extends NumberMaxInternal<infer InferredReferenceValue extends number>
							? And<[
								IsGreater<InferredConstraintValue, InferredReferenceValue>,
								Not<IsEqual<InferredReferenceValue, number>>,
							]> extends true
								? never
								: CastConstraintError<GenericConstrainHandler, `constraint ${InferredConstraintValue} is less than ${InferredReferenceValue}`>
							: CastConstraintError<GenericConstrainHandler, "no casting possible with number-max">
				: never
		)
		| (
			GenericConstrainHandler extends StringMinHandlerInternal<infer InferredConstraintValue extends number>
				? GenericConstrainedType extends StringMinInternal<infer InferredReferenceValue extends number>
					? And<[
						IsLess<InferredConstraintValue, InferredReferenceValue>,
						Not<IsEqual<InferredReferenceValue, number>>,
					]> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `length constraint ${InferredConstraintValue} is greater than ${InferredReferenceValue}`>
					: CastConstraintError<GenericConstrainHandler, "no casting possible with string-min">
				: never
		)
		| (
			GenericConstrainHandler extends StringMaxHandlerInternal<infer InferredConstraintValue extends number>
				? GenericConstrainedType extends StringMaxInternal<infer InferredReferenceValue extends number>
					? And<[
						IsGreater<InferredConstraintValue, InferredReferenceValue>,
						Not<IsEqual<InferredReferenceValue, number>>,
					]> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `length constraint ${InferredConstraintValue} is less than ${InferredReferenceValue}`>
					: CastConstraintError<GenericConstrainHandler, "no casting possible with string-max">
				: never
		)
		| (
			GenericConstrainHandler extends typeof Positive
				? GenericConstrainedType extends NumberMinInternal<infer InferredReferenceValue extends number>
					? And<[
						IsLess<0, InferredReferenceValue>,
						Not<IsEqual<InferredReferenceValue, number>>,
					]> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is less than zero`>
					: CastConstraintError<GenericConstrainHandler, "no casting possible with Positive">
				: never
		)
		| (
			GenericConstrainHandler extends typeof Negative
				? GenericConstrainedType extends NumberMaxInternal<infer InferredReferenceValue extends number>
					? And<[
						IsGreater<0, InferredReferenceValue>,
						Not<IsEqual<InferredReferenceValue, number>>,
					]> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is greater than zero`>
					: CastConstraintError<GenericConstrainHandler, "no casting possible with negative">
				: never
		)
		| (
			GenericConstrainHandler extends typeof StrictPositive
				? GenericConstrainedType extends NumberMinInternal<infer InferredReferenceValue extends number>
					? And<[
						IsLess<0, InferredReferenceValue>,
						Not<IsEqual<InferredReferenceValue, 0>>,
						Not<IsEqual<InferredReferenceValue, number>>,
					]> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is strictly less than zero`>
					: CastConstraintError<GenericConstrainHandler, "no casting possible with StrictPositive">
				: never
		)
		| (
			GenericConstrainHandler extends typeof StrictNegative
				? GenericConstrainedType extends NumberMaxInternal<infer InferredReferenceValue extends number>
					? And<[
						IsGreater<0, InferredReferenceValue>,
						Not<IsEqual<InferredReferenceValue, 0>>,
						Not<IsEqual<InferredReferenceValue, number>>,
					]> extends true
						? never
						: CastConstraintError<GenericConstrainHandler, `constraint ${InferredReferenceValue} is strictly greater than zero`>
					: CastConstraintError<GenericConstrainHandler, "no casting possible with negative">
				: never
		)
		| (
			GenericConstrainHandler extends (
				| typeof Negative
				| typeof Positive
				| typeof StrictNegative
				| typeof StrictPositive
				| StringMaxHandlerInternal
				| StringMinHandlerInternal
				| NumberMaxHandlerInternal
				| NumberMinHandlerInternal
			)
				? never
				: CastConstraintError<GenericConstrainHandler, "no casting possible">
		)
) extends infer InferredResult
	? NeverCoalescing<InferredResult, unknown>
	: never;

export function castConstraint<
	GenericConstrainedType extends ConstrainedType,
	GenericConstrainHandler extends ConstraintHandler,
>(
	constrainedType: (
		& GenericConstrainedType
		& ForbiddenBadCast<
			GenericConstrainedType,
			GenericConstrainHandler
		>
	),
	constraintHandler: GenericConstrainHandler | GenericConstrainHandler[],
): (
	& GenericConstrainedType
	& UnionToIntersection<
		GenericConstrainHandler extends ConstraintHandler
			? GetConstraint<GenericConstrainHandler>
			: never
	>
	) {
	const preparedConstraintHandler = DArray.coalescing(constraintHandler);

	const newConstraints = {
		...constrainedTypeKind.getValue(constrainedType),
	};

	for (let index = 0; index < preparedConstraintHandler.length; index++) {
		const constraintHandler = preparedConstraintHandler[index]!;

		(newConstraints[constraintHandler.name] as any) = null;
	}

	return constrainedTypeKind.addTo(
		constrainedType,
		newConstraints,
	) as never;
}

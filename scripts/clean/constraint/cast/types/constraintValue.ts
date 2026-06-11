import { type GetKindValue } from "@scripts/common";
import type { constrainedTypeKind, ConstrainedType } from "../../base";

type ConstraintName<
	GenericConstrainedType extends ConstrainedType,
> = keyof GetKindValue<typeof constrainedTypeKind, GenericConstrainedType>;

export type ConstraintNumberValue<
	GenericConstrainedType extends ConstrainedType,
	GenericPrefix extends string,
> =
// we need this fix otherwise we have bug with extends infer
Extract<
	ConstraintName<GenericConstrainedType>,
	`${GenericPrefix}-${number}`
> extends `${GenericPrefix}-${infer InferredValue extends number}`
	? InferredValue
	: ConstraintName<GenericConstrainedType>;

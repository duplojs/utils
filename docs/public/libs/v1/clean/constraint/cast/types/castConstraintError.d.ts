import { type ComputedTypeError } from "../../../../common";
import { type ConstraintHandler } from "../../base";
export type CastConstraintError<GenericConstrainHandler extends ConstraintHandler, GenericReason extends string> = ComputedTypeError<`The constraint "${GenericConstrainHandler["name"]}" is not applicable: ${GenericReason}.`>;

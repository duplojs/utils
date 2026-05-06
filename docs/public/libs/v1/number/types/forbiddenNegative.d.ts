import { type ComputedTypeError } from "../../common";
import { type IsPositive } from "./isPositive";
export type ForbiddenNegative<GenericNumber extends number> = IsPositive<GenericNumber> extends true ? GenericNumber : ComputedTypeError<"Only positive number is allowed.">;

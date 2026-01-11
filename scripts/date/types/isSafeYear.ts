import { type And } from "@scripts/common";
import type * as DNumber from "@scripts/number";

/**
 * {@include date/isSafeYear/index.md}
 */
export type IsSafeYear<
	GenericYears extends number,
> = And<[
	DNumber.IsGreater<GenericYears, -271820>,
	DNumber.IsLess<GenericYears, 275759>,
]>;

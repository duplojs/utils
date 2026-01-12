import { type And } from "../../common";
import type * as DNumber from "../../number";
/**
 * Type-level check for years within the supported safe range.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isSafeYear
 * 
 * @namespace D
 * 
 */
export type IsSafeYear<GenericYears extends number> = And<[
    DNumber.IsGreater<GenericYears, -271820>,
    DNumber.IsLess<GenericYears, 275759>
]>;

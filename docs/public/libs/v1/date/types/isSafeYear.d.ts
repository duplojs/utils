import { type And } from "../../common";
import type * as DNumber from "../../number";
export type IsSafeYear<GenericYears extends number> = And<[
    DNumber.IsGreater<GenericYears, -271820>,
    DNumber.IsLess<GenericYears, 275759>
]>;

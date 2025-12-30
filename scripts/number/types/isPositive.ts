import { type Not } from "@scripts/common";
import type * as DString from "@scripts/string";

export type IsPositive<
	GenericValue extends number,
> = Not<DString.Includes<`${GenericValue}`, "-">>;


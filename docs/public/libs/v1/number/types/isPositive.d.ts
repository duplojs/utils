import { type Not } from "../../common";
import type * as DString from "../../string";
export type IsPositive<GenericValue extends number> = Not<DString.Includes<`${GenericValue}`, "-">>;

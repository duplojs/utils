import { type ComputedTypeError, type IsEqual } from "../../common";
export type ForbiddenString<GenericValue extends string, GenericCharacters extends string> = IsEqual<(GenericCharacters extends string ? IsEqual<GenericValue, GenericCharacters> : never) | false, boolean> extends true ? ComputedTypeError<`String "${GenericCharacters}" is forbidden in value.`> : GenericValue;

import { type IsEqual } from "./isEqual";
export type IsStringLiteral<GenericString extends string> = IsEqual<GenericString, string> extends true ? false : true;

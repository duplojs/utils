import { type IsEqual } from "./isEqual";
export type Or<GenericBooleans extends [boolean, ...boolean[]]> = IsEqual<GenericBooleans[number] | false, boolean>;

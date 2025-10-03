import { type IsEqual } from "./isEqual";

export type And<
	GenericBooleans extends [boolean, ...boolean[]],
> = IsEqual<GenericBooleans[number], true>;

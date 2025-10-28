import { type IsEqual } from "@scripts/common";
import { type Includes } from "@scripts/string";

export type ForbiddenCharacters<
	GenericValue extends string,
	GenericCharacters extends string,
> = IsEqual<
	| (
		GenericCharacters extends string
			? Includes<GenericValue, GenericCharacters>
			: never
	)
	| false,
	boolean
> extends true
	? { error: `Characters "${GenericCharacters}" is forbidden.` }
	: GenericValue;

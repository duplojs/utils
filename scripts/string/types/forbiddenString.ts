import { type IsEqual } from "@scripts/common";
import { type Includes } from "@scripts/string";

const SymbolErrorForbiddenString = Symbol.for("@duplojs/utils/kind");
type SymbolErrorForbiddenString = typeof SymbolErrorForbiddenString;

export type ForbiddenString<
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
	? { [SymbolErrorForbiddenString]: `String "${GenericCharacters}" is forbidden in value.` }
	: GenericValue;

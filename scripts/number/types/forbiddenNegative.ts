import { type IsPositive } from "./isPositive";

declare const SymbolForbiddenNumber: unique symbol;

export type ForbiddenNegative<
	GenericNumber extends number,
> = IsPositive<GenericNumber> extends true
	? GenericNumber
	: { [SymbolForbiddenNumber]: "Only positive number is allowed." };

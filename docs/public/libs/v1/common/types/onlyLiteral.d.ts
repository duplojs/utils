declare const SymbolErrorOnlyLiteral: unique symbol;
export type OnlyLiteralString<GenericValue extends unknown> = string extends GenericValue ? {
    [SymbolErrorOnlyLiteral]: "Input must be a literal string.";
} : GenericValue;
export type OnlyLiteralNumber<GenericValue extends unknown> = number extends GenericValue ? {
    [SymbolErrorOnlyLiteral]: "Input must be a literal number.";
} : GenericValue;
export type OnlyLiteralSymbol<GenericValue extends unknown> = symbol extends GenericValue ? {
    [SymbolErrorOnlyLiteral]: "Input must be a literal symbol.";
} : GenericValue;
export type OnlyLiteralBigInt<GenericValue extends unknown> = bigint extends GenericValue ? {
    [SymbolErrorOnlyLiteral]: "Input must be a literal bigint.";
} : GenericValue;
export type OnlyLiteralBoolean<GenericValue extends unknown> = boolean extends GenericValue ? {
    [SymbolErrorOnlyLiteral]: "Input must be a literal boolean.";
} : GenericValue;
export type OnlyLiteral<GenericValue extends unknown> = (OnlyLiteralString<GenericValue> & OnlyLiteralNumber<GenericValue> & OnlyLiteralSymbol<GenericValue> & OnlyLiteralBigInt<GenericValue> & OnlyLiteralBoolean<GenericValue>);
export {};

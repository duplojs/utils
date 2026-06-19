import { type Unwrap, type ComputedTypeError } from "../../common";
import { type Primitive } from "../primitive";
export type OnlyLiteralPrimitiveString<GenericValue extends Primitive> = string extends Unwrap<GenericValue> ? ComputedTypeError<"Input primitive must be a literal string."> : GenericValue;
export type OnlyLiteralPrimitiveNumber<GenericValue extends Primitive> = number extends Unwrap<GenericValue> ? ComputedTypeError<"Input primitive must be a literal number."> : GenericValue;
export type OnlyLiteralPrimitiveBigInt<GenericValue extends Primitive> = bigint extends Unwrap<GenericValue> ? ComputedTypeError<"Input primitive must be a literal bigint."> : GenericValue;
export type OnlyLiteralPrimitiveBoolean<GenericValue extends Primitive> = boolean extends Unwrap<GenericValue> ? ComputedTypeError<"Input primitive must be a literal boolean."> : GenericValue;
export type OnlyLiteral<GenericValue extends Primitive> = (OnlyLiteralPrimitiveString<GenericValue> & OnlyLiteralPrimitiveNumber<GenericValue> & OnlyLiteralPrimitiveBigInt<GenericValue> & OnlyLiteralPrimitiveBoolean<GenericValue>);

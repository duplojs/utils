import { type EitherNullishEmpty, type NullishValue } from "./empty";
import { type EitherNullishFilled } from "./filled";
export declare function nullish<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends NullishValue ? EitherNullishEmpty<GenericValue> : EitherNullishFilled<GenericValue>;
export type Nullish<GenericValue extends unknown> = EitherNullishFilled<GenericValue> | EitherNullishEmpty;

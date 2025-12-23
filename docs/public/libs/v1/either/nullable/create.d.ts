import { type EitherNullableEmpty } from "./empty";
import { type EitherNullableFilled } from "./filled";
export declare function nullable<const GenericValue extends unknown = null>(value: GenericValue): GenericValue extends null ? EitherNullableEmpty : EitherNullableFilled<GenericValue>;
export type Nullable<GenericValue extends unknown> = EitherNullableFilled<GenericValue> | EitherNullableEmpty;

import { type EitherOptionalEmpty } from "./empty";
import { type EitherOptionalFilled } from "./filled";
export declare function optional<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends undefined ? EitherOptionalEmpty : EitherOptionalFilled<GenericValue>;
export type Optional<GenericValue extends unknown> = EitherOptionalFilled<GenericValue> | EitherOptionalEmpty;

import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { eitherOptionalKind } from "./base";
import { optional } from "./create";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
export declare const eitherOptionalFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/optional-filled", unknown>>;
type _EitherOptionalFilled<GenericValue extends unknown = unknown> = (EitherRight<"optional", GenericValue> & Kind<typeof eitherOptionalKind.definition> & Kind<typeof eitherOptionalFilledKind.definition>);
export interface EitherOptionalFilled<GenericValue extends unknown = unknown> extends _EitherOptionalFilled<GenericValue> {
}
type Either = EitherRight | EitherLeft;
export declare function optionalFilled<const GenericValue extends unknown>(value: GenericValue): EitherOptionalFilled<GenericValue>;
export declare function isOptionalFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherOptionalFilled>;
type ToOptionalEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof optional<GenericValue>>;
export declare function whenIsOptionalFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<GenericInput>, EitherOptionalFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalFilled>;
export declare function whenIsOptionalFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<GenericInput>, EitherOptionalFilled>>) => GenericOutput): GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export {};

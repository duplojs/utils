import { type EitherRight } from "../right";
import { type EitherLeft } from "../left";
import { nullish } from "./create";
import { type Kind } from "../../common/kind";
import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { eitherNullishKind } from "./base";
export declare const eitherNullishFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-filled", unknown>>;
type _EitherNullishFilled<GenericValue extends unknown = unknown> = (EitherRight<"nullish", GenericValue> & Kind<typeof eitherNullishKind.definition> & Kind<typeof eitherNullishFilledKind.definition>);
export interface EitherNullishFilled<GenericValue extends unknown = unknown> extends _EitherNullishFilled<GenericValue> {
}
export declare function nullishFilled<const GenericValue extends unknown>(value: GenericValue): EitherNullishFilled<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isNullishFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherNullishFilled>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullish<GenericValue>>;
export declare function whenIsNullishFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullishFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullishFilled>;
export declare function whenIsNullishFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullishFilled>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
export {};

import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { nullable } from "./create";
import { eitherNullableKind } from "./base";
export declare const eitherNullableFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullable-filled", unknown>>;
type _EitherNullableFilled<GenericValue extends unknown = unknown> = (EitherRight<"nullable", GenericValue> & Kind<typeof eitherNullableKind.definition> & Kind<typeof eitherNullableFilledKind.definition>);
export interface EitherNullableFilled<GenericValue extends unknown = unknown> extends _EitherNullableFilled<GenericValue> {
}
type Either = EitherRight | EitherLeft;
export declare function nullableFilled<const GenericValue extends unknown>(value: GenericValue): EitherNullableFilled<GenericValue>;
export declare function isNullableFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherNullableFilled>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullable<GenericValue>>;
export declare function whenIsNullableFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<GenericInput>, EitherNullableFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullableFilled>;
export declare function whenIsNullableFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<GenericInput>, EitherNullableFilled>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export {};

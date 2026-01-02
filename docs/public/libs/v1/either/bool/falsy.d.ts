import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink, type FalsyValue } from "../../common";
import { type Kind } from "../../common/kind";
import { eitherBoolKind } from "./base";
import { bool } from "./create";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
export declare const eitherBoolFalsyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-falsy", unknown>>;
type _EitherBoolFalsy<GenericValue extends FalsyValue = FalsyValue> = (EitherLeft<"bool", GenericValue> & Kind<typeof eitherBoolKind.definition> & Kind<typeof eitherBoolFalsyKind.definition>);
export interface EitherBoolFalsy<GenericValue extends FalsyValue = FalsyValue> extends _EitherBoolFalsy<GenericValue> {
}
export declare function boolFalsy<const GenericValue extends FalsyValue = undefined>(value?: GenericValue): EitherBoolFalsy<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isBoolFalsy<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherBoolFalsy>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof bool<GenericValue>>;
export declare function whenIsBoolFalsy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherBoolFalsy>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherBoolFalsy>;
export declare function whenIsBoolFalsy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherBoolFalsy>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
export {};

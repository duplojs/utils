import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { eitherBoolKind } from "./base";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { bool } from "./create";
export declare const eitherBoolTruthyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-truthy", unknown>>;
type _EitherBoolTruthy<GenericValue extends unknown = unknown> = (EitherRight<"bool", GenericValue> & Kind<typeof eitherBoolKind.definition> & Kind<typeof eitherBoolTruthyKind.definition>);
export interface EitherBoolTruthy<GenericValue extends unknown = unknown> extends _EitherBoolTruthy<GenericValue> {
}
export declare function boolTruthy<const GenericValue extends unknown>(value: GenericValue): EitherBoolTruthy<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isBoolTruthy<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherBoolTruthy>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof bool<GenericValue>>;
export declare function whenIsBoolTruthy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<GenericInput>, EitherBoolTruthy>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherBoolTruthy>;
export declare function whenIsBoolTruthy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<GenericInput>, EitherBoolTruthy>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolTruthy>;
export {};

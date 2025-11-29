import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { nullable } from "./create";
import { eitherNullableKind } from "./base";
export declare const eitherNullableEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullable-empty", unknown>>;
type _EitherNullableEmpty = (EitherLeft<"nullable", null> & Kind<typeof eitherNullableKind.definition> & Kind<typeof eitherNullableEmptyKind.definition>);
export interface EitherNullableEmpty extends _EitherNullableEmpty {
}
type Either = EitherRight | EitherLeft;
export declare function nullableEmpty(): EitherNullableEmpty;
export declare function isNullableEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherNullableEmpty>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullable<GenericValue>>;
export declare function whenIsNullableEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullableEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export declare function whenIsNullableEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullableEmpty>>) => GenericOutput): GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullableEmpty>;
export {};

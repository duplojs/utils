import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { nullish } from "./create";
import { eitherNullishKind } from "./base";
export type NullishValue = null | undefined;
export declare const eitherNullishEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-empty", unknown>>;
type _EitherNullishEmpty<GenericValue extends NullishValue = NullishValue> = (EitherLeft<"nullish", GenericValue> & Kind<typeof eitherNullishKind.definition> & Kind<typeof eitherNullishEmptyKind.definition>);
export interface EitherNullishEmpty<GenericValue extends NullishValue = NullishValue> extends _EitherNullishEmpty<GenericValue> {
}
export declare function nullishEmpty<const GenericValue extends NullishValue = undefined>(value?: GenericValue): EitherNullishEmpty<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isNullishEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherNullishEmpty>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullish<GenericValue>>;
export declare function whenIsNullishEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<GenericInput>, EitherNullishEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullishEmpty>;
export declare function whenIsNullishEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<GenericInput>, EitherNullishEmpty>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export {};

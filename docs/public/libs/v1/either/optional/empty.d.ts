import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { optional } from "./create";
import { eitherOptionalKind } from "./base";
export declare const eitherOptionalEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"either-optional-empty", unknown>>;
type _EitherOptionalEmpty = (EitherLeft<"optional", undefined> & Kind<typeof eitherOptionalKind.definition> & Kind<typeof eitherOptionalEmptyKind.definition>);
export interface EitherOptionalEmpty extends _EitherOptionalEmpty {
}
type Either = EitherRight | EitherLeft;
export declare function optionalEmpty(): EitherOptionalEmpty;
export declare function isOptionalEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherOptionalEmpty>;
type ToOptionalEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof optional<GenericValue>>;
export declare function whenIsOptionalEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<GenericInput>, EitherOptionalEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalEmpty>;
export declare function whenIsOptionalEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<GenericInput>, EitherOptionalEmpty>>) => GenericOutput): GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalEmpty>;
export {};

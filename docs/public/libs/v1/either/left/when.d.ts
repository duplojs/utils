import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type EitherLeft } from "./create";
export declare function whenIsLeft<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, EitherLeft>>) => GenericOutput): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, EitherLeft> | GenericOutput;
export declare function whenIsLeft<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, EitherLeft>>) => GenericOutput): Exclude<GenericInput, EitherLeft> | GenericOutput;

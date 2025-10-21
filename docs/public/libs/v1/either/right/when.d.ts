import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type EitherRight } from "./create";
export declare function whenIsRight<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<GenericInput, EitherRight>>) => GenericOutput): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, EitherRight> | GenericOutput;
export declare function whenIsRight<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<GenericInput, EitherRight>>) => GenericOutput): Exclude<GenericInput, EitherRight> | GenericOutput;

import { type Kind, type WrappedValue, type AnyValue, type Unwrap, type BreakGenericLink } from "../common";
import { type EitherRight } from "./right";
import { type EitherLeft } from "./left";
import { eitherInformationKind } from "./kind";
type Either = EitherRight | EitherLeft;
export declare function whenHasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof eitherInformationKind.getValue<GenericInput>> : never), const GenericOutput extends AnyValue>(information: GenericInformation | GenericInformation[], theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<BreakGenericLink<GenericInput>, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
export declare function whenHasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof eitherInformationKind.getValue<GenericInput>> : never), const GenericOutput extends AnyValue>(input: GenericInput, information: GenericInformation | GenericInformation[], theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput): GenericOutput | Exclude<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
export {};

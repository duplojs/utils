import { type EitherLeft } from "./create";
export declare function isLeft<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherLeft>;

import { type EitherRight } from "./create";
export declare function isRight<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherRight>;

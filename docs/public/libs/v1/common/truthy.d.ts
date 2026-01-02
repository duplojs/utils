import { type FalsyValue } from "./types";
export type TruthyValue<GenericInput extends unknown> = Exclude<GenericInput, FalsyValue>;
export declare function truthy<GenericInput extends unknown>(input: GenericInput): input is TruthyValue<GenericInput>;

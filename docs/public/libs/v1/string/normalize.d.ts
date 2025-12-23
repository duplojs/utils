import { type NormalizeForm } from "./types/normalizeForm";
export declare function normalize<GenericInput extends string>(form: NormalizeForm): (input: GenericInput) => string;
export declare function normalize<GenericInput extends string>(input: GenericInput, form: NormalizeForm): string;

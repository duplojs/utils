import { type AnyFunction } from "../../../common";
export type ComplexUnMatchedFunction<GenericInput extends unknown, GenericPatternValue extends unknown> = ([
    Extract<GenericInput, AnyFunction>,
    Extract<GenericPatternValue, AnyFunction>
] extends [
    infer inferredInput,
    infer inferredPatternValue
] ? Exclude<inferredInput, inferredPatternValue> : never);

import { type IsEqual } from "./isEqual";
export type FixDeepFunctionInfer<GenericValue extends unknown, GenericValueInfer extends unknown> = IsEqual<GenericValueInfer, never> extends true ? NoInfer<GenericValue> : GenericValueInfer;

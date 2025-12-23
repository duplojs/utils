import { type IsEqual } from "./isEqual";
export type NeverCoalescing<GenericValue extends unknown, GenericCoalescingValue extends unknown> = IsEqual<GenericValue, never> extends true ? GenericCoalescingValue : GenericValue;

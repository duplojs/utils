export type NeverCoalescing<GenericValue extends unknown, GenericCoalescingValue extends unknown> = [GenericValue] extends [never] ? GenericCoalescingValue : GenericValue;

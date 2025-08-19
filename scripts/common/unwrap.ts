import { TheValue } from "./theValue";

export function unwrap<
    GenericValue extends unknown
>(
    {value}: TheValue<GenericValue>
) {
    return value
}
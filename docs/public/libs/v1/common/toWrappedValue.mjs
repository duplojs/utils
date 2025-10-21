import { wrapValue, isWrappedValue } from './wrapValue.mjs';

function toWrappedValue(value) {
    return isWrappedValue(value)
        ? value
        : wrapValue(value);
}

export { toWrappedValue };
